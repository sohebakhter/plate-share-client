import { use } from "react";
import { useNavigate, Link, useLocation } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { signInUser, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Successfully Login");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("login failed");
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
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
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
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all"
        >
          Login with Google
        </button>

        <p className="mt-4 text-center text-gray-600">
          New to PlateShare?{" "}
          <Link to="/register" className="text-green-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
