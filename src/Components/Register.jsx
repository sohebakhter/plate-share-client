import { useNavigate, Link } from "react-router";
import { use } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();

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

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all"
        >
          Login with Google
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
