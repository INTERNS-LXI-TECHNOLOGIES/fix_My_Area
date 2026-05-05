import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface Issue {
  id: number;
  title: string;
  description: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED';
  createdAt: string;
  location?: {
    name: string;
    district: string;
  };
  category?: {
    name: string;
  };
  votes?: number;
  comments?: number;
}

interface IssueCardProps {
  issue: Issue;
  showActions?: boolean;
}

export function IssueCard({ issue, showActions = false }: IssueCardProps) {
  const statusColors = {
    OPEN: 'bg-yellow-100 text-yellow-800',
    IN_PROGRESS: 'bg-blue-100 text-blue-800',
    RESOLVED: 'bg-green-100 text-green-800'
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <Link href={`/issues/${issue.id}`} className="hover:text-blue-600">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {issue.title}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm line-clamp-3 mb-3">
            {issue.description}
          </p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[issue.status]}`}>
          {issue.status.replace('_', ' ')}
        </span>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center space-x-4">
          {issue.location && (
            <span className="flex items-center">
              📍 {issue.location.name}, {issue.location.district}
            </span>
          )}
          {issue.category && (
            <span className="flex items-center">
              🏷️ {issue.category.name}
            </span>
          )}
        </div>
        <span>{formatDate(issue.createdAt)}</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          {issue.votes !== undefined && (
            <span className="flex items-center">
              👍 {issue.votes} votes
            </span>
          )}
          {issue.comments !== undefined && (
            <span className="flex items-center">
              💬 {issue.comments} comments
            </span>
          )}
        </div>

        {showActions && (
          <div className="flex space-x-2">
            <Button size="sm" variant="secondary">
              Vote
            </Button>
            <Link href={`/issues/${issue.id}`}>
              <Button size="sm">
                View Details
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Card>
  );
}