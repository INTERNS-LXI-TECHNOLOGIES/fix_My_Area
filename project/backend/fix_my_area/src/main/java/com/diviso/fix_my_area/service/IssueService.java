package com.diviso.fix_my_area.service;

import com.diviso.fix_my_area.entity.Issue;
import com.diviso.fix_my_area.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.diviso.fix_my_area.repository.IssueCommentRepository;
import com.diviso.fix_my_area.entity.IssueComment;

@Service
public class IssueService {

@Autowired
private IssueCommentService issueCommentService;



    @Autowired
    private IssueRepository repository;

    public List<Issue> findAll() {
        return repository.findAll();
    }

    public Optional<Issue> findById(Long id) {
        return repository.findById(id);
    }

    public Issue save(Issue entity) {



        return repository.save(entity);


    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
