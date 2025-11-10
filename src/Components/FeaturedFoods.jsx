import React, { useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import FoodCard from "./FoodCard";

const FeaturedFoods = () => {
  const axiosSecure = useAxiosSecure();
  const [foods, setFoods] = useState([]);

  axiosSecure.get("/featured-foods").then((data) => {
    console.log(data.data);
    setFoods(data.data);
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {foods.map((food) => (
        <FoodCard food={food}></FoodCard>
      ))}
    </div>
  );
};

export default FeaturedFoods;
