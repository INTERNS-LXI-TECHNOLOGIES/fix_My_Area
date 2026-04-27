package com.diviso.fix_my_area.repository;

import java.util.List;
import com.diviso.fix_my_area.entity.IssueComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IssueCommentRepository extends JpaRepository<IssueComment, Long> {





}
