package com.diviso.fix_my_area.dto;

import lombok.Data;

@Data
public class IssueCommentRequest {

    private String content;
    private Boolean isFromAuthority;
    private Boolean isDeleted;

    private Long issueId;
    private Long userProfileId;

    
}