package com.diviso.fixMyArea.services;

import com.diviso.fixMyArea.entities.Issue;
import com.diviso.fixMyArea.repository.IssueRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class IssueService {

    private final IssueRepository repository;

    public List<Issue> findAll() {
        return repository.findAll();
    }

    public Optional<Issue> findById(Long id) {
        
        return repository.findById(id);

    }

    public Issue save(Issue issue) {
        return repository.save(issue);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }

}
