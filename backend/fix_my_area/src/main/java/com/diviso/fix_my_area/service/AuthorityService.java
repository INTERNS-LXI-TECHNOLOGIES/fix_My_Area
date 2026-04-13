package com.diviso.fix_my_area.service;

import com.diviso.fix_my_area.entity.Authority;
import com.diviso.fix_my_area.repository.AuthorityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class AuthorityService {

    @Autowired
    private AuthorityRepository repository;

    public List<Authority> findAll() {
        return repository.findAll();
    }

    public Optional<Authority> findById(Long id) {
        return repository.findById(id);
    }

    public Authority save(Authority entity) {
        return repository.save(entity);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
