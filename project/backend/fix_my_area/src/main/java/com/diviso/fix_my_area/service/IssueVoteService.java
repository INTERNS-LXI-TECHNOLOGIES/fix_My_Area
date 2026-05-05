package com.diviso.fix_my_area.service;

import com.diviso.fix_my_area.entity.IssueVote;
import com.diviso.fix_my_area.repository.IssueVoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.diviso.fix_my_area.repository.IssueRepository;
import com.diviso.fix_my_area.entity.Issue;
import com.diviso.fix_my_area.dto.IssueVoteRequest;
import com.diviso.fix_my_area.repository.UserProfileRepository;
import com.diviso.fix_my_area.entity.UserProfile;
import org.springframework.transaction.annotation.Transactional;
@Service
public class IssueVoteService {

    @Autowired
    private IssueVoteRepository repository;

    @Autowired
    private IssueRepository issueRepository;

    @Autowired
    private UserProfileRepository userProfileRepository;



    public List<IssueVote> findAll() {
        return repository.findAll();
    }

    public Optional<IssueVote> findById(Long id) {
        return repository.findById(id);
    }


    public IssueVote save(IssueVote entity) {

      return repository.save(entity);

    }


    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    @Transactional
    public IssueVote dtoFormData(IssueVoteRequest dto) {

        IssueVote vote = new IssueVote();

        Long issueId = dto.getIssueId();

        System.out.println("My Issue Id " + issueId);

        Long userProfileId = dto.getUserProfileId();

        Issue issue = issueRepository.findById(issueId)
                .orElseThrow(() -> new RuntimeException("Issue not found with id: " + issueId));


        UserProfile profile = userProfileRepository.findById(userProfileId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userProfileId));



        vote.setIssue(issue);
        vote.setUserProfile(profile);

        Integer oldVote = issue.getVoteCount();

        if (oldVote == null) {
            issue.setVoteCount(1);
        } else {
            issue.setVoteCount(oldVote + 1);
        }

        issueRepository.save(issue);

        return repository.save(vote);
    }


}
