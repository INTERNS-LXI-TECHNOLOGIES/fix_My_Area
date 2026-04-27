"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function IssueForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("1");
  const [file, setFile] = useState<File | null>(null);
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  // 📍 Get location
  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };

  // 🚀 Submit
const handleSubmit = async () => {
  try {
    const res = await fetch("http://localhost:8080/api/issues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        issueCategoryId: Number(categoryId),
        userProfileId: 1,
      }),
    });

    if (!res.ok) throw new Error("Failed");

    router.push("/raise-issue/success");
  } catch (err) {
    console.error(err);
    alert("Error submitting issue");
  }
};  

  return (
    <div className="space-y-4">

      <input
        type="text"
        placeholder="Title"
        className="w-full border p-2 rounded"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        className="w-full border p-2 rounded"
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button onClick={handleLocation} className="bg-green-500 text-white px-3 py-2 rounded">
        Get Location
      </button>

      <select
        onChange={(e) => setCategoryId(e.target.value)}
        className="w-full border p-2 rounded"
      >
        <option value="1">Road</option>
        <option value="2">Water</option>
      </select>

      <button


        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        Submit Issue
        
      </button>

    </div>
  );
}