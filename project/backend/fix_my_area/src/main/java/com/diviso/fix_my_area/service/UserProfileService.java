package com.diviso.fix_my_area.service;

import com.diviso.fix_my_area.entity.UserProfile;
import com.diviso.fix_my_area.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserProfileService {

    @Autowired
    private UserProfileRepository userProfileRepository;

    public UserProfile getFirstUser() {
        // Temporary approach: grabs the first user profile available in the DB
        return userProfileRepository.findAll().stream().findFirst().orElse(null);
    }
}