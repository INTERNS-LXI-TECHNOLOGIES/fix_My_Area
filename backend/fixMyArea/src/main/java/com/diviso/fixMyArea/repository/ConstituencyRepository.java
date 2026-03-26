package com.diviso.fixMyArea.repository;

import com.diviso.fixMyArea.entities.Constituency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConstituencyRepository extends JpaRepository<Constituency, Long> {
}
