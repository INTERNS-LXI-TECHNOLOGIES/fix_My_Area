"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const LocationPicker = dynamic(() => import("./LocationPicker"), {
  ssr: false,
});

type Category = {
  id: string;
  label: string;
  sub: string;
  bg: string;
  iconBg: string;
  border: string;
  text: string;
  subText: string;
};

const CATEGORIES: Category[] = [
  { id: "1", label: "Road", sub: "Potholes, damage", bg: "bg-[#EEEDFE]", iconBg: "bg-[#CECBF6]", border: "border-[#7F77DD]", text: "text-[#3C3489]", subText: "text-[#534AB7]" },
  { id: "2", label: "Water", sub: "Leaks, supply", bg: "bg-[#E1F5EE]", iconBg: "bg-[#9FE1CB]", border: "border-[#1D9E75]", text: "text-[#085041]", subText: "text-[#0F6E56]" },
  { id: "3", label: "Electric", sub: "Outage, hazard", bg: "bg-[#FAEEDA]", iconBg: "bg-[#FAC775]", border: "border-[#BA7517]", text: "text-[#633806]", subText: "text-[#854F0B]" },
  { id: "4", label: "Sanitation", sub: "Waste, hygiene", bg: "bg-[#FBEAF0]", iconBg: "bg-[#F4C0D1]", border: "border-[#D4537E]", text: "text-[#72243E]", subText: "text-[#993556]" },
];

export default function RaiseIssuePage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("1");
  const [file, setFile] = useState<File | null>(null);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 📡 GPS location
  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      () => {
        alert("Location access denied");
      }
    );
  };

  // 🚀 Submit
  const handleSubmit = async () => {
  try {
    // ✅ Better validation
    if (!title || !description || !location?.lat || !location?.lng) {
      alert("Fill all fields + select location");
      return;
    }

    if (!categoryId) {
      alert("Select category");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("issueCategoryId", categoryId.toString());
    formData.append("latitude", location.lat.toString());
    formData.append("longitude", location.lng.toString());

    // ✅ Safe file handling
    if (file) {
      console.log("File:", file);
      formData.append("file", file);
    } else {
      console.log("No file selected");
    }

    // ✅ Debug log
    console.log("Submitting data...");
    console.log({
      title,
      description,
      categoryId,
      location,
      file,
    });

    const res = await fetch("http://localhost:8080/api/issues/create", { // ⚠️ check endpoint
      method: "POST",
      body: formData,
    });

    console.log("Response status:", res.status);

    if (!res.ok) {
      const text = await res.text();
      console.error("Backend error:", text);
      throw new Error("Request failed");
    }

    router.push("/raise-issue/success");

  } catch (err) {
    console.error("🔥 ERROR:", err);
    alert("Error submitting issue");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm overflow-hidden">

        {/* HEADER */}
        <div className="p-6">
          <h1 className="text-xl font-semibold">Raise an Issue</h1>
        </div>

        {/* CATEGORY */}
        <div className="px-6 pb-4">
          <p className="text-xs text-gray-400 mb-2">Category</p>
          <div className="grid grid-cols-2 gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryId(cat.id)}
                className={`${cat.bg} p-3 rounded-xl border-2 ${
                  categoryId === cat.id ? cat.border : "border-transparent"
                }`}
              >
                <p className={`text-sm ${cat.text}`}>{cat.label}</p>
                <p className={`text-xs ${cat.subText}`}>{cat.sub}</p>
              </button>
            ))}
          </div>
        </div>

        {/* TITLE */}
        <div className="px-6 pb-3">
          <input
            className="w-full border rounded-xl p-3 text-sm
            text-blue-700 placeholder:text-slate-400"
            placeholder="Issue title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* DESCRIPTION */}
        <div className="px-6 pb-4">
          <textarea
            className="w-full border rounded-xl p-3 text-sm 
            text-blue-700 placeholder:text-slate-400"
            placeholder="Describe issue"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* FILE */}
        <div className="px-6 pb-4">
          <p className="text-xs text-gray-400 mb-1">Attachment</p>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>

        {/* LOCATION */}
        <div className="px-6 pb-4">
          <p className="text-xs text-gray-400 mb-2">Location</p>

          {/* MAP */}
          <LocationPicker onSelect={(loc) => setLocation(loc)} />

          {/* SELECTED */}
          <div className="mt-2 text-center text-xs">
            {location
              ? `📍 ${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`
              : "Select location"}
          </div>

          {/* GPS */}
          <button
            onClick={handleLocation}
            className="mt-2 w-full bg-blue-100 text-blue-700 py-2 rounded-lg text-xs"
          >
            Use My Location
          </button>
        </div>

        {/* SUBMIT */}
        <div className="p-6">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-purple-600 text-white py-3 rounded-xl"
          >
            {isSubmitting ? "Submitting..." : "Submit Issue"}
          </button>
        </div>
      </div>
    </div>
  );
} 