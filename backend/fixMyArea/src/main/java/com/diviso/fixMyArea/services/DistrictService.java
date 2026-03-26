package com.diviso.fixMyArea.services;

import lombok.RequiredArgsConstructor;

import com.diviso.fixMyArea.entities.District;
import com.diviso.fixMyArea.repository.DistrictRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DistrictService {

    private final DistrictRepository repository;

    public List<District> findAll() {
        return repository.findAll();
    }

    public Optional<District> findById(Long id) {
        return repository.findById(id);
    }

    public District save(District entity) {
        return repository.save(entity);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
