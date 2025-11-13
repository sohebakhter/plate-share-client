import { useEffect, useState } from "react";

import useAxiosSecure from "../Hooks/useAxiosSecure";
import FoodCard from "./FoodCard";
import Loading from "./Loading";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("/foods?status=Available")

      .then((data) => {
        console.log(data.data);
        setFoods(data.data);
        setLoading(false);
      });
  }, [axiosSecure]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div
      className="h-auto bg-cover bg-center items-center justify-center"
      style={{ backgroundImage: "url('/SimpleShiny.svg')" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Available Foods
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food) => (
            <FoodCard key={food._id} food={food} id={food._id}></FoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;
