import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth"; 
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("/foods?status=Available")

      .then((data) => {
        console.log(data.data);
        setFoods(data.data);
        setLoading(false);
      });
  }, [axiosSecure]);

  const handleViewDetails = (id) => {
    if (!user) {
      return navigate("/login");
    }
    navigate(`/food/${id}`);
  };

    if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-600">
        Available Foods
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((food) => (
          <div
            key={food._id}
            className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition"
          >
            <img
              src={food.foodImage}
              alt={food.foodName}
              className="h-52 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {food.foodName}
              </h3>

              <div className="flex items-center gap-2 my-2">
                <img
                  src={food.donorImage}
                  alt={food.donorName}
                  className="w-8 h-8 rounded-full object-cover border"
                />
                <p className="text-sm text-gray-600">{food.donorName}</p>
              </div>

              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Serves:</span> {food.foodQuantity}
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Location:</span>{" "}
                {food.pickupLocation}
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Expires:</span>{" "}
                {food.expireDate}
              </p>

              <button
                onClick={() => handleViewDetails(food._id)}
                className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
