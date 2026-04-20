package com.diviso.fix_my_area.controller;

import com.diviso.fix_my_area.entity.UserProfile;
import com.diviso.fix_my_area.service.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user_profiles")
public class UserProfileController {

    @Autowired
    private UserProfileService service;

    @GetMapping
    public List<UserProfile> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserProfile> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public UserProfile create(@RequestBody UserProfile userProfile) {
        return service.save(userProfile);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserProfile> update(@PathVariable Long id, @RequestBody UserProfile userProfile) {
        return service.findById(id)
                .map(existingObj -> {
                    userProfile.setId(id);
                    return ResponseEntity.ok(service.save(userProfile));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        return service.findById(id)
                .map(existingObj -> {
                    service.deleteById(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
