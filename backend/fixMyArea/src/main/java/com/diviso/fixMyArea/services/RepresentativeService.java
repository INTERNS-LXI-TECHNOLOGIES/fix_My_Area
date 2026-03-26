package com.diviso.fixMyArea.services;

import lombok.RequiredArgsConstructor;

import com.diviso.fixMyArea.entities.Representative;
import com.diviso.fixMyArea.repository.RepresentativeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RepresentativeService {

    private final RepresentativeRepository repository;

    public List<Representative> findAll() {
        return repository.findAll();
    }

    public Optional<Representative> findById(Long id) {
        return repository.findById(id);
    }

    public Representative save(Representative entity) {
        return repository.save(entity);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
