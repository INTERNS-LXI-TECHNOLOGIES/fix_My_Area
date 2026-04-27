export type IssueStatus = "VALIDATED" | "UNDER REVIEW" | "APPROVED" | "RESOLVED" | "REJECTED";

export interface IssueStats {
  support: number;
  concern: number;
  urgent: number;
}

export interface IssueFeed {
  id: number;
  image: string;
  tag: string;
  distance: string;
  title: string;
  status: IssueStatus;
  time: string;
  authority: string;
  stats: IssueStats;
}

export interface PaginatedResponse<T> {
  content: T[];
  pageable: {
    pageNumber: number;
    pageSize: number;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
}
