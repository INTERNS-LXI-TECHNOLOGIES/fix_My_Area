package com.diviso.fixMyArea.repository;

import com.diviso.fixMyArea.entities.StatusLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StatusLogRepository extends JpaRepository<StatusLog, Long> {
}
