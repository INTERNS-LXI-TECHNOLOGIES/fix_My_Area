"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, User, Settings, LogOut, MapPin, Award, FileText } from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white min-h-screen">

        {/* Header */}
        <div className="bg-[#1a3254] text-white px-4 pt-6 pb-10 relative">
          <button 
            onClick={() => router.back()}
            className="absolute top-6 left-4 text-white/80 hover:text-white"
          >
            <ArrowLeft size={24} />
          </button>

          <div className="flex flex-col items-center pt-6">
            <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center text-6xl border-4 border-white shadow-xl">
              👤
            </div>
            <h1 className="text-2xl font-bold mt-4">Walker</h1>
            <p className="flex items-center gap-1.5 text-white/70 mt-1">
              <MapPin size={16} /> Ward 12, Palakkad, Kerala
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 -mt-6 space-y-6">

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
              <p className="text-3xl font-bold text-[#1a3254]">27</p>
              <p className="text-xs text-gray-500 mt-1">Reports</p>
            </div>
            <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
              <p className="text-3xl font-bold text-green-600">19</p>
              <p className="text-xs text-gray-500 mt-1">Solved</p>
            </div>
            <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
              <p className="text-3xl font-bold text-amber-600">185</p>
              <p className="text-xs text-gray-500 mt-1">Points</p>
            </div>
          </div>

          {/* Menu Options */}
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-5 flex gap-4 items-center border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <User size={28} className="text-blue-600" />
              </div>
              <div>
                <p className="font-semibold">Personal Information</p>
                <p className="text-sm text-gray-500">Update your details</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 flex gap-4 items-center border border-gray-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <FileText size={28} className="text-emerald-600" />
              </div>
              <div>
                <p className="font-semibold">My Reports</p>
                <p className="text-sm text-gray-500">View all your submitted issues</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 flex gap-4 items-center border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Award size={28} className="text-amber-600" />
              </div>
              <div>
                <p className="font-semibold">Achievements</p>
                <p className="text-sm text-gray-500">Your civic contributions</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 flex gap-4 items-center border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Settings size={28} className="text-purple-600" />
              </div>
              <div>
                <p className="font-semibold">Settings</p>
                <p className="text-sm text-gray-500">Notifications &amp; Preferences</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 flex gap-4 items-center text-red-600 border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <LogOut size={28} />
              </div>
              <div>
                <p className="font-semibold">Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}