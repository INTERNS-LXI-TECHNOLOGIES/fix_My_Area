"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Category = { id: string; label: string; sub: string; bg: string; iconBg: string; border: string; text: string; subText: string };

const CATEGORIES: Category[] = [
  { id: "1", label: "Road",       sub: "Potholes, damage", bg: "bg-[#EEEDFE]", iconBg: "bg-[#CECBF6]", border: "border-[#7F77DD]", text: "text-[#3C3489]", subText: "text-[#534AB7]" },
  { id: "2", label: "Water",      sub: "Leaks, supply",    bg: "bg-[#E1F5EE]", iconBg: "bg-[#9FE1CB]", border: "border-[#1D9E75]", text: "text-[#085041]", subText: "text-[#0F6E56]" },
  { id: "3", label: "Electric",   sub: "Outage, hazard",   bg: "bg-[#FAEEDA]", iconBg: "bg-[#FAC775]", border: "border-[#BA7517]", text: "text-[#633806]", subText: "text-[#854F0B]" },
  { id: "4", label: "Sanitation", sub: "Waste, hygiene",   bg: "bg-[#FBEAF0]", iconBg: "bg-[#F4C0D1]", border: "border-[#D4537E]", text: "text-[#72243E]", subText: "text-[#993556]" },
];

export default function RaiseIssuePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("1");
  const [file, setFile] = useState<File | null>(null);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locating, setLocating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLocation = () => {
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => { setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }); setLocating(false); },
      () => setLocating(false)
    );
  };

 const handleSubmit = async () => {
  if (!title.trim() || !description.trim()) return;
  setIsSubmitting(true);
  try {
    const formData = new FormData();

    // ✅ Append all fields as form data
    formData.append("title", title);
    formData.append("description", description);
    formData.append("issueCategoryId", String(categoryId));
    formData.append("userProfileId", "1");
    formData.append("latitude",  String(location?.lat  ?? ""));
    formData.append("longitude", String(location?.lng ?? ""));

    // ✅ Append image only if selected
    if (file) {
      formData.append("image", file);
    }

    const res = await fetch("http://localhost:8080/api/issues", {
      method: "POST",
      // ❌ Do NOT set Content-Type manually — browser sets it with the correct boundary
      body: formData,
    });

    if (!res.ok) throw new Error("Failed");
    router.push("/raise-issue/success");
  } catch (err) {
    console.error(err);
    alert("Error submitting issue");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 overflow-hidden">

        {/* Header */}
        <div className="p-6 pb-5">
          <div className="flex items-center justify-between mb-5">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-medium tracking-widest uppercase text-[#534AB7] bg-[#EEEDFE] rounded-full px-3 py-1 w-fit">
                New report
              </span>
              <h1 className="text-xl font-medium text-gray-900">Raise an issue</h1>
            </div>
            <div className="flex gap-1.5">
              <div className="w-5 h-1.5 rounded-full bg-[#534AB7]" />
              <div className="w-5 h-1.5 rounded-full bg-[#1D9E75]" />
              <div className="w-5 h-1.5 rounded-full bg-gray-200" />
            </div>
          </div>

          {/* Category grid */}
          <p className="text-[11px] font-medium tracking-widest uppercase text-gray-400 mb-2">Issue category</p>
          <div className="grid grid-cols-2 gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryId(cat.id)}
                className={`${cat.bg} rounded-xl p-3 text-left border-2 transition-all ${
                  categoryId === cat.id ? cat.border : "border-transparent"
                }`}
              >
                <div className={`${cat.iconBg} w-7 h-7 rounded-lg flex items-center justify-center mb-1`}>
                  {/* icon placeholder */}
                  <span className={`text-xs font-medium ${cat.text}`}>{cat.label[0]}</span>
                </div>
                <p className={`text-sm font-medium ${cat.text}`}>{cat.label}</p>
                <p className={`text-[11px] ${cat.subText}`}>{cat.sub}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Fields */}
        <div className="px-6 pb-4">
          <label className="block text-[11px] font-medium tracking-widest uppercase text-gray-400 mb-1.5">Issue title</label>
          <input
            type="text"
            className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-[#7F77DD] transition-colors"
            placeholder="Brief summary of the issue..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="px-6 pb-4">
          <label className="block text-[11px] font-medium tracking-widest uppercase text-gray-400 mb-1.5">Description</label>
          <textarea
            className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-[#7F77DD] resize-none h-24 leading-relaxed transition-colors"
            placeholder="Describe what you observed in detail..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Attachment + Location */}
        <div className="grid grid-cols-2 gap-2.5 px-6 pb-5">
          <div>
            <p className="text-[11px] font-medium tracking-widest uppercase text-gray-400 mb-1.5">Attachment</p>
            <label className="border border-dashed border-gray-200 rounded-xl p-3 bg-gray-50 flex flex-col items-center gap-1 cursor-pointer">
              <div className="w-7 h-7 bg-[#FAECE7] rounded-lg flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 15 15" fill="none" stroke="#993C1D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 2v7M5.5 6.5L8 4l2.5 2.5"/><path d="M3 9.5v2a1 1 0 001 1h7a1 1 0 001-1v-2"/>
                </svg>
              </div>
              <span className="text-xs font-medium text-[#993C1D]">{file ? file.name.substring(0, 12) : "Upload photo"}</span>
              <span className="text-[10px] text-gray-400">JPG, PNG, PDF</span>
              <input type="file" className="hidden" onChange={(e) => setFile(e.target.files?.[0] || null)} />
            </label>
          </div>
          <div>
            <p className="text-[11px] font-medium tracking-widest uppercase text-gray-400 mb-1.5">Location</p>
            <button
              onClick={handleLocation}
              className="w-full bg-[#E6F1FB] border border-[#B5D4F4] rounded-xl p-3 flex flex-col items-center gap-1"
            >
              <div className="w-7 h-7 bg-[#B5D4F4] rounded-lg flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 15 15" fill="none" stroke="#0C447C" strokeWidth="1.4" strokeLinecap="round">
                  <path d="M7.5 1C5 1 3 3 3 5.5c0 3.5 4.5 8.5 4.5 8.5s4.5-5 4.5-8.5C12 3 10 1 7.5 1z"/>
                  <circle cx="7.5" cy="5.5" r="1.5"/>
                </svg>
              </div>
              <span className="text-xs font-medium text-[#0C447C]">{locating ? "Detecting..." : location ? "Located" : "Get location"}</span>
              <span className="text-[10px] text-[#185FA5]">
                {location ? `${location.lat.toFixed(3)}, ${location.lng.toFixed(3)}` : "Tap to detect"}
              </span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-[#534AB7] text-[#EEEDFE] py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 active:scale-[.98] transition-all disabled:opacity-50"
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 8h12M9 3l5 5-5 5"/>
            </svg>
            {isSubmitting ? "Submitting..." : "Submit issue"}
          </button>
        </div>

      </div>
    </div>
  );
}