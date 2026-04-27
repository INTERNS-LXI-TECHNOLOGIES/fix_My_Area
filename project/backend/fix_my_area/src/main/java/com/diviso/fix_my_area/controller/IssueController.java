package com.diviso.fix_my_area.controller;

import com.diviso.fix_my_area.entity.Issue;
import com.diviso.fix_my_area.entity.IssueCategory;
import com.diviso.fix_my_area.entity.Location;
import com.diviso.fix_my_area.enumeration.IssueStatus;
import com.diviso.fix_my_area.enumeration.PriorityLevel;
import com.diviso.fix_my_area.enumeration.VisibilityLevel;
import com.diviso.fix_my_area.service.IssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.diviso.fix_my_area.repository.IssueCategoryRepository;

import java.util.List;

@RestController
@RequestMapping("/api/issues")
public class IssueController {

    @Autowired
    private IssueService service;
    @Autowired
    private IssueCategoryRepository issueCategoryRepository;

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
                .map(existingObj -> {
                    issue.setId(id);
                    return ResponseEntity.ok(service.save(issue));
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
 @PostMapping("/create")
public ResponseEntity<Issue> createIssue(
        @RequestParam String title,
        @RequestParam String description,
        @RequestParam Long issueCategoryId,
        @RequestParam Double latitude,
        @RequestParam Double longitude,
        @RequestParam(required = false) MultipartFile file
) {

    Issue issue = new Issue();
    issue.setTitle(title);
    issue.setDescription(description);
    issue.setCreatedAt(java.time.Instant.now());
    issue.setIsDeleted(false);

    // ✅ REQUIRED FIX
    issue.setVisibilityLevel(VisibilityLevel.WARD); // Default visibility level
    issue.setIssueStatus(IssueStatus.RAISED); // Default status
    issue.setPriorityLevel(PriorityLevel.MEDIUM); // Default priority

    // ✅ Category (correct)
    IssueCategory category = issueCategoryRepository.findById(issueCategoryId)
            .orElseThrow(() -> new RuntimeException("Category not found"));

    issue.setIssueCategory(category);

    // ✅ Location
    Location location = new Location();
    location.setLatitude(latitude);
    location.setLongitude(longitude);
    issue.setLocation(location);

    return ResponseEntity.ok(service.save(issue));
}
}
