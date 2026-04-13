package com.diviso.fix_my_area.repository;

import com.diviso.fix_my_area.entity.AuthorityJurisdiction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorityJurisdictionRepository extends JpaRepository<AuthorityJurisdiction, Long> {
}
