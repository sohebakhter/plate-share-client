import { useNavigate, Link, useLocation } from "react-router";
import { use } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    //password validation
    const regEx = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regEx.test(password)) {
      toast.error(
        "❌ Password must be at least 6 characters long and include both uppercase and lowercase letters."
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        //updating user profile
        const profile = {
          displayName: name,
          photoURL: photo,
        };
        updateProfile(result.user, profile)
          .then(() => {
            toast.success("Profile Updated Successfully");
          })
          .catch((error) => {
            console.log(error.message);
          });

        toast.success("Registration successfull");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Can't Register");
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success("Google Sign In successfull");
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <input
            type="url"
            name="photo"
            placeholder="Photo URL"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all"
          >
            Register
          </button>
        </form>

        {/* Google */}
        <button
          onClick={handleGoogleLogin}
          className="btn w-full mt-4 py-2 rounded-lg font-semibold  bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Continue with Google
        </button>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
