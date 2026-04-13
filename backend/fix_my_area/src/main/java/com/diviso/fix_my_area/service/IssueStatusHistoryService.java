package com.diviso.fix_my_area.service;

import com.diviso.fix_my_area.entity.IssueStatusHistory;
import com.diviso.fix_my_area.repository.IssueStatusHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class IssueStatusHistoryService {

    @Autowired
    private IssueStatusHistoryRepository repository;

    public List<IssueStatusHistory> findAll() {
        return repository.findAll();
    }

    public Optional<IssueStatusHistory> findById(Long id) {
        return repository.findById(id);
    }

    public IssueStatusHistory save(IssueStatusHistory entity) {
        return repository.save(entity);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
