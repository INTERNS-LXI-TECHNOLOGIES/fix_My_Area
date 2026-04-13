package com.diviso.fix_my_area.controller;

import com.diviso.fix_my_area.entity.Ward;
import com.diviso.fix_my_area.service.WardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wards")
public class WardController {

    @Autowired
    private WardService service;

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
    public Ward create(@RequestBody Ward ward) {
        return service.save(ward);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ward> update(@PathVariable Long id, @RequestBody Ward ward) {
        return service.findById(id)
                .map(existingObj -> {
                    ward.setId(id);
                    return ResponseEntity.ok(service.save(ward));
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
