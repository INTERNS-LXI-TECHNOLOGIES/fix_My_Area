"use client";

import React, { useEffect, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useInfiniteQuery } from "@tanstack/react-query";
import {
  MapPin,
  ChevronDown,
  Search,
  Bell,
  ListFilter,
  AlertCircle,
  LayoutList,
  Map as MapIcon,
  Plus,
  User,
} from "lucide-react";
import api from "@/lib/api";
import IssueCard from "@/components/IssueCard";
import { PaginatedResponse, IssueFeed } from "@/types";

function CivicFeedContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("filter") || "";

  useEffect(() => {
    // Geolocation once on mount
    if (
      !sessionStorage.getItem("geo_lat") ||
      !sessionStorage.getItem("geo_lng")
    ) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          sessionStorage.setItem(
            "geo_lat",
            position.coords.latitude.toString()
          );
          sessionStorage.setItem(
            "geo_lng",
            position.coords.longitude.toString()
          );
        });
      }
    }
  }, []);

  const handleFilterClick = (filter: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (activeFilter === filter) {
      params.delete("filter");
    } else {
      params.set("filter", filter);
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const getFiltersForApi = () => {
    const params: Record<string, string | number> = {};
    if (activeFilter) {
      params.filter = activeFilter;
    }
    if (activeFilter === "nearby") {
      const lat = sessionStorage.getItem("geo_lat");
      const lng = sessionStorage.getItem("geo_lng");
      if (lat && lng) {
        params.lat = parseFloat(lat);
        params.lng = parseFloat(lng);
      }
    }
    return params;
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["feed", getFiltersForApi()],
    queryFn: async ({ pageParam = 0, queryKey }) => {
      const [, filters] = queryKey as [
        string,
        Record<string, string | number>
      ];
      const response = await api.get<PaginatedResponse<IssueFeed>>("/feed", {
        params: { page: pageParam, size: 10, ...filters },
      });
      return response.data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage.last) {
        return lastPage.pageable.pageNumber + 1;
      }
      return undefined;
    },
  });

  const issues = data?.pages.flatMap((page) => page.content) || [];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-20 font-sans max-w-md mx-auto border-x border-gray-200">
      {/* Header section */}
      <div className="bg-white">
        {/* Top App Bar */}
        <div className="bg-[#0b57d0] text-white px-4 py-3 flex items-center justify-between rounded-b-xl shadow-md z-10 relative">
          <div className="flex items-center space-x-2">
            <MapPin size={20} className="text-white" />
            <div className="flex items-center font-medium">
              <span>Palakkad, Ward 12</span>
              <ChevronDown size={18} className="ml-1 opacity-80" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Search size={22} className="text-white" />
            <div className="relative">
              <Bell size={22} className="text-white" />
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-[#0b57d0]">
                3
              </span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center px-4 py-3 space-x-2 overflow-x-auto no-scrollbar bg-white shadow-sm mb-2">
          <button
            onClick={() => handleFilterClick("urgent")}
            className={`flex items-center space-x-1 px-4 py-1.5 border rounded-full shadow-sm whitespace-nowrap transition-colors ${
              activeFilter === "urgent"
                ? "bg-[#d93025] text-white border-[#d93025]"
                : "bg-white border-gray-200 text-gray-800 hover:bg-gray-50"
            }`}
          >
            <AlertCircle
              size={16}
              className={
                activeFilter === "urgent" ? "text-white" : "text-[#d93025]"
              }
            />
            <span className="text-sm font-semibold">Urgent</span>
          </button>
          <button
            onClick={() => handleFilterClick("nearby")}
            className={`flex items-center space-x-1 px-4 py-1.5 border rounded-full shadow-sm whitespace-nowrap transition-colors ${
              activeFilter === "nearby"
                ? "bg-[#007b83] text-white border-[#007b83]"
                : "bg-white border-gray-200 text-gray-800 hover:bg-gray-50"
            }`}
          >
            <MapPin
              size={16}
              className={
                activeFilter === "nearby" ? "text-white" : "text-[#007b83]"
              }
            />
            <span className="text-sm font-semibold">Nearby</span>
          </button>
          <button
            onClick={() => handleFilterClick("in_progress")}
            className={`flex items-center px-4 py-1.5 border rounded-full shadow-sm whitespace-nowrap transition-colors ${
              activeFilter === "in_progress"
                ? "bg-[#0b57d0] text-white border-[#0b57d0]"
                : "bg-white border-gray-200 text-gray-800 hover:bg-gray-50"
            }`}
          >
            <span className="text-sm font-semibold">In Progress</span>
          </button>
          <div className="flex-grow"></div>
          <button className="flex items-center justify-center p-1.5 bg-white border border-gray-200 rounded-full shadow-sm min-w-[32px] hover:bg-gray-50 transition-colors">
            <ListFilter size={18} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Issue List */}
      <div className="flex-1 px-4 space-y-4 pt-2 pb-6">
        {status === "pending" ? (
          <div className="flex justify-center p-8 text-gray-500">
            Loading...
          </div>
        ) : status === "error" ? (
          <div className="flex justify-center p-8 text-red-500">
            Error loading feed.
          </div>
        ) : (
          <>
            {issues.map((issue) => (
              <IssueCard key={issue.id} issue={issue} />
            ))}
            
            {hasNextPage && (
              <button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
                className="w-full py-3 mt-4 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                {isFetchingNextPage ? "Loading more..." : "Load More"}
              </button>
            )}
            
            {!hasNextPage && issues.length > 0 && (
              <div className="text-center text-gray-500 text-xs py-4">
                You&apos;ve reached the end of the feed
              </div>
            )}
          </>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-200 flex items-center justify-around px-1 pt-2 pb-2 shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.1)] z-20">
        <button className="flex flex-col items-center p-1 w-16 text-[#0b57d0]">
          <LayoutList size={22} className="mb-1" />
          <span className="text-[10px] font-bold">Feed</span>
        </button>
        <button className="flex flex-col items-center p-1 w-16 text-gray-500 hover:text-gray-900 transition-colors">
          <MapIcon size={22} className="mb-1" />
          <span className="text-[10px] font-semibold">Map</span>
        </button>

        <div className="relative w-16 flex flex-col items-center">
          <button className="absolute -top-7 bg-[#0b57d0] text-white p-3 rounded-full shadow-lg border-4 border-white hover:bg-blue-700 transition-colors flex items-center justify-center hover:scale-105 transform duration-200">
            <Plus size={26} strokeWidth={3} />
          </button>
          <span className="mt-8 text-[10px] font-semibold text-gray-800 whitespace-nowrap">
            Raise Issue
          </span>
        </div>

        <button className="flex flex-col items-center p-1 w-16 text-gray-500 hover:text-gray-900 transition-colors">
          <Bell size={22} className="mb-1" />
          <span className="text-[10px] font-semibold">Alerts</span>
        </button>
        <button className="flex flex-col items-center p-1 w-16 text-gray-500 hover:text-gray-900 transition-colors">
          <User size={22} className="mb-1" />
          <span className="text-[10px] font-semibold">Profile</span>
        </button>
      </div>
    </div>
  );
}

export default function CivicFeedHome() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading...</div>}>
      <CivicFeedContent />
    </Suspense>
  );
}
