"use client";

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
// Import your generated API - adjust the path if necessary
import { IssueCommentControllerApi, Configuration } from '../../../src/api/generated'; 

export default function CommandEditorPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // 1. Get the Issue ID from the URL path (?issueId=...)
  const issueId = searchParams.get('issueId');
  
  // 2. State for the user's input
  const [commandText, setCommandText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 3. Setup API Configuration
  const config = new Configuration({
    basePath: "http://localhost:8080", // Your Spring Boot Server
  });
  const commentApi = new IssueCommentControllerApi(config);




const handleSubmit = async () => {
  // 🛑 SAFETY GATE: If there's no issueId, don't even try to send the request
  if (!issueId) {
    alert("Error: This command doesn't know which issue it belongs to. Please go back and try again.");
    return;
  }

  if (!commandText.trim()) return alert("Please enter a command!");
  
  setIsSubmitting(true);
  try {
    await commentApi.create9({
      issueComment: {
        content: commandText,
        isFromAuthority: false,
        createdAt: new Date(),
        // 🔗 FORCING THE LINK: We ensure this is a number
        issue: { id: Number(issueId) } 
      } as any 
    });

    alert("📜 Command successfully submitted!");
    router.push('/issue-details-view'); 
  } catch (error) {
    console.error("API Error:", error);
    alert("Submission failed. Check your Spring Boot console.");
  } finally {
    setIsSubmitting(false);
  }
};





  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Header Section */}
      <div className="max-w-2xl mx-auto flex items-center justify-between mb-8">
        <button onClick={() => router.back()} className="text-gray-600 font-bold">
          ✕ Cancel
        </button>
        <h1 className="text-xl font-black text-[#1E3A8A]">📜 DRAFT COMMAND</h1>
        <div className="w-10"></div> {/* Spacer */}
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="p-6 bg-[#1E3A8A] text-white">
          <p className="text-xs uppercase tracking-widest opacity-80">Reference Context</p>
          <h2 className="text-lg font-bold">Issue ID: #{issueId || "Unknown"}</h2>
        </div>

        <div className="p-6">
          <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">Official Motion Content</label>
          <textarea
            className="w-full h-80 p-5 bg-gray-50 border-none rounded-2xl text-gray-800 text-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            placeholder="Describe the necessary action for this area..."
            value={commandText}
            onChange={(e) => setCommandText(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full mt-6 py-4 rounded-2xl font-bold text-lg transition-all ${
              isSubmitting ? "bg-gray-400" : "bg-[#111827] text-white hover:bg-black"
            }`}
          >
            {isSubmitting ? "Processing..." : "🚀 Post to Parliament"}
          </button>
        </div>
      </div>
    </div>
  );
}