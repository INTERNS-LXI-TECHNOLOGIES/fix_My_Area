package com.diviso.fix_my_area.service;

import com.diviso.fix_my_area.entity.District;
import com.diviso.fix_my_area.repository.DistrictRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class DistrictService {

    @Autowired
    private DistrictRepository repository;

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
