package com.diviso.fix_my_area.service;

import com.diviso.fix_my_area.entity.UserProfile;
import com.diviso.fix_my_area.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserProfileService {

    @Autowired
    private UserProfileRepository repository;

    public List<UserProfile> findAll() {
        return repository.findAll();
    }

    public Optional<UserProfile> findById(Long id) {
        return repository.findById(id);
    }

    public UserProfile save(UserProfile entity) {
        return repository.save(entity);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
