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
import com.diviso.fix_my_area.dto.IssueCommentRequest;

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

public IssueComment saveFromDto(IssueCommentRequest dto) {


    
System.out.println("IssueId: " + dto.getIssueId());
System.out.println("UserProfileId: " + dto.getUserProfileId());


    IssueComment comment = new IssueComment();

    comment.setContent(dto.getContent());

    
    Issue issue = issueRepository.findById(dto.getIssueId())
        .orElseThrow(() -> new RuntimeException("Issue not found"));
    comment.setIssue(issue);

 

    
    UserProfile user = userProfileRepository.findById(dto.getUserProfileId())
        .orElseThrow(() -> new RuntimeException("User not found"));
    comment.setUserProfile(user);




    return repository.save(comment);
}

public IssueComment save(IssueComment comment) {
    return repository.save(comment);
}


public void deleteById(Long id) {
    repository.deleteById(id);
}

}
