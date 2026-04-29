"use client";

import React, { useState } from "react";
import { ThumbsUp, AlertTriangle, AlertCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import api from "@/lib/api";
import { IssueStats } from "@/types";

interface ReactionBarProps {
  issueId: number;
  initialStats: IssueStats;
}

type ReactionType = "support" | "concern" | "urgent";

export default function ReactionBar({
  issueId,
  initialStats,
}: ReactionBarProps) {
  const [stats, setStats] = useState<IssueStats>(initialStats);

  const mutation = useMutation({
    mutationFn: async (type: ReactionType) => {
      // Assuming a generic react endpoint, adjust as needed
      await api.post(`/issues/${issueId}/react`, { type });
    },
    onMutate: async (type: ReactionType) => {
      // Optimistic update
      const previousStats = { ...stats };
      setStats((prev) => ({
        ...prev,
        [type]: prev[type] + 1,
      }));
      return { previousStats };
    },
    onError: (err, newType, context) => {
      // Rollback on error
      if (context?.previousStats) {
        setStats(context.previousStats);
      }
    },
  });

  const handleReact = (type: ReactionType) => {
    mutation.mutate(type);
  };

  return (
    <div className="flex items-center justify-between mb-3 px-1 border-t border-gray-100 pt-3">
      <button
        onClick={() => handleReact("support")}
        className="flex items-center text-xs font-semibold text-green-600 hover:bg-green-50 px-2 py-1 rounded transition-colors"
      >
        <ThumbsUp size={14} className="mr-1 fill-green-600" />
        <span>{stats.support} Support</span>
      </button>
      <button
        onClick={() => handleReact("concern")}
        className="flex items-center text-xs font-semibold text-orange-500 hover:bg-orange-50 px-2 py-1 rounded transition-colors"
      >
        <AlertTriangle size={14} className="mr-1 fill-orange-500" />
        <span>{stats.concern} Concern</span>
      </button>
      <button
        onClick={() => handleReact("urgent")}
        className="flex items-center text-xs font-semibold text-red-600 hover:bg-red-50 px-2 py-1 rounded transition-colors"
      >
        <AlertCircle size={14} className="mr-1 fill-red-600" />
        <span>{stats.urgent} Urgent</span>
      </button>
    </div>
  );
}
