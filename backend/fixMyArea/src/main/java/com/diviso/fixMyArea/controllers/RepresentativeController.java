package com.diviso.fixMyArea.controllers;

import lombok.RequiredArgsConstructor;

import com.diviso.fixMyArea.entities.Representative;
import com.diviso.fixMyArea.services.RepresentativeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/representatives")
@RequiredArgsConstructor
public class RepresentativeController {

    private final RepresentativeService service;

    @GetMapping
    public List<Representative> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Representative> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Representative create(@RequestBody Representative entity) {
        return service.save(entity);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Representative> update(@PathVariable Long id, @RequestBody Representative entity) {
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
