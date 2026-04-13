package com.diviso.fix_my_area.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.time.Instant;
import java.time.LocalDate;
import com.diviso.fix_my_area.enumeration.*;

@Entity
@Table(name = "issue")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Issue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    @Lob
    private String description;
    private String photoUrls;
    private String videoUrl;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "location_id", referencedColumnName = "id")
    private Location location;
    @Enumerated(EnumType.STRING)
    private VisibilityLevel visibilityLevel;
    @Enumerated(EnumType.STRING)
    private IssueStatus issueStatus;
    @Enumerated(EnumType.STRING)
    private PriorityLevel priorityLevel;
    private Boolean isDeleted;
    private Instant createdAt;
    private Instant updatedAt;
    private Instant resolvedAt;
    private LocalDate expectedResolutionDate;
    private Integer voteCount;
    private Long panchayathId;
    private Long regionId;
    private Long districtId;
    private Long stateId;
    private Instant assignedAt;
    @ManyToOne
    private UserProfile userProfile;
    @ManyToOne
    private Ward ward;
    @ManyToOne
    private IssueCategory issueCategory;
    @ManyToOne
    private Authority assignedAuthority;
    @Version
    private Long version;
}
