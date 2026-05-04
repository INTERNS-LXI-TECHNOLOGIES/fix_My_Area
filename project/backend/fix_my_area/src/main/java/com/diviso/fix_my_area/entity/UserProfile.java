package com.diviso.fix_my_area.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.Instant;
import com.diviso.fix_my_area.enumeration.CitizenStatus;

@Entity
@Table(name = "user_profile")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String phoneNumber;
    private String houseNumber;
    private String aadhaarNumber;
    private String email;
    private String profilePhotoUrl;

    private Boolean isVerified;

    @Enumerated(EnumType.STRING)
    private CitizenStatus citizenStatus;

    private Instant createdAt;
    private Instant updatedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ward_id")
    private Ward ward;

    @Version
    private Long version;
}