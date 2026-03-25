package com.diviso.fixMyArea.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.diviso.fixMyArea.model.UserProfile;
import com.diviso.fixMyArea.repository.UserProfileRepository;

@Service
public class UserProfileService{
@Autowired
private UserProfileRepository userProfileRepository;



public void save(UserProfile userProfile){

userProfileRepository.save(userProfile);

}   
    







}