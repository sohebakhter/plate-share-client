import { use } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { useTheme } from "../Context/ThemeContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        navigate("/");
        toast.success("sign out successfull");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="navbar bg-base-100  max-w-7xl mx-auto ">
        <div className="flex-1">
          <NavLink to="/" className="flex items-center">
            <motion.img
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, repeatDelay: 1 }}
              className="w-10 rounded-full"
              src={logo}
              alt=""
            />
            <h1 className="text-3xl font-bold text-green-600">PlateShare</h1>
          </NavLink>
        </div>
        <div className="flex items-center md:gap-5 font-medium">
          <div className="flex flex-col md:flex-row md:gap-5">
            <NavLink to="/" className="hover:text-green-600">
              Home
            </NavLink>
            <NavLink to="/foods" className="hover:text-green-600">
              Available Foods
            </NavLink>
            <NavLink to="/about" className="hover:text-green-600">
              About Us
            </NavLink>
            <NavLink to="/contact" className="hover:text-green-600">
              Contact Us
            </NavLink>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle"
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>

          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user.photoURL || "https://i.ibb.co.com/ch0Mj7bb/image.png"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink
                    to="/dashboard"
                    className="block w-full text-left px-4 py-2 hover:text-green-600"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/add-food"
                    className="block w-full text-left px-4 py-2 hover:text-green-600"
                  >
                    Add Food
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manage-foods"
                    className="block w-full text-left px-4 py-2 hover:text-green-600"
                  >
                    Manage My Foods
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/my-requests"
                    className="block w-full text-left px-4 py-2 hover:text-green-600"
                  >
                    My Food Requests
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-green-600"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
