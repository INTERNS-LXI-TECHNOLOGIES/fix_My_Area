package com.diviso.fix_my_area.controller;

import com.diviso.fix_my_area.entity.Issue;
import com.diviso.fix_my_area.service.IssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/issues")
@CrossOrigin(origins = "http://localhost:3000")
public class IssueController {

    @Autowired
    private IssueService issueService;

    @GetMapping
    public ResponseEntity<List<Issue>> getFilteredIssues(@RequestParam(required = false, defaultValue = "All") String filter) {
        return ResponseEntity.ok(issueService.getFilteredIssues(filter));
    }
}