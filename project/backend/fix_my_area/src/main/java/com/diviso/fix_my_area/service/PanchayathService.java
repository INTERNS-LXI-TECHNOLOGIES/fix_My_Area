package com.diviso.fix_my_area.service;

import com.diviso.fix_my_area.entity.Panchayath;
import com.diviso.fix_my_area.repository.PanchayathRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PanchayathService {

    @Autowired
    private PanchayathRepository repository;

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
