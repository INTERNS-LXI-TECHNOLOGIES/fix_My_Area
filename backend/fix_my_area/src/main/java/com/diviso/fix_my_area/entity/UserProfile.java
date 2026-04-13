package com.diviso.fix_my_area.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.time.Instant;
import java.time.LocalDate;
import com.diviso.fix_my_area.enumeration.*;

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
    @ManyToOne
    private Ward ward;
    
    @Version
    private Long version;
}
