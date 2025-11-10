import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const ManageMyFoods = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/foods?email=${user.email}`).then((data) => {
      // console.log(data.data);
      setFoods(data.data);
    });
  }, [axiosSecure, user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This food will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/foods/${id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your food has been deleted.", "success");
            setFoods(foods.filter((food) => food._id !== id));
          }
        });
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-5">Manage My Foods</h2>

      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th>Food</th>
              <th>Quantity</th>
              <th>Location</th>
              <th>Expire Date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {foods.map((food) => (
              <tr key={food._id}>
                <td>{food.foodName}</td>
                <td>{food.foodQuantity}</td>
                <td>{food.pickupLocation}</td>
                <td>{food.expireDate}</td>

                <td>
                  <Link
                    to={`/update-food/${food._id}`}
                    className="btn btn-sm btn-warning"
                  >
                    Update
                  </Link>
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(food._id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMyFoods;
