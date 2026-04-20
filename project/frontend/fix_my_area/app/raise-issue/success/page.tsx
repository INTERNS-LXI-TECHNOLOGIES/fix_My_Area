"use client";

import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center p-4">
      
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md text-center">

        {/* Success Icon */}
        <div className="text-5xl mb-4">✅</div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Issue Submitted!
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Your issue has been successfully reported.  
          Authorities will review it soon.
        </p>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => router.push("/raise-issue")}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            ➕ Raise Another Issue
          </button>

          <button
            onClick={() => router.push("/")}
            className="w-full border py-2 rounded-lg hover:bg-gray-100"
          >
            🏠 Go to Home
          </button>
        </div>

      </div>

    </div>
  );
}