package com.diviso.fix_my_area.service;

import com.diviso.fix_my_area.entity.Issue;
import com.diviso.fix_my_area.entity.IssueStatusHistory;
import com.diviso.fix_my_area.enumeration.IssueStatus;
import com.diviso.fix_my_area.repository.IssueRepository;
import com.diviso.fix_my_area.repository.IssueStatusHistoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

@Service
public class IssueService {

    @Autowired
    private IssueRepository repository;

    @Autowired
    private IssueStatusHistoryRepository historyRepository;

    // ✅ GET ALL
    public List<Issue> findAll() {
        return repository.findAll();
    }

    // ✅ GET BY ID
    public Optional<Issue> findById(Long id) {
        return repository.findById(id);
    }

    // ✅ CREATE ISSUE
    public Issue save(Issue entity) {
        if (entity.getStatus() == null) {
            entity.setStatus(IssueStatus.RAISED);
        }
        return repository.save(entity);
    }

    // ✅ DELETE
    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    // ✅ UPDATE STATUS + SAVE HISTORY
    public Issue updateStatus(Long issueId, IssueStatus newStatus, String remarks) {

        Issue issue = repository.findById(issueId)
                .orElseThrow(() -> new RuntimeException("Issue not found"));

        IssueStatus oldStatus = issue.getStatus() != null
                ? issue.getStatus()
                : IssueStatus.RAISED;

        // update main issue
        issue.setStatus(newStatus);
        Issue savedIssue = repository.save(issue);

        // save timeline history
        IssueStatusHistory history = new IssueStatusHistory();
        history.setIssue(savedIssue);
        history.setPreviousStatus(oldStatus);
        history.setNewStatus(newStatus);
        history.setRemarks(remarks);
        history.setChangedAt(Instant.now());

        historyRepository.save(history);

        return savedIssue;
    }

    // ✅ GET TIMELINE
    public List<IssueStatusHistory> getTimeline(Long issueId) {
        return historyRepository.findByIssue_IdOrderByChangedAtAsc(issueId);
    }
}