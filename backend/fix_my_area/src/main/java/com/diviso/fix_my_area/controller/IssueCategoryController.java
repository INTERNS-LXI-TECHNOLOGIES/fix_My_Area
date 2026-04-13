package com.diviso.fix_my_area.controller;

import com.diviso.fix_my_area.entity.IssueCategory;
import com.diviso.fix_my_area.service.IssueCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/issuecategorys")
public class IssueCategoryController {

    @Autowired
    private IssueCategoryService service;

    @GetMapping
    public List<IssueCategory> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<IssueCategory> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public IssueCategory create(@RequestBody IssueCategory issueCategory) {
        return service.save(issueCategory);
    }

    @PutMapping("/{id}")
    public ResponseEntity<IssueCategory> update(@PathVariable Long id, @RequestBody IssueCategory issueCategory) {
        return service.findById(id)
                .map(existingObj -> {
                    issueCategory.setId(id);
                    return ResponseEntity.ok(service.save(issueCategory));
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
