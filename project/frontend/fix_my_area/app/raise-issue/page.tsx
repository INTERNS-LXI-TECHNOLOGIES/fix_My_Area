"use client";

import IssueForm from "./components/IssueForm";

export default function RaiseIssuePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center p-4">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-5">
        <IssueForm />
      </div>

    </div>
  );
}