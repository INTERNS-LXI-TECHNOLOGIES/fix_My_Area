import React from "react";
import { IssueStatus } from "@/types";

interface StatusBadgeProps {
  status: IssueStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusColor = (status: IssueStatus) => {
    switch (status) {
      case "VALIDATED":
        return "bg-green-600 text-white";
      case "UNDER REVIEW":
        return "bg-amber-500 text-white";
      case "APPROVED":
        return "bg-blue-600 text-white";
      case "RESOLVED":
        return "bg-gray-600 text-white";
      case "REJECTED":
        return "bg-red-600 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  return (
    <span
      className={`${getStatusColor(
        status
      )} font-bold px-1.5 py-0.5 rounded uppercase text-[10px] tracking-wider`}
    >
      {status}
    </span>
  );
}
