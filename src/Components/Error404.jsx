import { useNavigate } from "react-router";
import gif from "../assets/404giphy.gif";

const Error404 = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-5 text-center">
      <img
        src={gif} // 404 GIF
        alt="404 Not Found"
        className="w-80 md:w-96 mb-5"
      />
      <h1 className="text-5xl font-bold mb-3 text-red-500">404</h1>
      <h2 className="text-2xl font-semibold mb-5">Oops! Page Not Found</h2>
      <p className="mb-5 text-gray-700">
        The page you are looking for does not exist or has been moved.
      </p>
      <button
        onClick={goHome}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Error404;
