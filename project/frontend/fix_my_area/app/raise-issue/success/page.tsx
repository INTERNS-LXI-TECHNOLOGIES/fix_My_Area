import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card className="p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Issue Submitted Successfully!
          </h1>

          {/* Message */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            Thank you for helping improve your community. Your issue report has been submitted
            and will be reviewed by the relevant authorities within 24-48 hours.
          </p>

          {/* What happens next */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
            <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Your issue will be reviewed by local authorities</li>
              <li>• Status updates will be posted as work progresses</li>
              <li>• Community members can vote and comment on your issue</li>
              <li>• You'll receive notifications about updates</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link href="/issues" className="block">
              <Button className="w-full">
                📊 Track Your Issue
              </Button>
            </Link>

            <Link href="/raise-issue" className="block">
              <Button variant="secondary" className="w-full">
                ➕ Report Another Issue
              </Button>
            </Link>

            <Link href="/" className="block">
              <Button variant="secondary" className="w-full">
                🏠 Return to Home
              </Button>
            </Link>
          </div>

          {/* Help Text */}
          <p className="text-xs text-gray-500 mt-6">
            Issue ID will be sent to your email. Check your spam folder if you don't see it.
          </p>
        </Card>
      </div>
    </div>
  );
}