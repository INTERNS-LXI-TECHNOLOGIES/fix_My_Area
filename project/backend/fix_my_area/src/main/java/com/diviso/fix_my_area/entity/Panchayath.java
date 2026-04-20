package com.diviso.fix_my_area.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.time.Instant;
import java.time.LocalDate;
import com.diviso.fix_my_area.enumeration.*;

@Entity
@Table(name = "panchayath")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Panchayath {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String code;
    @Enumerated(EnumType.STRING)
    private PanchayathType panchayathType;
    private Boolean isActive;
    private Instant createdAt;
    @ManyToOne
    private Region region;
    @Version
    private Long version;
}
