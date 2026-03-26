package com.diviso.fixMyArea.services;

import lombok.RequiredArgsConstructor;

import com.diviso.fixMyArea.entities.Constituency;
import com.diviso.fixMyArea.repository.ConstituencyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ConstituencyService {

    private final ConstituencyRepository repository;

    public List<Constituency> findAll() {
        return repository.findAll();
    }

    public Optional<Constituency> findById(Long id) {
        return repository.findById(id);
    }

    public Constituency save(Constituency entity) {
        return repository.save(entity);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
