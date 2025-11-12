import React, { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import FoodCard from "./FoodCard";
import Loading from "./Loading";
import { Link } from "react-router";

const FeaturedFoods = () => {
  const axiosSecure = useAxiosSecure();
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get("/featured-foods").then((data) => {
      console.log(data.data);
      setFoods(data.data);
      setLoading(false);
    });
  }, [axiosSecure]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-gray-200 p-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-green-600 font-bold mb-5">Featured Foods</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food) => (
            <FoodCard key={food._id} food={food}></FoodCard>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/foods"
            className="btn mt-3 w-30 text-white bg-green-600 hover:bg-green-700"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFoods;
