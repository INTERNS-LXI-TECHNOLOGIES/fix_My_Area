"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Search,
  Bell,
  ThumbsUp,
  AlertTriangle,
  Zap,
  Home,
  Navigation,
  Plus,
  User,
  Sun,
  Moon,
} from "lucide-react";

interface Issue {
  id: number;
  category: string;
  distance: string;
  title: string;
  status: "VALIDATED" | "UNDER REVIEW" | "APPROVED";
  time: string;
  authority: string;
  image: string;
  support: number;
  concern: number;
  urgent: boolean;
  priority: "urgent" | "medium" | "low";
}

const stats = [
  { label: "Total", value: 24, color: "bg-blue-500" },
  { label: "Active", value: 11, color: "bg-amber-500" },
  { label: "Resolved", value: 13, color: "bg-emerald-500" },
];

const filters = ["Urgent", "Nearby", "In Progress"];

export default function HomePage() {
  const router = useRouter();
  const [issues, setIssues] = useState<Issue[]>([]);
  const [activeFilter, setActiveFilter] = useState("Urgent");
  const [loading, setLoading] = useState(false);
  const [reactions, setReactions] = useState<
    Record<string, { support: number; concern: number; urgentCount: number; voted: Record<string, boolean> }>
  >({});
  const [isDark, setIsDark] = useState(false);

  // Initialize Dark Mode
  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      root.classList.add("dark");
      setIsDark(true);
    } else if (savedTheme === "light") {
      root.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newIsDark = !isDark;

    if (newIsDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setIsDark(newIsDark);
  };

  // Fetch Issues
  useEffect(() => {
    const fetchFilteredIssues = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:8080/api/issues?filter=${encodeURIComponent(activeFilter)}`);
        if (!res.ok) throw new Error("Failed to fetch issues");
        
        const data: Issue[] = await res.json();
        setIssues(data);
        
        const initialReactions: Record<string, { support: number; concern: number; urgentCount: number; voted: Record<string, boolean> }> = {};
        data.forEach(issue => {
          initialReactions[issue.id.toString()] = { 
            support: issue.support, 
            concern: issue.concern, 
            urgentCount: 5, 
            voted: { support: false, concern: false, urgent: false }
          };
        });
        setReactions(initialReactions);
      } catch (err) {
        console.error("Error fetching issues:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredIssues();
  }, [activeFilter]);

  const toggleReaction = (issueId: number, type: "support" | "concern" | "urgentCount") => {
    setReactions((prev) => {
      const current = prev[issueId] || { support: 0, concern: 0, urgentCount: 0, voted: { support: false, concern: false, urgent: false } };
      const voteKey = type === "urgentCount" ? "urgent" : type;
      const hasVoted = current.voted[voteKey];

      return {
        ...prev,
        [issueId]: {
          ...current,
          [type]: hasVoted ? current[type] - 1 : current[type] + 1,
          voted: { ...current.voted, [voteKey]: !hasVoted },
        },
      };
    });
  };

  const statusStyle = (status: string) => {
    if (status === "VALIDATED") return "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800";
    if (status === "UNDER REVIEW") return "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800";
    return "bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800";
  };

  const priorityStripe = (priority: string) => {
    if (priority === "urgent") return "bg-red-500";
    if (priority === "medium") return "bg-amber-500";
    return "bg-gray-300 dark:bg-gray-700";
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex justify-center transition-colors">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 min-h-screen flex flex-col shadow-xl">

        {/* HEADER */}
        <div className="sticky top-0 z-50 bg-gradient-to-br from-[#1a3254] to-[#0f223d] text-white">
          <div className="px-5 pt-6 pb-5">
            <div className="flex justify-between items-start mb-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-lg">Palakkad, Kerala</span>
                </div>
                <p className="text-white/70 text-sm mt-1">Ward 12 • Civic Hub</p>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={toggleTheme}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center transition-all"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <button className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center transition-all">
                  <Search size={20} />
                </button>
                <button className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center relative transition-all">
                  <Bell size={20} />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-[#1a3254]">
                    3
                  </span>
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/10 backdrop-blur-md rounded-3xl p-4 text-center">
                  <div className={`w-3 h-3 rounded-full ${s.color} mx-auto mb-2`} />
                  <p className="text-2xl font-bold">{s.value}</p>
                  <p className="text-xs text-white/70 tracking-wider uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== IMPROVED FILTERS ==================== */}
        <div className="sticky top-[140px] z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-5 py-4">
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`flex-1 py-3 px-6 rounded-2xl text-sm font-medium transition-all active:scale-95 ${
                  activeFilter === f
                    ? "bg-[#1a3254] text-white shadow-lg shadow-[#1a3254]/30"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* ISSUE LIST */}
        <div className="flex-1 px-4 pt-4 pb-24 space-y-4 overflow-y-auto bg-gray-50 dark:bg-gray-950">
          {loading ? (
            [...Array(3)].map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm animate-pulse">
                <div className="h-1.5 bg-gray-200 dark:bg-gray-700 w-3/4" />
                <div className="p-4">
                  <div className="flex gap-3">
                    <div className="w-[78px] h-[78px] bg-gray-200 dark:bg-gray-700 rounded-2xl" />
                    <div className="flex-1 space-y-3">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5" />
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : issues.length === 0 ? (
            <div className="text-center py-20 text-gray-500 dark:text-gray-400">
              No issues found for this filter
            </div>
          ) : (
            issues.map((issue) => {
              const r = reactions[issue.id.toString()] || 
                { support: issue.support, concern: issue.concern, urgentCount: 0, voted: { support: false, concern: false, urgent: false } };

              return (
                <div key={issue.id} className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-300">
                  <div className={`h-1.5 w-full ${priorityStripe(issue.priority)}`} />

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">{issue.category}</span>
                      <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">{issue.distance}</span>
                    </div>

                    <div className="flex gap-4">
                      <img
                        src={issue.image}
                        alt={issue.title}
                        className="w-[78px] h-[78px] object-cover rounded-2xl flex-shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-[15px] leading-tight text-gray-900 dark:text-white line-clamp-2 mb-2">
                          {issue.title}
                        </h3>

                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-xs px-3 py-1 rounded-full border ${statusStyle(issue.status)}`}>
                            {issue.status}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">• {issue.time}</span>
                        </div>

                        <div className="flex items-center gap-1 mt-3 text-gray-600 dark:text-gray-400">
                          <MapPin size={14} />
                          <span className="text-sm">{issue.authority}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center border-t border-gray-100 dark:border-gray-800 mt-5 pt-3">
                      <button onClick={() => toggleReaction(issue.id, "support")}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl transition-all ${r.voted.support ? "bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400" : "hover:bg-gray-50 dark:hover:bg-gray-800"}`}>
                        <ThumbsUp size={18} className={r.voted.support ? "fill-emerald-600" : ""} />
                        <span className="font-semibold text-sm">{r.support}</span>
                      </button>

                      <div className="w-px h-8 bg-gray-200 dark:bg-gray-700" />

                      <button onClick={() => toggleReaction(issue.id, "concern")}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl transition-all ${r.voted.concern ? "bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400" : "hover:bg-gray-50 dark:hover:bg-gray-800"}`}>
                        <AlertTriangle size={18} />
                        <span className="font-semibold text-sm">{r.concern}</span>
                      </button>

                      <div className="w-px h-8 bg-gray-200 dark:bg-gray-700" />

                      <button onClick={() => toggleReaction(issue.id, "urgentCount")}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl transition-all ${r.voted.urgent ? "bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400" : "hover:bg-gray-50 dark:hover:bg-gray-800"}`}>
                        <Zap size={18} className={r.voted.urgent ? "fill-red-600" : ""} />
                        <span className="font-semibold text-sm">{r.urgentCount}</span>
                      </button>
                    </div>

                    <Link 
                      href={`/issue-details-view/${issue.id}`}
                      className="block text-center w-full mt-4 py-3.5 bg-[#1a3254] hover:bg-[#13263f] dark:hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all active:scale-[0.985]"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* BOTTOM NAVIGATION */}
        <div className="fixed bottom-0 w-full max-w-md bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-2xl z-50">
          <div className="flex items-center justify-around px-4 py-1 relative">
            <button onClick={() => router.push("/home/issues")} className="flex flex-col items-center py-2 text-gray-600 dark:text-gray-400 active:text-[#1a3254] dark:active:text-white transition-colors">
              <Home size={26} />
              <span className="text-[10px] mt-1 font-medium">Feed</span>
            </button>

            <button onClick={() => router.push("/map")} className="flex flex-col items-center py-2 text-gray-600 dark:text-gray-400 active:text-[#1a3254] dark:active:text-white transition-colors">
              <Navigation size={26} />
              <span className="text-[10px] mt-1 font-medium">Map</span>
            </button>

            <button 
              onClick={() => router.push("/raise-issue")}
              className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#1a3254] hover:bg-blue-700 rounded-full flex items-center justify-center shadow-xl active:scale-95 transition-all border-4 border-white dark:border-gray-900"
            >
              <Plus size={34} color="white" />
            </button>

            <button onClick={() => router.push("/alerts")} className="flex flex-col items-center py-2 text-gray-600 dark:text-gray-400 active:text-[#1a3254] dark:active:text-white transition-colors">
              <Bell size={26} />
              <span className="text-[10px] mt-1 font-medium">Alerts</span>
            </button>

            <button onClick={() => router.push("/profile")} className="flex flex-col items-center py-2 text-gray-600 dark:text-gray-400 active:text-[#1a3254] dark:active:text-white transition-colors">
              <User size={26} />
              <span className="text-[10px] mt-1 font-medium">Profile</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}