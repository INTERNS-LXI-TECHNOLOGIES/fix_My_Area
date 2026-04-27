import React from "react";
import { Building2, ArrowRight } from "lucide-react";
import { IssueFeed } from "@/types";
import StatusBadge from "./StatusBadge";
import ReactionBar from "./ReactionBar";

interface IssueCardProps {
  issue: IssueFeed;
}

export default function IssueCard({ issue }: IssueCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-3 flex space-x-3">
        <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden relative bg-gray-200">
          <img
            src={issue.image}
            alt={issue.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center text-xs text-gray-500 mb-1">
            <span className="font-medium bg-blue-50 text-[#0b57d0] px-2 py-0.5 rounded-md mr-2">
              {issue.tag}
            </span>
            <span>• {issue.distance}</span>
          </div>
          <h3 className="font-bold text-gray-900 text-sm leading-tight mb-2 line-clamp-2">
            {issue.title}
          </h3>
          <div className="flex items-center text-xs mb-1">
            <StatusBadge status={issue.status} />
            <span className="text-gray-500 ml-2">• {issue.time}</span>
          </div>
          <div className="flex items-center text-xs text-gray-600 mt-1.5">
            <Building2 size={12} className="mr-1 text-gray-400" />
            <span className="truncate">{issue.authority}</span>
          </div>
        </div>
      </div>

      <div className="px-3 pb-3">
        <ReactionBar issueId={issue.id} initialStats={issue.stats} />

        <button className="w-full py-2 flex items-center justify-center font-bold text-[#0b57d0] border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors text-sm">
          View Details <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
}
