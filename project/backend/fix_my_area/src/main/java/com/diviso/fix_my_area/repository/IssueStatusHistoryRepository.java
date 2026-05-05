package com.diviso.fix_my_area.repository;

import com.diviso.fix_my_area.entity.IssueStatusHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;  

@Repository
public interface IssueStatusHistoryRepository extends JpaRepository<IssueStatusHistory, Long> {

     List<IssueStatusHistory> findByIssue_IdOrderByChangedAtAsc(Long issueId);

}
