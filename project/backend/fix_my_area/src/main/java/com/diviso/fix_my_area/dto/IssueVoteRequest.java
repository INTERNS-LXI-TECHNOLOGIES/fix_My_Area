
package com.diviso.fix_my_area.dto;
import lombok.Data;
@Data
public class IssueVoteRequest {
    private Long issueId;
    private Long userProfileId;
}