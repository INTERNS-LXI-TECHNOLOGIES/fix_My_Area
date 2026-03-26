package com.diviso.fixMyArea.controllers;

import lombok.RequiredArgsConstructor;

import com.diviso.fixMyArea.entities.Panchayath;
import com.diviso.fixMyArea.services.PanchayathService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/panchayaths")
@RequiredArgsConstructor
public class PanchayathController {

    private final PanchayathService service;

    @GetMapping
    public List<Panchayath> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Panchayath> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Panchayath create(@RequestBody Panchayath entity) {
        return service.save(entity);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Panchayath> update(@PathVariable Long id, @RequestBody Panchayath entity) {
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
