package com.diviso.fix_my_area.controller;

import com.diviso.fix_my_area.entity.IssueComment;
import com.diviso.fix_my_area.service.IssueCommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.diviso.fix_my_area.dto.IssueCommentRequest;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import java.util.List;


@RestController
@RequestMapping("/api/issuecomments")
public class IssueCommentController {

    @Autowired
    private IssueCommentService service;

    @GetMapping
    public List<IssueComment> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<IssueComment> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }



@PostMapping
public IssueComment create(
    @org.springframework.web.bind.annotation.RequestBody // Spring's logic
    @RequestBody(description = "Issue Comment Request", required = true) // OpenAPI's logic
    IssueCommentRequest request
) {
    return service.saveFromDto(request);
}


    @PutMapping("/{id}")
    public ResponseEntity<IssueComment> update(@PathVariable Long id, @RequestBody IssueComment issueComment) {
        return service.findById(id)
                .map(existingObj -> {
                    issueComment.setId(id);
                    return ResponseEntity.ok(service.save(issueComment));

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
