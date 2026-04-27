package com.diviso.fix_my_area.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.time.Instant;
import java.time.LocalDate;
import com.diviso.fix_my_area.enumeration.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
 
    // This field name "issue" MUST match the mappedBy = "issue" in Issue.java
    
   
@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "issue_id") // Matches your DB column name
@JsonIgnoreProperties("issueComments") // Stops the loop, but lets the ID through
private Issue issue;


@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "user_profile_id") // Matches your DB column name
@JsonIgnoreProperties("issueComments") 
private UserProfile userProfile;

    @ManyToOne
    private Authority authority;
    @ManyToOne
    private IssueComment parentComment;
    @Version
    private Long version;

    
}
