package com.diviso.fixMyArea.repository;

import com.diviso.fixMyArea.entities.Panchayath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PanchayathRepository extends JpaRepository<Panchayath, Long> {
}
