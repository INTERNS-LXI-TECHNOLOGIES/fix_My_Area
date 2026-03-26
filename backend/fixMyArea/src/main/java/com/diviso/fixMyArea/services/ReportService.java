package com.diviso.fixMyArea.services;

import lombok.RequiredArgsConstructor;

import com.diviso.fixMyArea.entities.Report;
import com.diviso.fixMyArea.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReportService {

    private final ReportRepository repository;

    public List<Report> findAll() {
        return repository.findAll();
    }

    public Optional<Report> findById(Long id) {
        return repository.findById(id);
    }

    public Report save(Report entity) {
        return repository.save(entity);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
