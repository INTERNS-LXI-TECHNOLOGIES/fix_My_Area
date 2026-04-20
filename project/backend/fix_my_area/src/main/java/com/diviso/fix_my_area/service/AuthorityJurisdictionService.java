package com.diviso.fix_my_area.service;

import com.diviso.fix_my_area.entity.AuthorityJurisdiction;
import com.diviso.fix_my_area.repository.AuthorityJurisdictionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class AuthorityJurisdictionService {

    @Autowired
    private AuthorityJurisdictionRepository repository;

    public List<AuthorityJurisdiction> findAll() {
        return repository.findAll();
    }

    public Optional<AuthorityJurisdiction> findById(Long id) {
        return repository.findById(id);
    }

    public AuthorityJurisdiction save(AuthorityJurisdiction entity) {
        return repository.save(entity);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
