package com.diviso.fix_my_area.service;

import com.diviso.fix_my_area.entity.IssueComment;
import com.diviso.fix_my_area.repository.IssueCommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class IssueCommentService {

    @Autowired
    private IssueCommentRepository repository;

    public List<IssueComment> findAll() {
        return repository.findAll();
    }

    public Optional<IssueComment> findById(Long id) {
        return repository.findById(id);
    }

    public IssueComment save(IssueComment entity) {
        return repository.save(entity);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
