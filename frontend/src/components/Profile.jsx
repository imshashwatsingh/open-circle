import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/useAuth';

const Profile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState({
    displayName: '',
    bio: '',
    skills: [],
    interests: []
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user profile
    setTimeout(() => {
      setProfile({
        displayName: user?.displayName || '',
        bio: 'Passionate learner and mentor at OpenCircle.',
        skills: ['Web Development', 'React', 'Mentoring'],
        interests: ['Teaching', 'Learning', 'Community']
      });
      setLoading(false);
    }, 600);
  }, [user]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">My Profile</h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>
        {isEditing ? (
          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Display Name
              </label>
              <input
                type="text"
                value={profile.displayName}
                onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Bio
              </label>
              <textarea
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 h-32"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
            >
              Save Changes
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">
                {profile.displayName || user?.email}
              </h2>
              <p className="text-gray-300">{profile.bio || 'No bio added yet.'}</p>
              <p className="text-gray-400 mt-2">Email: {user?.email}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Skills</h3>
              {profile.skills?.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No skills added yet.</p>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Interests</h3>
              {profile.interests?.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No interests added yet.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;