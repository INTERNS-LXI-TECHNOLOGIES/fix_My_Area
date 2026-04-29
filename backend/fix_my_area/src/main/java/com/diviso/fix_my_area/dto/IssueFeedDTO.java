package com.diviso.fix_my_area.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class IssueFeedDTO {
    private Long id;
    private String title;
    private String tag;
    private String status;
    private String image;
    private String distance;
    private String time;
    private String authority;
    private IssueStats stats;
}
