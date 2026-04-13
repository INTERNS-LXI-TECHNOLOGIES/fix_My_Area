package com.diviso.fix_my_area.controller;

import com.diviso.fix_my_area.entity.State;
import com.diviso.fix_my_area.service.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/states")
public class StateController {

    @Autowired
    private StateService service;

    @GetMapping
    public List<State> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<State> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public State create(@RequestBody State state) {
        return service.save(state);
    }

    @PutMapping("/{id}")
    public ResponseEntity<State> update(@PathVariable Long id, @RequestBody State state) {
        return service.findById(id)
                .map(existingObj -> {
                    state.setId(id);
                    return ResponseEntity.ok(service.save(state));
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
