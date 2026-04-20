package com.diviso.fix_my_area.controller;

import com.diviso.fix_my_area.entity.Authority;
import com.diviso.fix_my_area.service.AuthorityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/authoritys")
public class AuthorityController {

    @Autowired
    private AuthorityService service;

    @GetMapping
    public List<Authority> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Authority> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Authority create(@RequestBody Authority authority) {
        return service.save(authority);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Authority> update(@PathVariable Long id, @RequestBody Authority authority) {
        return service.findById(id)
                .map(existingObj -> {
                    authority.setId(id);
                    return ResponseEntity.ok(service.save(authority));
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
