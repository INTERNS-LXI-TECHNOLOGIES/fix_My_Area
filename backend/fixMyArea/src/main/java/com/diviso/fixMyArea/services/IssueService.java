package com.diviso.fixMyArea.services;

import com.diviso.fixMyArea.entities.Issue;
import com.diviso.fixMyArea.entities.IssueStatus;
import com.diviso.fixMyArea.repository.IssueRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.diviso.fixMyArea.entities.Location;
import com.diviso.fixMyArea.entities.User;
import java.time.LocalDateTime;


import com.diviso.fixMyArea.entities.Category;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class IssueService{

    private final IssueRepository repository;

    private final LocationService locationService;

    private final UserService userService;

    private final CategoryService categoryService;


    public List<Issue> findAll() {
        return repository.findAll();
    }

    public Optional<Issue> findById(Long id) {
        
        return repository.findById(id);

    }

    public Issue save(Issue issue){



           return repository.save(issue);


    }

    public void deleteById(Long id) {

        repository.deleteById(id);

    }


}
