import React from "react";
import { useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";

const FoodCard = ({ food }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleViewDetails = (id) => {
    if (!user) {
      return navigate("/login");
    }
    navigate(`/food/${id}`);
  };
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition">
      <img
        src={food.foodImage}
        alt={food.foodName}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{food.foodName}</h3>

        <div className="flex items-center gap-2 my-2">
          <img
            src={food.donorImage}
            alt={food.donorName}
            className="w-8 h-8 rounded-full object-cover border"
          />
          <p className="text-sm text-gray-600">{food.donorName}</p>
        </div>

        <p className="text-gray-700 text-sm">
          <span className="font-semibold">Serves:</span> <span className="text-green-600">{food.foodQuantity}</span> People
  </p>
        <p className="text-gray-700 text-sm">
          <span className="font-semibold">Location:</span> {food.pickupLocation}
        </p>
        <p className="text-gray-700 text-sm">
          <span className="font-semibold">Expires:</span> {food.expireDate}
        </p>

        <button
          onClick={() => handleViewDetails(food._id)}
          className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
