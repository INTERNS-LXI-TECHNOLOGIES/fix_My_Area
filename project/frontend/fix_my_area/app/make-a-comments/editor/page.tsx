"use client";

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { IssueCommentControllerApi } from '../../../src/api-client';

export default function CommandEditorPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const issueId = searchParams.get('issueId');

  console.log("Retrieved issueId from URL:", issueId);

  const [commandText, setCommandText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize the API instance
  const commentApi = new IssueCommentControllerApi();

const handleSubmit = async () => {
  if (!issueId) return alert("Error: No issue ID found");
  if (!commandText.trim()) return alert("Please enter a command!");

  setIsSubmitting(true);

 try {


const payload = {

  content: commandText,
  isFromAuthority: false,
  isDeleted: false,
  issueId: Number(issueId),
  userProfileId: 1

};


await commentApi.create9(payload);

    alert("🚀 Command successfully submitted!");
    router.push(`/issue-details-view/${issueId}`);

  } catch (error) {
    console.error("Full Error Object:", error);
    alert("Submission failed.");
  } finally {

    setIsSubmitting(false);

  }

};


  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Header */}
      <div className="max-w-2xl mx-auto flex items-center justify-between mb-8">
        <button 
          onClick={() => router.back()} 
          className="text-gray-600 font-bold hover:opacity-70 transition-opacity"
        >
          ✕ Cancel
        </button>
        <h1 className="text-xl font-black text-[#1E3A8A]">📜 DRAFT COMMAND</h1>
        <div className="w-10"></div>
      </div>

      {/* Editor Card */}
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="p-6 bg-[#1E3A8A] text-white">
          <p className="text-xs uppercase tracking-widest opacity-80">Reference Context</p>
          <h2 className="text-lg font-bold">Issue ID: #{issueId || "Unknown"}</h2>
        </div>

        <div className="p-6">
          <textarea
            className="w-full h-80 p-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#1E3A8A] outline-none text-gray-800"
            placeholder="Type your command here..."
            value={commandText}
            onChange={(e) => setCommandText(e.target.value)}
            disabled={isSubmitting}
          />

          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !commandText.trim()}
            className={`w-full mt-6 py-4 rounded-2xl font-bold transition-all ${
              isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {isSubmitting ? "Processing..." : "🚀 Post to Parliament"}
          </button>
        </div>
      </div>
    </div>
  );
  
}