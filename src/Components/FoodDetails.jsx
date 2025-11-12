import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Loading from "./Loading";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);

  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const showModalRef = useRef(null);
  const [requests, setRequests] = useState([]);

  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If not logged in, redirect to login
    if (!user) {
      navigate("/login");
      return;
    }
    axiosSecure.get(`/food/${id}`).then((data) => {
      setFood(data.data);
      setLoading(false);
    });
  }, [id, user, navigate, axiosSecure]);
  ///////////////////////
  useEffect(() => {
    if (!food?._id || !user?.email) return;

    axiosSecure
      .get(`/food-requests/${food?._id}?email=${user.email}`)
      .then((data) => setRequests(data.data));
  }, [food?._id, user?.email, axiosSecure]);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!loading && !food) {
    return (
      <div className="text-center text-xl font-bold text-red-500 mt-20">
        Food Not Found!
      </div>
    );
  }

  const handleModalOn = () => {
    showModalRef.current.showModal();
  };

  const handleModalOff = () => {
    showModalRef.current.close();
  };

  const handleRequestFood = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const reason = e.target.reason.value;
    const contact = e.target.contact.value;

    const requestData = {
      foodId: food._id,
      foodName: food.foodName,
      userEmail: user.email,
      userName: user.displayName,
      userPhoto: user.photoURL,
      location,
      reason,
      contact,
      status: "pending",
      createdAt: new Date(),
    };
    axiosSecure.post("/foodRequests", requestData).then((data) => {
      console.log(data.data);
      e.target.reset();
      showModalRef.current.close();
    });
  };

  //handle accept-----------
  const handleAccept = async (req) => {
    await axiosSecure.patch(`/food-requests/accept/${req._id}`, {
      foodId: food._id,
    });

    // updating UI
    setRequests((prev) =>
      prev.map((result) =>
        result._id === req._id ? { ...result, status: "accepted" } : result
      )
    );

    // updating food status in UI
    setFood((prev) => ({ ...prev, food_status: "Donated" }));
  };

  //handle reject ----------------
  const handleReject = async (req) => {
    await axiosSecure.patch(`/food-requests/reject/${req._id}`);

    setRequests((prev) =>
      prev.map((result) =>
        result._id === req._id ? { ...result, status: "rejected" } : result
      )
    );
  };

  return (
    <div>
      {/* food details */}
      <div className="max-w-4xl mx-auto p-5 md:p-10">
        <div className="bg-white rounded-lg shadow-lg p-6 border">
          <img
            src={food.foodImage}
            alt={food.foodName}
            className="w-full h-80 object-cover rounded-lg mb-6"
          />

          <h2 className="text-3xl font-bold mb-2 text-green-700">
            {food.foodName}
          </h2>

          <div className="flex items-center gap-3 mb-4">
            <img
              src={food.donorImage}
              className="w-10 h-10 rounded-full border object-cover"
              alt="donor"
            />
            <div>
              <p className="font-semibold">{food.donorName}</p>
              <p className="text-sm text-gray-500">{food.donorEmail}</p>
            </div>
          </div>

          <p>
            <span className="font-semibold">Quantity:</span> {food.foodQuantity}
          </p>
          <p>
            <span className="font-semibold">Pickup Location:</span>{" "}
            {food.pickupLocation}
          </p>
          <p>
            <span className="font-semibold">Expires:</span> {food.expireDate}
          </p>

          <p className="font-semibold mt-4">Additional Notes:</p>
          <p className="text-gray-700 mb-6">{food.notes}</p>

          <button
            onClick={handleModalOn}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold w-full md:w-auto"
          >
            Request Food
          </button>
        </div>
      </div>
      {/* modal part for request food */}
      <dialog ref={showModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Food Request</h3>
          <p className="py-4">Describe your food request in details</p>
          <div className="modal-action">
            <div method="dialog">
              <form onSubmit={handleRequestFood} className="space-y-3">
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="w-full border p-2 rounded"
                  required
                />
                <textarea
                  name="reason"
                  placeholder="Why Need Food"
                  className="w-full border p-2 rounded"
                  required
                />
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact No."
                  className="w-full border p-2 rounded"
                  required
                />
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
              <button onClick={handleModalOff} className="btn">
                Close
              </button>
            </div>
          </div>
        </div>
      </dialog>
      {/* -------------------------------- */}
      {user?.email === food.donorEmail && (
        <div className="overflow-x-auto">
          {requests.length === 0 ? (
            <p className="font-bold text-xl">No Requests Found</p>
          ) : (
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Serial no.</th>
                  <th>Requester</th>
                  <th>Location & Reason</th>
                  <th>Contact No.</th>
                  <th>Status</th>
                  <th>accept</th>
                  <th>reject</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {requests.map((req, index) => (
                  <tr key={req._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={req.userPhoto}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{req.userName}</div>
                          <div className="text-sm opacity-50">
                            {req.userEmail}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {req.location}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {req.reason}
                      </span>
                    </td>
                    <td>{req.contact}</td>
                    <td className="font-bold text-blue-600">{req.status}</td>
                    <th>
                      <button
                        onClick={() => handleAccept(req)}
                        disabled={req.status !== "pending"}
                        className="btn btn-outline btn-success"
                      >
                        Accept
                      </button>
                    </th>

                    <th>
                      <button
                        onClick={() => handleReject(req)}
                        disabled={req.status !== "pending"}
                        className="btn btn-outline btn-error"
                      >
                        Reject
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default FoodDetails;
