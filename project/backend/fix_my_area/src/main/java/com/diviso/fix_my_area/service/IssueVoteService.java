package com.diviso.fix_my_area.service;

import com.diviso.fix_my_area.entity.IssueVote;
import com.diviso.fix_my_area.repository.IssueVoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class IssueVoteService {

    @Autowired
    private IssueVoteRepository repository;

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
}
