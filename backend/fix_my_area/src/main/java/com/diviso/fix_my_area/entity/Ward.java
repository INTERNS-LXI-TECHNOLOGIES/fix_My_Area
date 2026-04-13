package com.diviso.fix_my_area.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.time.Instant;
import java.time.LocalDate;
import com.diviso.fix_my_area.enumeration.*;

@Entity
@Table(name = "ward")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Ward {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer wardNumber;
    private String name;
    private Boolean isActive;
    private Instant createdAt;
    @ManyToOne
    private Panchayath panchayath;
    @Version
    private Long version;
}
