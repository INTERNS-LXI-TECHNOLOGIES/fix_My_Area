package com.diviso.fixMyArea.controllers;

import lombok.RequiredArgsConstructor;

import com.diviso.fixMyArea.entities.StatusLog;
import com.diviso.fixMyArea.services.StatusLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/status-logs")
@RequiredArgsConstructor
public class StatusLogController {

    private final StatusLogService service;

    @GetMapping
    public List<StatusLog> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<StatusLog> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public StatusLog create(@RequestBody StatusLog entity) {
        return service.save(entity);
    }

    @PutMapping("/{id}")
    public ResponseEntity<StatusLog> update(@PathVariable Long id, @RequestBody StatusLog entity) {
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
