package com.diviso.fix_my_area.controller;

import com.diviso.fix_my_area.entity.District;
import com.diviso.fix_my_area.service.DistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/districts")
public class DistrictController {

    @Autowired
    private DistrictService service;

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
    public District create(@RequestBody District district) {
        return service.save(district);
    }

    @PutMapping("/{id}")
    public ResponseEntity<District> update(@PathVariable Long id, @RequestBody District district) {
        return service.findById(id)
                .map(existingObj -> {
                    district.setId(id);
                    return ResponseEntity.ok(service.save(district));
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
