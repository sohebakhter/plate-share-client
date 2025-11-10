import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateFood = () => {
  const food = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedFood = {
      food_name: form.foodName.value,
      food_quantity: form.foodQuantity.value,
      pickup_location: form.pickupLocation.value,
      expire_date: form.expireDate.value,
      notes: form.notes.value,
    };

    fetch(`/foods/${food._id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updatedFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
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
