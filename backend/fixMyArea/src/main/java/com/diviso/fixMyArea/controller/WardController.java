package com.diviso.fixMyArea.controller;

import lombok.RequiredArgsConstructor;

import com.diviso.fixMyArea.entities.Ward;
import com.diviso.fixMyArea.services.WardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wards")
@RequiredArgsConstructor
public class WardController {

    private final WardService service;

    @GetMapping
    public List<Ward> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ward> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Ward create(@RequestBody Ward entity) {
        return service.save(entity);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ward> update(@PathVariable Long id, @RequestBody Ward entity) {
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
