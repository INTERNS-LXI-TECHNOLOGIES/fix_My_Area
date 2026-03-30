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


    @Column(nullable = false)
    private String role;

   
    @Column(name = "geo_home")
    private String geoHome;

 
    @Column(name = "credibility_score")
    private Double credibilityScore;


    @Column(name = "verification_status")
    private String verificationStatus;
}