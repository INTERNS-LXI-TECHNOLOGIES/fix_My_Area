package com.diviso.fix_my_area.controller;

import com.diviso.fix_my_area.entity.Panchayath;
import com.diviso.fix_my_area.service.PanchayathService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/panchayaths")
public class PanchayathController {

    @Autowired
    private PanchayathService service;

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
    public Panchayath create(@RequestBody Panchayath panchayath) {
        return service.save(panchayath);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Panchayath> update(@PathVariable Long id, @RequestBody Panchayath panchayath) {
        return service.findById(id)
                .map(existingObj -> {
                    panchayath.setId(id);
                    return ResponseEntity.ok(service.save(panchayath));
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
