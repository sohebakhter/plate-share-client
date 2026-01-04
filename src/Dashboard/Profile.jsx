import React, { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    displayName: user?.displayName || "",
    photoURL: user?.photoURL || "",
  });
  const [loading, setLoading] = useState(false);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg">Please log in to view your profile.</p>
      </div>
    );
  }

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({
      displayName: user.displayName || "",
      photoURL: user.photoURL || "",
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData({
      displayName: user.displayName || "",
      photoURL: user.photoURL || "",
    });
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await updateProfile(user, {
        displayName: editData.displayName,
        photoURL: editData.photoURL,
      });
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setEditData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="w-full p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">User Profile</h1>
        {!isEditing && (
          <button onClick={handleEdit} className="btn btn-primary">
            Edit Profile
          </button>
        )}
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Profile Picture Section */}
          <div className="flex-shrink-0 w-full lg:w-auto flex flex-col items-center lg:items-start">
            <div className="relative">
              <img
                src={
                  isEditing
                    ? editData.photoURL || "/default-avatar.png"
                    : user.photoURL || "/default-avatar.png"
                }
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
              />
              {isEditing && (
                <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>
              )}
            </div>
            {isEditing && (
              <input
                type="url"
                placeholder="Photo URL"
                value={editData.photoURL}
                onChange={(e) => handleInputChange("photoURL", e.target.value)}
                className="input input-bordered w-full mt-4"
              />
            )}
          </div>

          {/* Profile Details */}
          <div className="flex-grow w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Display Name */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Display Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.displayName}
                    onChange={(e) =>
                      handleInputChange("displayName", e.target.value)
                    }
                    className="input input-bordered w-full"
                    placeholder="Enter your display name"
                  />
                ) : (
                  <p className="text-2xl font-semibold text-gray-900">
                    {user.displayName || "User"}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">
                  {user.email}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Email cannot be changed here for security reasons
                </p>
              </div>

              {/* Email Verified */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Verified
                </label>
                <span
                  className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                    user.emailVerified
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {user.emailVerified ? "✓ Verified" : "✗ Not Verified"}
                </span>
              </div>

              {/* User ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  User ID
                </label>
                <p className="text-gray-600 bg-gray-50 p-3 rounded-lg font-mono text-sm">
                  {user.uid}
                </p>
              </div>

              {/* Account Created */}
              {user.metadata && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Created
                  </label>
                  <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">
                    {new Date(user.metadata.creationTime).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                </div>
              )}

              {/* Last Sign In */}
              {user.metadata && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Sign In
                  </label>
                  <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">
                    {new Date(user.metadata.lastSignInTime).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            {isEditing && (
              <div className="flex gap-4 mt-8">
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className="btn btn-primary"
                >
                  {loading ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </button>
                <button
                  onClick={handleCancel}
                  disabled={loading}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
