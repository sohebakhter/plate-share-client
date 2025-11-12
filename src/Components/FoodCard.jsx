import React from "react";
import { useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      whileHover={{
        scale: [null, 1, 1.05],
        transition: {
          duration: 0.1,
          times: [0, 0.6, 1],
          ease: ["easeInOut", "easeOut"],
        },
      }}
      className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
    >
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
          <span className="font-semibold">Serves:</span>{" "}
          <span className="text-green-600">{food.foodQuantity}</span> People
        </p>

        <p className="text-gray-700 text-sm">
          <span className="font-semibold ">Status: </span>
          <span
            className={`${
              food.food_status == "Available"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {food.food_status}
          </span>
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
    </motion.div>
  );
};

export default FoodCard;
