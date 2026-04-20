package com.diviso.fix_my_area.controller;

import com.diviso.fix_my_area.entity.AuthorityJurisdiction;
import com.diviso.fix_my_area.service.AuthorityJurisdictionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/authorityjurisdictions")
public class AuthorityJurisdictionController {

    @Autowired
    private AuthorityJurisdictionService service;

    @GetMapping
    public List<AuthorityJurisdiction> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<AuthorityJurisdiction> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public AuthorityJurisdiction create(@RequestBody AuthorityJurisdiction authorityJurisdiction) {
        return service.save(authorityJurisdiction);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AuthorityJurisdiction> update(@PathVariable Long id, @RequestBody AuthorityJurisdiction authorityJurisdiction) {
        return service.findById(id)
                .map(existingObj -> {
                    authorityJurisdiction.setId(id);
                    return ResponseEntity.ok(service.save(authorityJurisdiction));
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
