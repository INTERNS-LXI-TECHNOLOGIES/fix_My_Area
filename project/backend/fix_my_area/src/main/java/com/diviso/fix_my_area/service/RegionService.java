package com.diviso.fix_my_area.service;

import com.diviso.fix_my_area.entity.Region;
import com.diviso.fix_my_area.repository.RegionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class RegionService {

    @Autowired
    private RegionRepository repository;

    public List<Region> findAll() {
        return repository.findAll();
    }

    public Optional<Region> findById(Long id) {
        return repository.findById(id);
    }

    public Region save(Region entity) {
        return repository.save(entity);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
