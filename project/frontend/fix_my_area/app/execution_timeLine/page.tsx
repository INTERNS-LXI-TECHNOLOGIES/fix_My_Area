"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

type TimelineItem = {
  title: string;
  date: string;
  status: "done" | "current" | "pending";
  description?: string;
};

export default function ExecutionTimeline() {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const issueId = params?.id || 1; // dynamic id

  useEffect(() => {
    if (!issueId) return;

    setLoading(true);

    axios
      .get(`http://localhost:8080/api/issues/${issueId}/timeline`)
      .then((res) => {
        let data = res.data;

        // 🔥 sort by time (important)
        data = data.sort(
          (a: any, b: any) =>
            new Date(a.changedAt).getTime() -
            new Date(b.changedAt).getTime()
        );

        if (!data || data.length === 0) {
          setTimelineData([
            {
              title: "RAISED",
              date: "No timeline yet",
              status: "current",
              description: "Issue created but no updates",
            },
          ]);
          return;
        }

        const formatted: TimelineItem[] = data.map(
          (item: any, index: number) => ({
            title: item.newStatus,
            date: new Date(item.changedAt).toLocaleString(),
            status:
              index === data.length - 1
                ? "current"
                : "done",
            description: item.remarks,
          })
        );

        setTimelineData(formatted);
      })
      .catch((err) => {
        console.error("Error loading timeline:", err);

        setTimelineData([
          {
            title: "ERROR",
            date: "",
            status: "current",
            description: "Failed to load timeline",
          },
        ]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [issueId]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-gray-500">
        Loading timeline...
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-5">
      <h2 className="text-lg font-semibold mb-4">
        Issue Timeline
      </h2>

      <div className="relative border-l-2 border-gray-200 ml-3">
        {timelineData.map((item, index) => (
          <div key={index} className="mb-6 ml-4">

            {/* Dot */}
            <div
              className={`absolute w-4 h-4 rounded-full -left-2.5 border-2 ${
                item.status === "done"
                  ? "bg-green-500 border-green-500"
                  : item.status === "current"
                  ? "bg-blue-500 border-blue-500 animate-pulse"
                  : "bg-gray-300 border-gray-300"
              }`}
            />

            {/* Content */}
            <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
              <h3 className="text-sm font-semibold">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500">
                {item.date}
              </p>
              {item.description && (
                <p className="text-sm mt-1">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}