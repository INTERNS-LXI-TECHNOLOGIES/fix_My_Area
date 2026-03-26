package com.diviso.fixMyArea.services;

import lombok.RequiredArgsConstructor;

import com.diviso.fixMyArea.entities.Ward;
import com.diviso.fixMyArea.repository.WardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class WardService {

    private final WardRepository repository;

    public List<Ward> findAll() {
        return repository.findAll();
    }

    public Optional<Ward> findById(Long id) {
        return repository.findById(id);
    }

    public Ward save(Ward entity) {
        return repository.save(entity);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
