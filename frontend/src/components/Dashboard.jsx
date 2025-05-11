import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/useAuth';

const Dashboard = () => {
  const { user } = useAuth();
  const [mentorships, setMentorships] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setMentorships([
        { id: 1, role: 'mentor', skill: 'Web Development' },
        { id: 2, role: 'mentee', skill: 'Data Science' }
      ]);
      setActivities([
        { id: 1, description: 'Completed React Basics', timestamp: new Date() },
        { id: 2, description: 'Mentored Alice in JavaScript', timestamp: new Date() }
      ]);
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome, {user?.displayName || user?.email || 'User'}!</h1>
        <p className="text-gray-300">Here is your dashboard overview.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Overview Section */}
        <div className="bg-gray-800 rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-400">Active Mentorships</p>
              <p className="text-2xl font-bold text-white">{mentorships.length}</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-400">Skills Learning</p>
              <p className="text-2xl font-bold text-white">{mentorships.filter(m => m.role === 'mentee').length}</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-400">Total Activities</p>
              <p className="text-2xl font-bold text-white">{activities.length}</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-400">Profile Completion</p>
              <p className="text-2xl font-bold text-white">{user?.displayName ? '80%' : '50%'}</p>
            </div>
          </div>
        </div>
        {/* Recent Activity */}
        <div className="bg-gray-800 rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {activities.length > 0 ? (
              activities.map(activity => (
                <div
                  key={activity.id}
                  className="bg-gray-700 p-4 rounded-lg flex items-center"
                >
                  <div className="flex-1">
                    <p className="text-white">{activity.description}</p>
                    <p className="text-sm text-gray-400">
                      {activity.timestamp.toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No recent activity</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;