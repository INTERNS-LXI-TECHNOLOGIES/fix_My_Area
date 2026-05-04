package com.diviso.fix_my_area.service;

import com.diviso.fix_my_area.entity.Issue;
import com.diviso.fix_my_area.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IssueService {

    @Autowired
    private IssueRepository issueRepository;

    public List<Issue> getFilteredIssues(String filter) {
        if ("Urgent".equalsIgnoreCase(filter)) {
            return issueRepository.findByUrgentTrue();
        } else if ("In Progress".equalsIgnoreCase(filter)) {
            return issueRepository.findByStatus("UNDER REVIEW");
        }
        return issueRepository.findAll();
    }
}