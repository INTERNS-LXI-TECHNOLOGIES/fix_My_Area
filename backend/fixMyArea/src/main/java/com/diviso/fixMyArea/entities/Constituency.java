package com.diviso.fixMyArea.entities;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "constituency")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Constituency {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "party")
    private String party;

    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private RoleType role;

    @OneToMany(mappedBy = "constituency", cascade = CascadeType.ALL)
    private List<Representative> representatives;

    @OneToMany(mappedBy = "constituency", cascade = CascadeType.ALL)
    private List<Ward> wards;

    @OneToMany(mappedBy = "constituency", cascade = CascadeType.ALL)
    private List<Location> locations;
}
