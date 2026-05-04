package com.diviso.fix_my_area.controller;

import com.diviso.fix_my_area.entity.*;
import com.diviso.fix_my_area.enumeration.IssueStatus;
import com.diviso.fix_my_area.service.IssueService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/issues")
@CrossOrigin
public class IssueController {

    @Autowired
    private IssueService service;

    // ✅ GET ALL
    @GetMapping
    public List<Issue> getAll() {
        return service.findAll();
    }

    // ✅ GET BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Issue> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // ✅ CREATE
    @PostMapping
    public Issue create(@RequestBody Issue issue) {
        return service.save(issue);
    }

    // ✅ UPDATE FULL ISSUE
    @PutMapping("/{id}")
    public ResponseEntity<Issue> update(@PathVariable Long id, @RequestBody Issue issue) {
        return service.findById(id)
                .map(existingObj -> {
                    issue.setId(id);
                    return ResponseEntity.ok(service.save(issue));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // ✅ DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        return service.findById(id)
                .map(existingObj -> {
                    service.deleteById(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // 🔥 NEW: UPDATE STATUS (for timeline)
    @PutMapping("/{id}/status")
    public ResponseEntity<Issue> updateStatus(
            @PathVariable Long id,
            @RequestParam IssueStatus status,
            @RequestParam(required = false) String remarks) {

        Issue updated = service.updateStatus(id, status, remarks);
        return ResponseEntity.ok(updated);
    }

    // 🔥 NEW: GET TIMELINE
    @GetMapping("/{id}/timeline")
    public ResponseEntity<List<IssueStatusHistory>> getTimeline(@PathVariable Long id) {
        return ResponseEntity.ok(service.getTimeline(id));
    }
}