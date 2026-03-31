package com.diviso.fixMyArea.entities;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "status_log")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StatusLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "status")
    private String status;

    @Column(name = "updater_name")
    private String updaterName;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated")
    private String updated;

    @Enumerated(EnumType.STRING)
    @Column(name = "level")
    private LevelType level;

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "issue_id")
        private Issue issue;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
}
