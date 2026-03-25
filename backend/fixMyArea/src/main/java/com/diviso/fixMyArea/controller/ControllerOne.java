
package com.diviso.fixMyArea.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diviso.fixMyArea.model.UserProfile;
import com.diviso.fixMyArea.service.UserProfileService;

@RequestMapping("/controllerOne")
@RestController
public class ControllerOne{

@Autowired
private UserProfileService userProfileService;

@PostMapping("/addUserProfile")
public void addUserProfile(@RequestBody UserProfile userProfile){
    
  userProfileService.save(userProfile);

}

}