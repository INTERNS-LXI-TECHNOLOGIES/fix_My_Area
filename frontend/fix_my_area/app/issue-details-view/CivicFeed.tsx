"use client";

import React from 'react';
// ✅ FIXED: Changed from 'next/router' to 'next/navigation'
import { useRouter } from 'next/navigation';

// Define the structure to be resilient to missing data
interface Issue {
  id: string;
  title: string;
  category: string;
  status: string;
  ward: string;
  deadline: number;
  affectedAreaMapImage?: string;
  images?: string[]; 
  supportCount: number;
  concernCount: number;
  suggestionCount: number;
  evidenceCount: number;
  responses?: Array<{ 
    authorName: string;
    authorRole: string;
    authorImage: string;
    type: 'STRONG SUPPORT' | 'EXPERT INPUT' | 'COMMENT';
    timeAgo: string;
    content: string;
    likes: number;
  }>;
}

export default function CivicParliamentFeed({ issues = [] }: { issues: Issue[] }) {
  // ✅ FIXED: Initialized the router hook inside the component
  const router = useRouter();

  return (
    <div className="bg-[#F9FBFC] min-h-screen font-sans pb-24">
      {/* Top Title/Header Area */}
      <div className="p-6 pb-2 text-center">
        <h1 className="text-xl font-extrabold text-black">
          2. ISSUE DETAIL (MINI PARLIAMENT)
        </h1>
        <p className="text-sm text-gray-700 font-medium">
          Structured deliberation & decision space
        </p>
      </div>

      <div className="max-w-2xl mx-auto p-4 space-y-6">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden"
          >
            {/* 1. Header */}
            <header className="p-5 flex justify-between items-start border-b border-gray-100">
              <div className="flex gap-4 items-center">
                <button className="text-lg text-black font-semibold" onClick={() => router.back()}>←</button>
                <h2 className="text-2xl font-extrabold text-[#111827] leading-tight">
                  {issue.title}
                </h2>
              </div>
              <button className="text-lg text-black font-semibold">⋮</button>
            </header>

            {/* 2. Metadata */}
            <div className="px-5 pt-4 pb-1 flex justify-between items-center text-sm">
              <div className="flex gap-3 items-center">
                <span className="bg-[#EBFDF3] text-[#1D7A41] px-4 py-1.5 rounded-full font-extrabold text-xs uppercase tracking-wide">
                  {issue.status}
                </span>
                <span className="text-gray-500 font-medium">ID #{issue.id}</span>
              </div>
              <span className="bg-[#FFF1F2] text-[#E03137] px-4 py-1.5 rounded-full font-semibold text-xs">
                Deadline: {issue.deadline} days left
              </span>
            </div>

            {/* 3. Category & Ward Tags */}
            <div className="px-5 py-4 flex flex-wrap gap-3 text-sm">
              <div className="border border-gray-200 bg-white px-5 py-2 rounded-full flex gap-2 items-center font-semibold text-gray-700">
                🏷️ {issue.category}
              </div>
              <div className="border border-gray-200 bg-white px-5 py-2 rounded-full flex gap-2 items-center font-semibold text-gray-700">
                📍 {issue.ward}
              </div>
              <button className="border border-gray-200 bg-white px-5 py-2 rounded-full flex gap-2 items-center font-semibold text-gray-700">
                🗺️ Open in Maps
              </button>
            </div>

            {/* 4. Map and Affected Area */}
            <div className="px-5 py-2">
              <div className="bg-gray-100 rounded-3xl overflow-hidden border border-gray-100 shadow-inner h-60 relative">
                <img 
                  src={issue.affectedAreaMapImage || "https://images.unsplash.com/photo-1598425121966-2b4f9f75a6c1?q=80&w=600&auto=format&fit=crop"} 
                  alt="Affected Area Map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-red-500/20 border-2 border-red-500 p-8 rounded-lg font-bold text-red-700">Affected Area</div>
                </div>
              </div>
            </div>

            {/* 5. Evidence Section with Null Safety */}
            <section className="p-5 space-y-3">
              <h3 className="text-xl font-bold text-gray-900">Evidence</h3>
              <div className="grid grid-cols-4 gap-3">
                {issue.images?.slice(0, 3).map((img, index) => (
                  <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-gray-200">
                    <img src={img} alt={`Evidence ${index + 1}`} className="w-full h-full object-cover" />
                    {index > 0 && <button className="absolute inset-0 flex items-center justify-center bg-black/20 text-white text-2xl">▶</button>}
                  </div>
                ))}
                {(issue.evidenceCount > 3) && (
                  <div className="aspect-[4/3] rounded-2xl bg-gray-900 flex items-center justify-center relative overflow-hidden">
                    <span className="text-2xl font-black text-white z-10">
                      +{issue.evidenceCount - 3}
                    </span>
                  </div>
                )}
              </div>
            </section>

            {/* 6. Interaction Summary */}
            <section className="px-5 py-4 border-t border-b border-gray-100 flex justify-between items-center text-sm font-bold">
              <button className="bg-[#1D7A41] text-white px-5 py-2.5 rounded-full">
                Support {issue.supportCount}
              </button>
              <button className="text-gray-600">Concerns {issue.concernCount}</button>
              <button className="text-gray-600">Suggestions {issue.suggestionCount}</button>
              <button className="text-gray-600">Eviden.. {issue.evidenceCount}</button>
            </section>

            {/* 7. Responses with Null Safety */}
            <section className="p-5 space-y-6">
              {issue.responses?.map((response, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <img
                    src={response.authorImage}
                    alt={response.authorName}
                    className="w-12 h-12 rounded-full border border-gray-100 object-cover"
                  />
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-x-2 items-baseline">
                        <h4 className="font-extrabold text-gray-900">{response.authorName}</h4>
                        <span className="text-xs text-gray-500">{response.authorRole} • {response.timeAgo}</span>
                      </div>
                    </div>
                    <div className="mb-2">
                        {response.type === 'STRONG SUPPORT' && (
                        <span className="bg-[#EBFDF3] text-[#1D7A41] px-3 py-0.5 rounded-full font-black text-[10px] uppercase tracking-wide inline-block">
                            STRONG SUPPORT
                        </span>
                        )}
                        {response.type === 'EXPERT INPUT' && (
                        <span className="bg-[#EBF5FF] text-[#1E3A8A] px-3 py-0.5 rounded-full font-black text-[10px] uppercase tracking-wide inline-block border border-[#BFDBFE]">
                            EXPERT INPUT
                        </span>
                        )}
                    </div>
                    <p className="text-gray-800 text-sm leading-snug">
                      {response.content}
                    </p>
                  </div>
                  <div className="text-center font-bold text-xs text-[#1D7A41] pt-2">
                    👍 {response.likes}
                  </div>
                </div>
              ))}
            </section>

            {/* 8. Interaction Bar */}
            <section className="p-5 pt-3 border-t border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Add Your Input</h3>
              <div className="flex gap-3">
                <button className="flex-1 bg-[#1D7A41] text-white py-3 rounded-xl font-bold text-base">
                  👍 Support
                </button>
                <button className="flex-1 bg-white text-[#EA580C] border border-[#EA580C] py-3 rounded-xl font-bold text-base">
                  ⚠️ Raise Concern
                </button>
                <button className="flex-1 bg-[#1E3A8A] text-white py-3 rounded-xl font-bold text-base">
                  🔗 Add Evidence
                </button>
                {/* ✅ FIXED: Button now uses the correctly initialized router */}
                <button 
                  onClick={() => router.push(`/make-a-command/editor?issueId=${issue.id}`)}
                  className="flex-1 bg-[#1E3A8A] text-white py-3 rounded-xl font-bold text-base"
                >
                  📜 Command
                </button>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}