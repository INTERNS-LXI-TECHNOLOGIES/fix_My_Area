package com.diviso.fix_my_area.controller;

import com.diviso.fix_my_area.entity.IssueVote;
import com.diviso.fix_my_area.service.IssueVoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/issuevotes")
public class IssueVoteController {

    @Autowired
    private IssueVoteService service;

    @GetMapping
    public List<IssueVote> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<IssueVote> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public IssueVote create(@RequestBody IssueVote issueVote) {
        return service.save(issueVote);
    }

    @PutMapping("/{id}")
    public ResponseEntity<IssueVote> update(@PathVariable Long id, @RequestBody IssueVote issueVote) {
        return service.findById(id)
                .map(existingObj -> {
                    issueVote.setId(id);
                    return ResponseEntity.ok(service.save(issueVote));
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
