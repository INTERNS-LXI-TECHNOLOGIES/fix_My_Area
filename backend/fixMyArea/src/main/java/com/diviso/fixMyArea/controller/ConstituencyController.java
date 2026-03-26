package com.diviso.fixMyArea.controller;

import lombok.RequiredArgsConstructor;

import com.diviso.fixMyArea.entities.Constituency;
import com.diviso.fixMyArea.services.ConstituencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/constituencies")
@RequiredArgsConstructor
public class ConstituencyController {

    private final ConstituencyService service;

    @GetMapping
    public List<Constituency> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Constituency> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Constituency create(@RequestBody Constituency entity) {
        return service.save(entity);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Constituency> update(@PathVariable Long id, @RequestBody Constituency entity) {
        return service.findById(id)
                .map(existingEntity -> {
                    entity.setId(id);
                    return ResponseEntity.ok(service.save(entity));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        return service.findById(id)
                .map(existingEntity -> {
                    service.deleteById(id);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
