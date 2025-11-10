import { use, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

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
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img className="w-10" src={logo} alt="" />
          <h1 className="text-2xl font-bold text-green-700">PlateShare</h1>
        </NavLink>
        {/* Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          <NavLink to="/" className="hover:text-green-600">
            Home
          </NavLink>
          <NavLink to="/foods" className="hover:text-green-600">
            Available Foods
          </NavLink>

          {!user && (
            <NavLink
              to="/login"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Login
            </NavLink>
          )}

          {user && (
            <>
              {/* Profile Dropdown */}
              <div className="relative">
                <img
                  src={
                    user.photoURL || "https://i.ibb.co.com/ch0Mj7bb/image.png"
                  }
                  alt="Profile"
                  className="w-10 h-10 rounded-full border cursor-pointer"
                  onClick={() => setOpen(!open)}
                />
                {open && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2">
                    <NavLink
                      to="/add-food"
                      className="block btn w-full text-left px-4 py-2 hover:text-green-600"
                    >
                      Add Food
                    </NavLink>
                    <NavLink
                      to="/manage-foods"
                      className="block btn w-full text-left px-4 py-2 hover:text-green-600"
                    >
                      Manage My Foods
                    </NavLink>
                    <NavLink
                      to="/my-requests"
                      className="block btn w-full text-left px-4 py-2 hover:text-green-600"
                    >
                      My Food Requests
                    </NavLink>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-4 font-medium text-gray-700">
          <NavLink to="/" className="block">
            Home
          </NavLink>
          <NavLink to="/foods" className="block">
            Available Foods
          </NavLink>

          {!user && (
            <NavLink
              to="/login"
              className="block px-4 py-2 bg-green-600 text-white rounded-lg text-center"
            >
              Login
            </NavLink>
          )}

          {user && (
            <>
              <NavLink to="/add-food" className="block">
                Add Food
              </NavLink>
              <NavLink to="/manage-foods" className="block">
                Manage My Foods
              </NavLink>
              <NavLink to="/my-requests" className="block">
                My Food Requests
              </NavLink>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};
export default Navbar;
