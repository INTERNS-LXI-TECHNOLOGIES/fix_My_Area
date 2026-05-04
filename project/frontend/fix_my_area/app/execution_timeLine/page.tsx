"use client";

import React from "react";

type TimelineItem = {
  title: string;
  date: string;
  status: "done" | "current" | "pending";
  description?: string;
};

const timelineData: TimelineItem[] = [
  {
    title: "RAISED",
    date: "May 20, 10:30 AM",
    status: "done",
    description: "Issue reported by user",
  },
  {
    title: "VALIDATED",
    date: "May 20, 2:15 PM",
    status: "done",
    description: "Validated by 142 citizens",
  },
  {
    title: "APPROVED",
    date: "May 21, 11:00 AM",
    status: "done",
    description: "Approved by Panchayat Officer",
  },
  {
    title: "IN EXECUTION",
    date: "May 22, 9:00 AM",
    status: "current",
    description: "Work started by contractor",
  },
  {
    title: "COMPLETED",
    date: "Pending",
    status: "pending",
  },
];

export default function ExecutionTimeline() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-5">
      <h2 className="text-lg font-semibold mb-4">Issue Timeline</h2>

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
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.date}</p>
              {item.description && (
                <p className="text-sm mt-1">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}