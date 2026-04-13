package com.diviso.fix_my_area.service;

import com.diviso.fix_my_area.entity.IssueCategory;
import com.diviso.fix_my_area.repository.IssueCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class IssueCategoryService {

    @Autowired
    private IssueCategoryRepository repository;

    public List<IssueCategory> findAll() {
        return repository.findAll();
    }

    public Optional<IssueCategory> findById(Long id) {
        return repository.findById(id);
    }

    public IssueCategory save(IssueCategory entity) {
        return repository.save(entity);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
