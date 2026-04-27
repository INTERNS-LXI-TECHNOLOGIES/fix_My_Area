package com.diviso.fix_my_area.controller;

import com.diviso.fix_my_area.dto.IssueFeedDTO;
import com.diviso.fix_my_area.dto.PagedResponse;
import com.diviso.fix_my_area.dto.ReactionRequest;
import com.diviso.fix_my_area.service.FeedService;
import com.diviso.fix_my_area.service.ReactionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class FeedController {

    private final FeedService feedService;
    private final ReactionService reactionService;

    public FeedController(FeedService feedService, ReactionService reactionService) {
        this.feedService = feedService;
        this.reactionService = reactionService;
    }

    @GetMapping("/feed")
    public ResponseEntity<PagedResponse<IssueFeedDTO>> getFeed(
            @RequestParam(required = false) String filter,
            @RequestParam(required = false) Long wardId,
            @RequestParam(required = false) Double lat,
            @RequestParam(required = false) Double lng,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        
        PagedResponse<IssueFeedDTO> response = feedService.getFeed(filter, wardId, lat, lng, page, size);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/issues/{id}/react")
    public ResponseEntity<Void> reactToIssue(@PathVariable Long id, @RequestBody ReactionRequest request) {
        // In a real scenario, get userId from SecurityContext
        Long userId = 101L; // Hardcoded for demo purposes
        reactionService.reactToIssue(id, userId, request.getType());
        return ResponseEntity.ok().build();
    }
}
