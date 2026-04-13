package com.diviso.fix_my_area.controller;

import com.diviso.fix_my_area.entity.IssueStatusHistory;
import com.diviso.fix_my_area.service.IssueStatusHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/issuestatushistorys")
public class IssueStatusHistoryController {

    @Autowired
    private IssueStatusHistoryService service;

    @GetMapping
    public List<IssueStatusHistory> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<IssueStatusHistory> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public IssueStatusHistory create(@RequestBody IssueStatusHistory issueStatusHistory) {
        return service.save(issueStatusHistory);
    }

    @PutMapping("/{id}")
    public ResponseEntity<IssueStatusHistory> update(@PathVariable Long id, @RequestBody IssueStatusHistory issueStatusHistory) {
        return service.findById(id)
                .map(existingObj -> {
                    issueStatusHistory.setId(id);
                    return ResponseEntity.ok(service.save(issueStatusHistory));
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
