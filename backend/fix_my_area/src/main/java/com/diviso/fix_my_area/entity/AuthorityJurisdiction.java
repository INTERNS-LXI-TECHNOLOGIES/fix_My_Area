package com.diviso.fix_my_area.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.time.Instant;
import java.time.LocalDate;
import com.diviso.fix_my_area.enumeration.*;

@Entity
@Table(name = "authorityjurisdiction")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthorityJurisdiction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private JurisdictionLevel jurisdictionLevel;
    private Long referenceId;
    private String referenceName;
    private Boolean isPrimary;
    private Instant createdAt;
    @ManyToOne
    private Authority authority;
    @Version
    private Long version;
}
