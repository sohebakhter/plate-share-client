import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const UpdateFood = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const [food, setFood] = useState({});

  useEffect(() => {
    //getting single food for update
    axiosSecure.get(`/food/${id}`).then((data) => {
      setFood(data.data);
    });
  }, [id, axiosSecure]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const name = e.target.foodName.value;
    const quantity = e.target.foodQuantity.value;
    const location = e.target.pickupLocation.value;
    const date = e.target.expireDate.value;
    const notes = e.target.notes.value;

    console.log(name, quantity, location, date, notes);
    const updatedFood = {
      foodName: name,
      foodQuantity: Number(quantity),
      pickupLocation: location,
      expireDate: date,
      notes: notes,
    };

    axiosSecure.patch(`/foods/${food?._id}`, updatedFood).then((data) => {
      if (data.data.modifiedCount) {
        Swal.fire("Success!", "Food updated successfully!", "success");
      }
    });
  };

  return (
    <div className="max-w-md mx-auto p-5 bg-white shadow">
      <h2 className="text-xl font-bold mb-4">Update Food</h2>

      <form onSubmit={handleUpdate}>
        <input
          defaultValue={food.foodName}
          name="foodName"
          className="input input-bordered w-full mb-2"
        />
        <input
          defaultValue={food.foodQuantity}
          name="foodQuantity"
          className="input input-bordered w-full mb-2"
        />
        <input
          defaultValue={food.pickupLocation}
          name="pickupLocation"
          className="input input-bordered w-full mb-2"
        />
        <input
          type="date"
          defaultValue={food.expireDate}
          name="expireDate"
          className="input input-bordered w-full mb-2"
        />
        <textarea
          defaultValue={food.notes}
          name="notes"
          className="textarea textarea-bordered w-full mb-2"
        ></textarea>

        <button className="btn btn-primary w-full">Update Food</button>
      </form>
    </div>
  );
};

export default UpdateFood;
