package com.diviso.fixMyArea.services;

import lombok.RequiredArgsConstructor;

import com.diviso.fixMyArea.entities.Panchayath;
import com.diviso.fixMyArea.repository.PanchayathRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PanchayathService {

    private final PanchayathRepository repository;

    public List<Panchayath> findAll() {
        return repository.findAll();
    }

    public Optional<Panchayath> findById(Long id) {
        return repository.findById(id);
    }

    public Panchayath save(Panchayath entity) {
        return repository.save(entity);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
