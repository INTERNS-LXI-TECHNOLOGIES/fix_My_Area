    package com.diviso.fix_my_area.repository;

    import com.diviso.fix_my_area.entity.Issue;
    import org.springframework.data.jpa.repository.JpaRepository;
    import org.springframework.stereotype.Repository;

    @Repository
    public interface IssueRepository extends JpaRepository<Issue, Long> {
    }
