package com.diviso.fix_my_area.dto;

import lombok.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PagedResponse<T> {
    private List<T> content;
    private PageableInfo pageable;
    private boolean last;
    private int totalPages;
    private long totalElements;

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PageableInfo {
        private int pageNumber;
        private int pageSize;
    }
}
