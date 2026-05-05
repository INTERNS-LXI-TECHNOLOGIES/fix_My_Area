"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, User, Settings, LogOut, MapPin, Award, FileText, Edit2, Check, X } from "lucide-react";
import { UserProfileControllerApi, Configuration, UserProfile } from "../../src/api/generated";

const api = new UserProfileControllerApi(new Configuration({ basePath: "http://localhost:8080" }));

export default function ProfilePage() {
  const router = useRouter();
  const [profileId, setProfileId] = useState<number>(1);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    houseNumber: "",
  });

  useEffect(() => {
    fetchProfile();
  }, [profileId]);

  const fetchProfile = async () => {
    try {
      setIsLoading(true);
      const data = await api.getById1({ id: profileId });
      setProfile(data);
      setFormData({
        fullName: data.fullName || "",
        phoneNumber: data.phoneNumber || "",
        email: data.email || "",
        houseNumber: data.houseNumber || "",
      });
    } catch (error) {
      console.error("No profile found", error);
      setProfile(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      if (profile && profile.id) {
        // Update
        const updated = await api.update1({ 
          id: profile.id, 
          userProfile: { ...profile, ...formData } 
        });
        setProfile(updated);
        setIsEditing(false);
      } else {
        alert("Cannot update a non-existent profile.");
      }
    } catch (error) {
      console.error("Error saving profile", error);
      alert("Failed to save profile");
    }
  };

  if (isLoading) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading profile...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white min-h-screen pb-10">

        {/* Header */}
        <div className="bg-[#1a3254] text-white px-4 pt-6 pb-10 relative">
          <button 
            onClick={() => router.back()}
            className="absolute top-6 left-4 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft size={24} />
          </button>

          <div className="flex flex-col items-center pt-6">
            <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center text-6xl border-4 border-white shadow-xl relative overflow-hidden">
              {profile?.profilePhotoUrl ? (
                <img src={profile.profilePhotoUrl} alt="Profile" className="w-full h-full object-cover" />
              ) : "👤"}
            </div>
            
            {isEditing ? (
              <div className="mt-6 w-full max-w-xs space-y-3">
                <div>
                  <label className="text-xs text-white/70 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    value={formData.fullName} 
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})} 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/70 ml-1">Phone</label>
                  <input 
                    type="text" 
                    value={formData.phoneNumber} 
                    onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/70 ml-1">Email</label>
                  <input 
                    type="email" 
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter email"
                  />
                </div>
                
                <div className="flex gap-2 pt-2">
                  <button onClick={handleSave} className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl flex items-center justify-center gap-2 font-medium transition-colors">
                    <Check size={18} /> Save
                  </button>
                  <button onClick={() => { setIsEditing(false); fetchProfile(); }} className="flex-1 bg-white/20 hover:bg-white/30 text-white py-2 rounded-xl flex items-center justify-center gap-2 font-medium transition-colors">
                    <X size={18} /> Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h1 className="text-2xl font-bold mt-4">{profile?.fullName || "New User"}</h1>
                <p className="flex items-center gap-1.5 text-white/70 mt-1">
                  <MapPin size={16} /> {profile?.ward?.name || "Ward Unknown"}, Kerala
                </p>
                <div className="flex gap-3 mt-5">
                  <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-sm flex items-center gap-2 transition-colors">
                    <Edit2 size={16}/> Edit Profile
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Content */}
        {!isEditing && (
          <div className="p-5 -mt-6 space-y-6 relative z-10">

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
                <p className="text-3xl font-bold text-[#1a3254]">27</p>
                <p className="text-xs text-gray-500 mt-1">Reports</p>
              </div>
              <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
                <p className="text-3xl font-bold text-green-600">19</p>
                <p className="text-xs text-gray-500 mt-1">Solved</p>
              </div>
              <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
                <p className="text-3xl font-bold text-amber-600">185</p>
                <p className="text-xs text-gray-500 mt-1">Points</p>
              </div>
            </div>

            {/* Menu Options */}
            <div className="space-y-3">
              <div className="bg-white rounded-2xl p-5 flex gap-4 items-center border border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <User size={28} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold">Personal Information</p>
                  <p className="text-sm text-gray-500 line-clamp-1">{profile?.email || "Update your details"}</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 flex gap-4 items-center border border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FileText size={28} className="text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold">My Reports</p>
                  <p className="text-sm text-gray-500">View all your submitted issues</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 flex gap-4 items-center border border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Award size={28} className="text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold">Achievements</p>
                  <p className="text-sm text-gray-500">Your civic contributions</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 flex gap-4 items-center border border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Settings size={28} className="text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold">Settings</p>
                  <p className="text-sm text-gray-500">Notifications &amp; Preferences</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 flex gap-4 items-center text-red-600 border border-gray-100 cursor-pointer hover:bg-red-50 transition-colors">
                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <LogOut size={28} />
                </div>
                <div>
                  <p className="font-semibold">Logout</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}