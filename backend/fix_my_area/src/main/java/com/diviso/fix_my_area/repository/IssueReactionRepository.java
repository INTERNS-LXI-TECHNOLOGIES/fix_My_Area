package com.diviso.fix_my_area.repository;

import com.diviso.fix_my_area.entity.IssueReaction;
import com.diviso.fix_my_area.entity.ReactionType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IssueReactionRepository extends JpaRepository<IssueReaction, Long> {

    Optional<IssueReaction> findByIssueIdAndUserId(Long issueId, Long userId);

    @Query("SELECT r.issue.id as issueId, r.type as type, COUNT(r) as count " +
           "FROM IssueReaction r WHERE r.issue.id IN :issueIds GROUP BY r.issue.id, r.type")
    List<ReactionCountProjection> getReactionCountsForIssues(@Param("issueIds") List<Long> issueIds);

    interface ReactionCountProjection {
        Long getIssueId();
        ReactionType getType();
        Long getCount();
    }
}
