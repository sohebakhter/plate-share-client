import React from "react";
import useAuth from "../Hooks/useAuth";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";

const DProfile = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        navigate("/");
        toast.success("Sign out successful");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Sign out failed");
      });
  };
  return (
    <div>
      {/* Profile Dropdown */}
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img alt="Profile" src={user?.photoURL || "/default-avatar.png"} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <NavLink
              to="/dashboard/profile"
              className="block w-full text-left px-4 py-2 text-gray-500 cursor-not-allowed"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-red-600"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DProfile;
