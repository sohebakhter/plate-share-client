import React, { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";

const MyFoodRequests = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [myReq, setMyReq] = useState([]);
  console.log("amar req er data", myReq);

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/my-requests?email=${user?.email}`).then((data) => {
        setMyReq(data.data);
      });
    }
  }, [axiosSecure, user?.email]);

  return (
    <div className="min-h-screen ">
      <h1 className="text-center text-green-600 font-bold text-4xl mt-5">
        My Food Requests
      </h1>
      <div className="overflow-x-auto max-w-7xl mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>My Email</th>
              <th>Food Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myReq.map((req, index) => (
              <tr key={req._d}>
                <th>{index + 1}</th>
                <td>{req.userEmail}</td>
                <td>{req.foodName}</td>
                <td>{req.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyFoodRequests;
