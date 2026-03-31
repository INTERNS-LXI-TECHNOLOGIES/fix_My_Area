package com.diviso.fixMyArea.repository;

import com.diviso.fixMyArea.entities.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {

    Location findByAddress(String address);
    
}
