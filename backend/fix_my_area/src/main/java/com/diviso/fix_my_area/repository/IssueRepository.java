package com.diviso.fix_my_area.repository;

import com.diviso.fix_my_area.entity.Issue;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IssueRepository extends JpaRepository<Issue, Long>, JpaSpecificationExecutor<Issue> {

    @Query(value = "SELECT i.* FROM issue i WHERE ST_Distance_Sphere(point(i.lng, i.lat), point(:lng, :lat)) <= :radius", nativeQuery = true)
    List<Issue> findNearbyIssues(@Param("lat") Double lat, @Param("lng") Double lng, @Param("radius") Double radius);

}
