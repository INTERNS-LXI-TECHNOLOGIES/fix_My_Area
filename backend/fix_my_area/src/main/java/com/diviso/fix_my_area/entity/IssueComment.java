package com.diviso.fix_my_area.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.time.Instant;
import java.time.LocalDate;
import com.diviso.fix_my_area.enumeration.*;

@Entity
@Table(name = "issuecomment")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class IssueComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    private String content;
    private Boolean isFromAuthority;
    private Boolean isDeleted;
    private Instant createdAt;
    @ManyToOne
    private Issue issue;
    @ManyToOne
    private UserProfile userProfile;
    @ManyToOne
    private Authority authority;
    @ManyToOne
    private IssueComment parentComment;
    @Version
    private Long version;
}
