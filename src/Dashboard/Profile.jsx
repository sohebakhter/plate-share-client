import React from "react";
import useAuth from "../Hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">User Profile</h1>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <img
              src={user.photoURL || "/default-avatar.png"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
            />
          </div>

          {/* Profile Details */}
          <div className="flex-grow">
            <h2 className="text-2xl font-semibold mb-4">
              {user.displayName || "User"}
            </h2>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-medium text-gray-700">Email:</span>
                <span className="text-gray-600">{user.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-medium text-gray-700">User ID:</span>
                <span className="text-gray-600">{user.uid}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-medium text-gray-700">
                  Email Verified:
                </span>
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    user.emailVerified
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {user.emailVerified ? "Yes" : "No"}
                </span>
              </div>

              {user.metadata && (
                <>
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-700">
                      Account Created:
                    </span>
                    <span className="text-gray-600">
                      {new Date(
                        user.metadata.creationTime
                      ).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-700">
                      Last Sign In:
                    </span>
                    <span className="text-gray-600">
                      {new Date(
                        user.metadata.lastSignInTime
                      ).toLocaleDateString()}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
