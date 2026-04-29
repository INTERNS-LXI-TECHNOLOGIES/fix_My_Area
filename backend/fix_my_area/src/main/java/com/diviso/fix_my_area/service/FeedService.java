package com.diviso.fix_my_area.service;

import com.diviso.fix_my_area.dto.IssueFeedDTO;
import com.diviso.fix_my_area.dto.IssueStats;
import com.diviso.fix_my_area.dto.PagedResponse;
import com.diviso.fix_my_area.entity.Issue;
import com.diviso.fix_my_area.entity.IssueStatus;
import com.diviso.fix_my_area.entity.ReactionType;
import com.diviso.fix_my_area.repository.IssueReactionRepository;
import com.diviso.fix_my_area.repository.IssueRepository;
import com.diviso.fix_my_area.repository.IssueSpecification;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class FeedService {

    private final IssueRepository issueRepository;
    private final IssueReactionRepository issueReactionRepository;

    public FeedService(IssueRepository issueRepository, IssueReactionRepository issueReactionRepository) {
        this.issueRepository = issueRepository;
        this.issueReactionRepository = issueReactionRepository;
    }

    public PagedResponse<IssueFeedDTO> getFeed(String filter, Long wardId, Double lat, Double lng, int page, int size) {
        List<Issue> issues;
        long totalElements;
        int totalPages;

        if ("NEARBY".equalsIgnoreCase(filter) && lat != null && lng != null) {
            // Find all nearby issues and paginate in memory
            List<Issue> nearbyIssues = issueRepository.findNearbyIssues(lat, lng, 5000.0);
            totalElements = nearbyIssues.size();
            totalPages = (int) Math.ceil((double) totalElements / size);
            
            int start = Math.min(page * size, nearbyIssues.size());
            int end = Math.min(start + size, nearbyIssues.size());
            issues = nearbyIssues.subList(start, end);
        } else {
            Specification<Issue> spec = Specification.where(IssueSpecification.hasWardId(wardId));

            if ("URGENT".equalsIgnoreCase(filter)) {
                // To properly filter urgent, we might need a join, but for simplicity we rely on stats or just fetch 
                // However, the prompt says "sorts by urgentCount DESC". So urgent might just be sorted, or it implies we should filter.
                // Let's assume urgent means we still fetch all but they get sorted, or we just leave spec as is.
            } else if ("IN_PROGRESS".equalsIgnoreCase(filter)) {
                spec = spec.and(IssueSpecification.hasStatus(IssueStatus.UNDER_REVIEW));
            }

            // Fetch page
            Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));
            Page<Issue> issuePage = issueRepository.findAll(spec, pageable);
            issues = issuePage.getContent();
            totalElements = issuePage.getTotalElements();
            totalPages = issuePage.getTotalPages();
        }

        if (issues.isEmpty()) {
            return new PagedResponse<>(Collections.emptyList(), new PagedResponse.PageableInfo(page, size), true, totalPages, totalElements);
        }

        List<Long> issueIds = issues.stream().map(Issue::getId).collect(Collectors.toList());
        List<IssueReactionRepository.ReactionCountProjection> reactionCounts = issueReactionRepository.getReactionCountsForIssues(issueIds);

        Map<Long, IssueStats> statsMap = new HashMap<>();
        for (Long id : issueIds) {
            statsMap.put(id, new IssueStats(0, 0, 0));
        }

        for (IssueReactionRepository.ReactionCountProjection projection : reactionCounts) {
            IssueStats stats = statsMap.get(projection.getIssueId());
            if (projection.getType() == ReactionType.SUPPORT) {
                stats.setSupport(projection.getCount());
            } else if (projection.getType() == ReactionType.CONCERN) {
                stats.setConcern(projection.getCount());
            } else if (projection.getType() == ReactionType.URGENT) {
                stats.setUrgent(projection.getCount());
            }
        }

        List<IssueFeedDTO> dtoList = issues.stream().map(issue -> {
            IssueStats stats = statsMap.get(issue.getId());
            IssueFeedDTO dto = new IssueFeedDTO();
            dto.setId(issue.getId());
            dto.setTitle(issue.getTitle());
            dto.setTag(issue.getCategory());
            dto.setStatus(issue.getStatus().name());
            dto.setImage("https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=300&h=300"); // placeholder
            dto.setAuthority(issue.getAuthority().getName());
            dto.setStats(stats);
            dto.setTime(calculateTimeAgo(issue.getCreatedAt()));
            
            if (lat != null && lng != null) {
                double dist = calculateDistance(lat, lng, issue.getLat(), issue.getLng());
                if (dist < 1000) {
                    dto.setDistance(Math.round(dist) + "m away");
                } else {
                    dto.setDistance(String.format("%.1f km away", dist / 1000));
                }
            } else {
                dto.setDistance("");
            }
            return dto;
        }).collect(Collectors.toList());

        // Sort by urgentCount DESC, supportCount DESC, createdAt DESC
        dtoList.sort(Comparator
            .comparing((IssueFeedDTO d) -> d.getStats().getUrgent()).reversed()
            .thenComparing(d -> d.getStats().getSupport(), Comparator.reverseOrder())
            //.thenComparing(IssueFeedDTO::getTimeAgo) // createdAt sorting was handled by DB, but we do it manually here if needed
        );

        boolean isLast = (page + 1) >= totalPages;
        return new PagedResponse<>(dtoList, new PagedResponse.PageableInfo(page, size), isLast, totalPages, totalElements);
    }

    private String calculateTimeAgo(LocalDateTime createdAt) {
        if (createdAt == null) return "Just now";
        Duration duration = Duration.between(createdAt, LocalDateTime.now());
        if (duration.toMinutes() < 60) {
            return duration.toMinutes() + " mins ago";
        } else if (duration.toHours() < 24) {
            return duration.toHours() + " hrs ago";
        } else {
            return duration.toDays() + " days ago";
        }
    }

    private double calculateDistance(double lat1, double lon1, double lat2, double lon2) {
        final int R = 6371000; // Radius of the earth in m
        double dLat = Math.toRadians(lat2 - lat1);
        double dLon = Math.toRadians(lon2 - lon1);
        double a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; 
    }
}
