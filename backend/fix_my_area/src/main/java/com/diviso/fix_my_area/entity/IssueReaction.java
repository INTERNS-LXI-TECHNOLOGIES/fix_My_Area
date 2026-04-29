package com.diviso.fix_my_area.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "issue_reaction", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"issue_id", "user_id"})
})
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class IssueReaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "issue_id", nullable = false)
    private Issue issue;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ReactionType type;

    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;
}
