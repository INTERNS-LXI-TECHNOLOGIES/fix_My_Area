package com.diviso.fix_my_area.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.Instant;
import com.diviso.fix_my_area.enumeration.*;

@Entity
@Table(name = "issuestatushistory")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class IssueStatusHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private IssueStatus previousStatus;

    @Enumerated(EnumType.STRING)
    private IssueStatus newStatus;

    private String remarks;

    private Instant changedAt;

    @ManyToOne
    @JoinColumn(name = "issue_id")
    private Issue issue;

    @ManyToOne
    @JoinColumn(name = "authority_id")
    private Authority authority;

    @Version
    private Long version;
}
