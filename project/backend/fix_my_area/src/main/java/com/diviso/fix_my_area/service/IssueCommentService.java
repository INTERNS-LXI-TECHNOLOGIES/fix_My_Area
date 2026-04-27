package com.diviso.fix_my_area.service;

import com.diviso.fix_my_area.entity.IssueComment;
import com.diviso.fix_my_area.repository.IssueCommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.diviso.fix_my_area.entity.Issue;
import org.springframework.transaction.annotation.Transactional;
import com.diviso.fix_my_area.repository.IssueRepository;
import com.diviso.fix_my_area.repository.UserProfileRepository;
import com.diviso.fix_my_area.entity.UserProfile;

@Service
public class IssueCommentService {

    @Autowired
    private IssueCommentRepository repository;

    @Autowired
    private IssueRepository issueRepository;

    @Autowired
    private UserProfileRepository userProfileRepository;

    public List<IssueComment> findAll() {
        return repository.findAll();
    }

    public Optional<IssueComment> findById(Long id) {
        return repository.findById(id);
    }


@Transactional
public IssueComment save(IssueComment issueComment) {
    
        // 1. Fix the Issue reference
        if (issueComment.getIssue() != null && issueComment.getIssue().getId() != null) {
            issueComment.setIssue(issueRepository.getReferenceById(issueComment.getIssue().getId()));
        }

        // 2. Fix the UserProfile reference (THIS IS THE CRASH FIX)
        if (issueComment.getUserProfile() != null && issueComment.getUserProfile().getId() != null) {
            // By using getReferenceById, we tell Hibernate to use the existing DB record
            issueComment.setUserProfile(userProfileRepository.getReferenceById(issueComment.getUserProfile().getId()));
        }
        
        // 3. Set default timestamp if missing
        if (issueComment.getCreatedAt() == null) {
            issueComment.setCreatedAt(java.time.Instant.now());
        }

        return repository.save(issueComment);
    }



    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
