package com.diviso.fixMyArea.services;

import lombok.RequiredArgsConstructor;

import com.diviso.fixMyArea.entities.StatusLog;
import com.diviso.fixMyArea.repository.StatusLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StatusLogService {

    private final StatusLogRepository repository;

    public List<StatusLog> findAll() {
        return repository.findAll();
    }

    public Optional<StatusLog> findById(Long id) {
        return repository.findById(id);
    }

    public StatusLog save(StatusLog entity) {
        return repository.save(entity);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
