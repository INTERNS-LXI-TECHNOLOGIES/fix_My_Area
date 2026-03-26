package com.diviso.fixMyArea.controller;

import lombok.RequiredArgsConstructor;

import com.diviso.fixMyArea.entities.District;
import com.diviso.fixMyArea.services.DistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/districts")
@RequiredArgsConstructor
public class DistrictController {

    private final DistrictService service;

    @GetMapping
    public List<District> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<District> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public District create(@RequestBody District entity) {
        return service.save(entity);
    }

    @PutMapping("/{id}")
    public ResponseEntity<District> update(@PathVariable Long id, @RequestBody District entity) {
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
