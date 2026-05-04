'use client';

import { useState, useEffect } from 'react';
import { IssueCard } from '@/components/IssueCard';
import { Card } from '@/components/ui/Card';

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

export function RecentIssues() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRecentIssues();
  }, []);

  const fetchRecentIssues = async () => {
    try {
      setLoading(true);
      // Mock data for now - replace with actual API call
      const mockIssues: Issue[] = [
        {
          id: 1,
          title: 'Pothole on Main Street causing traffic issues',
          description: 'Large pothole near the intersection of Main St and Oak Ave has been causing vehicles to swerve and creating safety concerns.',
          status: 'OPEN',
          createdAt: '2024-01-15T10:30:00Z',
          location: { name: 'Main Street', district: 'Downtown' },
          category: { name: 'Road Maintenance' },
          votes: 24,
          comments: 8
        },
        {
          id: 2,
          title: 'Broken streetlight at Park Avenue',
          description: 'Streetlight at the corner of Park Ave and 5th St has been out for over a week, making the area unsafe at night.',
          status: 'IN_PROGRESS',
          createdAt: '2024-01-14T15:45:00Z',
          location: { name: 'Park Avenue', district: 'Residential' },
          category: { name: 'Street Lighting' },
          votes: 18,
          comments: 5
        },
        {
          id: 3,
          title: 'Overflowing garbage bins at Central Park',
          description: 'Multiple garbage bins in Central Park are overflowing and attracting pests. Regular collection seems to be missed.',
          status: 'RESOLVED',
          createdAt: '2024-01-12T09:15:00Z',
          location: { name: 'Central Park', district: 'Parks' },
          category: { name: 'Waste Management' },
          votes: 31,
          comments: 12
        }
      ];

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIssues(mockIssues);
    } catch (err) {
      setError('Failed to load recent issues');
      console.error('Error fetching issues:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="p-6 animate-pulse">
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded mb-4 w-1/2"></div>
            <div className="flex justify-between">
              <div className="h-3 bg-gray-200 rounded w-1/4"></div>
              <div className="h-6 bg-gray-200 rounded w-16"></div>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Card className="p-8 text-center">
        <div className="text-red-600 mb-4">
          <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Unable to Load Issues</h3>
        <p className="text-gray-600 mb-4">{error}</p>
        <button
          onClick={fetchRecentIssues}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Try Again
        </button>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {issues.map((issue) => (
        <IssueCard key={issue.id} issue={issue} showActions={true} />
      ))}
    </div>
  );
}