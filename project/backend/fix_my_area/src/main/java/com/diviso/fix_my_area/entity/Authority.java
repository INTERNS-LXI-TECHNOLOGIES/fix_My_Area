package com.diviso.fix_my_area.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.time.Instant;
import java.time.LocalDate;
import com.diviso.fix_my_area.enumeration.*;

@Entity
@Table(name = "authority")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Authority {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String phoneNumber;
    private String email;
    private String profilePhotoUrl;
    @Enumerated(EnumType.STRING)
    private AuthorityRole authorityRole;
    @Enumerated(EnumType.STRING)
    private AuthorityType authorityType;
    private String party;
    @Enumerated(EnumType.STRING)
    private JurisdictionLevel jurisdictionLevel;
    private Boolean isActive;
    private LocalDate termStart;
    private LocalDate termEnd;
    private Instant createdAt;
    private Instant updatedAt;
    @Version
    private Long version;
}
