import React from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const AddFood = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleAddFood = (e) => {
    e.preventDefault();

    const foodName = e.target.foodName.value;
    const foodImage = e.target.foodImage.value;
    const foodQuantity = e.target.foodQuantity.value;
    const pickupLocation = e.target.pickupLocation.value;
    const expireDate = e.target.expireDate.value;
    const notes = e.target.notes.value;

    const foodData = {
      foodName,
      foodImage,
      foodQuantity: Number(foodQuantity),
      pickupLocation,
      expireDate,
      notes,
      donorName: user?.displayName,
      donorEmail: user?.email,
      donorImage: user?.photoURL,
      food_status: "Available",
    };

    // send to mongoDB backend
    axiosSecure.post("/add-food", foodData).then((data) => {
      console.log(data.data);
      if (data.data.insertedId) {
        toast.success("food added successfully");
      }
    });
  };

  return (
    <form
      onSubmit={handleAddFood}
      className="space-y-4 p-4 max-w-md mx-auto border rounded-xl"
    >
      <input
        type="text"
        name="foodName"
        placeholder="Food Name"
        required
        className="w-full border p-2 rounded"
      />

      <input
        type="url"
        name="foodImage"
        placeholder="Food Image"
        required
        className="w-full border p-2 rounded"
      />

      <input
        type="number"
        name="foodQuantity"
        placeholder="Serves how many?"
        required
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="pickupLocation"
        placeholder="Pickup Location"
        required
        className="w-full border p-2 rounded"
      />

      <input
        type="date"
        name="expireDate"
        required
        className="w-full border p-2 rounded"
      />

      <textarea
        name="notes"
        placeholder="Additional Notes"
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white w-full p-2 rounded"
      >
        Add Food
      </button>
    </form>
  );
};

export default AddFood;
