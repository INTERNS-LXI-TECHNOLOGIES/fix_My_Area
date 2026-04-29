package com.diviso.fix_my_area.service;

import com.diviso.fix_my_area.entity.Issue;
import com.diviso.fix_my_area.entity.IssueReaction;
import com.diviso.fix_my_area.entity.ReactionType;
import com.diviso.fix_my_area.repository.IssueReactionRepository;
import com.diviso.fix_my_area.repository.IssueRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReactionService {

    private final IssueReactionRepository issueReactionRepository;
    private final IssueRepository issueRepository;

    public ReactionService(IssueReactionRepository issueReactionRepository, IssueRepository issueRepository) {
        this.issueReactionRepository = issueReactionRepository;
        this.issueRepository = issueRepository;
    }

    public void reactToIssue(Long issueId, Long userId, String typeStr) {
        ReactionType newType = ReactionType.valueOf(typeStr.toUpperCase());

        Issue issue = issueRepository.findById(issueId)
                .orElseThrow(() -> new IllegalArgumentException("Issue not found"));

        Optional<IssueReaction> existingReaction = issueReactionRepository.findByIssueIdAndUserId(issueId, userId);

        if (existingReaction.isPresent()) {
            IssueReaction reaction = existingReaction.get();
            reaction.setType(newType);
            issueReactionRepository.save(reaction);
        } else {
            IssueReaction reaction = new IssueReaction();
            reaction.setIssue(issue);
            reaction.setUserId(userId);
            reaction.setType(newType);
            issueReactionRepository.save(reaction);
        }
    }
}
