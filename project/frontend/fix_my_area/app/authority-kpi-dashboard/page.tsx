"use client";

import React from "react";
import {
  Trophy,
  CheckCircle,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

type KPI = {
  label: string;
  value: number;
  color: string;
};

const kpis: KPI[] = [
  { label: "Delivery Efficiency", value: 85, color: "bg-green-500" },
  { label: "Responsiveness", value: 78, color: "bg-blue-500" },
  { label: "Quality Score", value: 91, color: "bg-purple-500" },
  { label: "Transparency", value: 88, color: "bg-orange-500" },
  { label: "Fairness Index", value: 76, color: "bg-cyan-500" },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-[360px] bg-white rounded-2xl shadow-lg p-4 space-y-4">
        
        {/* Header */}
        <div>
          <h1 className="text-lg font-semibold">
            Panchayat Authority <span className="text-blue-500">✔</span>
          </h1>

          <div className="flex gap-4 text-sm mt-2 border-b pb-2">
            <span className="text-blue-600 border-b-2 border-blue-600 pb-1">
              Overview
            </span>
            <span className="text-gray-500">Performance</span>
            <span className="text-gray-500">Issues</span>
            <span className="text-gray-500">Leaderboard</span>
          </div>
        </div>

        {/* Score Card */}
        <div className="bg-blue-700 text-white rounded-xl p-4 flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Trophy size={20} /> 82
            </div>
            <p className="text-sm">Governance Score</p>
            <p className="text-xs text-green-300 mt-1">+12 pts this month</p>
          </div>

          <div className="text-right">
            <p className="text-sm font-semibold">Rank #3</p>
            <p className="text-xs">of 142 authorities</p>
          </div>
        </div>

        {/* KPI Breakdown */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-sm">KPI Breakdown</h2>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
              Last 90 days
            </span>
          </div>

          <div className="space-y-3">
            {kpis.map((kpi) => (
              <div key={kpi.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span>{kpi.label}</span>
                  <span>{kpi.value}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div
                    className={`${kpi.color} h-2 rounded`}
                    style={{ width: `${kpi.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Issues Statistics */}
        <div>
          <h2 className="font-semibold text-sm mb-2">Issues Statistics</h2>

          <div className="grid grid-cols-3 gap-2">
            {/* Completed */}
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <CheckCircle className="mx-auto text-green-600" size={18} />
              <p className="font-bold">120</p>
              <p className="text-xs">Completed</p>
              <p className="text-xs text-green-600">+15 this month</p>
            </div>

            {/* Ongoing */}
            <div className="bg-gray-100 p-3 rounded-lg text-center">
              <RefreshCw className="mx-auto text-gray-600" size={18} />
              <p className="font-bold">15</p>
              <p className="text-xs">Ongoing</p>
              <p className="text-xs text-red-500">+3 overdue</p>
            </div>

            {/* Delayed */}
            <div className="bg-red-50 p-3 rounded-lg text-center">
              <AlertCircle className="mx-auto text-red-600" size={18} />
              <p className="font-bold">8</p>
              <p className="text-xs">Delayed</p>
              <p className="text-xs">Needs attention</p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-green-50 p-3 rounded-lg">
          <div className="flex items-center gap-2">
            <Trophy size={16} />
            <p className="text-sm font-medium">"Fast Responder" Badge</p>
          </div>
          <p className="text-xs text-gray-600 mt-1">
            Awarded for 95%+ on-time response
          </p>
        </div>

        {/* Button */}
        <button className="w-full border rounded-lg py-2 text-sm hover:bg-gray-50">
          View Detailed Analytics →
        </button>
      </div>
    </div>
  );
}