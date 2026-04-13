package com.diviso.fix_my_area.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.time.Instant;
import java.time.LocalDate;
import com.diviso.fix_my_area.enumeration.*;

@Entity
@Table(name = "issuecategory")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class IssueCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private String iconUrl;
    private Boolean isActive;
    private Integer displayOrder;
    private Instant createdAt;
    @Version
    private Long version;
}
