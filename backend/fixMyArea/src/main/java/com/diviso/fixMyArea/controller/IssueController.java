package com.diviso.fixMyArea.controller;

import com.diviso.fixMyArea.entities.Issue;
import com.diviso.fixMyArea.services.IssueService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/issues")
@RequiredArgsConstructor
public class IssueController {

    private final IssueService service;

    @GetMapping
    public List<Issue> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Issue> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Issue create(@RequestBody Issue issue) {
        return service.save(issue);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Issue> update(@PathVariable Long id, @RequestBody Issue issue) {
        return service.findById(id)
                .map(existing -> {
                    issue.setId(id);
                    return ResponseEntity.ok(service.save(issue));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){

        return service.findById(id)
                .map(found -> {
                    service.deleteById(id);
                    return ResponseEntity.noContent().build();
                })
                .orElse(ResponseEntity.notFound().build());

    }
}
