package com.diviso.fix_my_area.service;

import com.diviso.fix_my_area.entity.Ward;
import com.diviso.fix_my_area.repository.WardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class WardService {

    @Autowired
    private WardRepository repository;

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
