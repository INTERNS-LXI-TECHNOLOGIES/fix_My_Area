package com.diviso.fix_my_area.repository;

import com.diviso.fix_my_area.entity.Issue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface IssueRepository extends JpaRepository<Issue, Long> {
    List<Issue> findByUrgentTrue();
    List<Issue> findByStatus(String status);
}