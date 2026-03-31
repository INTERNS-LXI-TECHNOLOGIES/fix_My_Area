package com.diviso.fixMyArea.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @com.fasterxml.jackson.annotation.JsonProperty("role")
    private UserRole role;

    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "geo_home_id")   
    private Location geoHome;

    @Column(name = "credibility_score")
    private Integer  credibilityScore;

    @Enumerated(EnumType.STRING)
    @Column(name = "verification_status")
    private VerificationStatus verificationStatus;

}