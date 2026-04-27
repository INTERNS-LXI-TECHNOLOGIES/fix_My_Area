package com.diviso.fix_my_area.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class IssueStats {
    private long support;
    private long concern;
    private long urgent;
}
