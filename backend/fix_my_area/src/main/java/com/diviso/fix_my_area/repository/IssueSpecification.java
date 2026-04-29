package com.diviso.fix_my_area.repository;

import com.diviso.fix_my_area.entity.Issue;
import com.diviso.fix_my_area.entity.IssueStatus;
import org.springframework.data.jpa.domain.Specification;

public class IssueSpecification {

    public static Specification<Issue> hasStatus(IssueStatus status) {
        return (root, query, criteriaBuilder) -> {
            if (status == null) return null;
            return criteriaBuilder.equal(root.get("status"), status);
        };
    }

    public static Specification<Issue> hasWardId(Long wardId) {
        return (root, query, criteriaBuilder) -> {
            if (wardId == null) return null;
            return criteriaBuilder.equal(root.get("ward").get("id"), wardId);
        };
    }
}
