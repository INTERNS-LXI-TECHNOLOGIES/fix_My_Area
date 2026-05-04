import IssueForm from "./components/IssueForm";

export default function RaiseIssuePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Make Your Community Better
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Report issues that affect your community. From potholes to broken streetlights,
            every report helps create a better living environment for everyone.
          </p>
        </div>

        {/* Form */}
        <IssueForm />

        {/* Tips Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            Tips for Better Issue Reports
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 font-bold">📍</span>
              <div>
                <strong>Be Specific:</strong> Include exact locations and detailed descriptions
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 font-bold">📸</span>
              <div>
                <strong>Add Photos:</strong> Visual evidence helps authorities understand the issue better
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 font-bold">⏰</span>
              <div>
                <strong>Timeline:</strong> Mention when you first noticed the problem
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 font-bold">👥</span>
              <div>
                <strong>Impact:</strong> Explain how the issue affects the community
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}