import { useEffect, useState } from "react";

import useAxiosSecure from "../Hooks/useAxiosSecure";
import FoodCard from "./FoodCard";
import Loading from "./Loading";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    minQuantity: "",
    maxQuantity: "",
    expireFrom: "",
    expireTo: "",
  });
  const [sortBy, setSortBy] = useState("foodName");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

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

  const searchedFood =
    search.trim().length > 0
      ? foods.filter((f) =>
          f.foodName.toLowerCase().includes(search.toLowerCase())
        )
      : foods;

  const filteredFoods = searchedFood.filter((food) => {
    if (
      filters.location &&
      !food.pickupLocation
        .toLowerCase()
        .includes(filters.location.toLowerCase())
    )
      return false;
    if (filters.maxQuantity && food.foodQuantity > Number(filters.maxQuantity))
      return false;

    return true;
  });

  const sortedFoods = [...filteredFoods].sort((a, b) => {
    let aVal, bVal;
    if (sortBy === "foodName") {
      aVal = a.foodName.toLowerCase();
      bVal = b.foodName.toLowerCase();
    } else if (sortBy === "foodQuantity") {
      aVal = a.foodQuantity;
      bVal = b.foodQuantity;
    } else if (sortBy === "expireDate") {
      aVal = new Date(a.expireDate);
      bVal = new Date(b.expireDate);
    }
    if (sortOrder === "asc") {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  const totalPages = Math.ceil(sortedFoods.length / itemsPerPage);
  const paginatedFoods = sortedFoods.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div
      className="h-auto bg-cover bg-center items-center justify-center"
      style={{ backgroundImage: "url('/SimpleShiny.svg')" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Available Foods
        </h2>

        <div className="flex justify-between items-center">
          {/* search here */}
          <div className="mb-2">
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                required
                placeholder="Search"
              />
            </label>
          </div>

          {/* Filters */}
          <div className="mb-4 flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Filter by Location"
              value={filters.location}
              onChange={(e) =>
                setFilters({ ...filters, location: e.target.value })
              }
              className="input"
            />

            <input
              type="number"
              placeholder="Max Quantity"
              value={filters.maxQuantity}
              onChange={(e) =>
                setFilters({ ...filters, maxQuantity: e.target.value })
              }
              className="input"
            />
          </div>

          {/* Sorting */}
          <div className="mb-4 flex gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="select"
            >
              <option value="foodName">Sort by Name</option>
              <option value="foodQuantity">Sort by Quantity</option>
              <option value="expireDate">Sort by Expire Date</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {paginatedFoods.map((food) => (
            <FoodCard key={food._id} food={food} id={food._id}></FoodCard>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`btn ${page === currentPage ? "btn-neutral" : ""}`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;
