import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const { user } = useAuth();
  console.log(user);
  const axiosSecure = useAxiosSecure();
  const [stats, setStats] = useState({
    totalFoods: 0,
    availableFoods: 0,
    requestedFoods: 0,
    totalUsers: 0,
  });
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all foods
        const foodsRes = await axiosSecure.get("/foods");
        const allFoods = foodsRes.data;
        setFoods(allFoods);

        // Calculate stats
        const availableFoods = allFoods.filter(
          (food) => food.food_status === "Available"
        ).length;
        const requestedFoods = allFoods.filter(
          (food) => food.food_status === "Requested"
        ).length;

        setStats({
          totalFoods: allFoods.length,
          availableFoods,
          requestedFoods,
          totalUsers: 0, // Would need a users endpoint
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [axiosSecure]);

  // Prepare chart data
  const statusData = [
    { name: "Available", value: stats.availableFoods, color: "#10B981" },
    { name: "Requested", value: stats.requestedFoods, color: "#F59E0B" },
  ];

  const quantityData = foods.slice(0, 10).map((food) => ({
    name: food.foodName.substring(0, 15) + "...",
    quantity: food.foodQuantity,
  }));

  const locationData = foods.reduce((acc, food) => {
    const location = food.pickupLocation || "Unknown";
    acc[location] = (acc[location] || 0) + 1;
    return acc;
  }, {});

  const locationChartData = Object.entries(locationData)
    .slice(0, 5)
    .map(([location, count]) => ({ location, count }));

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-full">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Foods</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalFoods}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-full">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Available Foods
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.availableFoods}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-full">
              <svg
                className="w-6 h-6 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Requested Foods
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.requestedFoods}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-full">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalUsers}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Pie Chart - Food Status */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Food Status Distribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart - Food Quantities */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Top Food Quantities</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={quantityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="quantity" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart - Location Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Foods by Location</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={locationChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="location" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Additional Chart - Could be trends over time */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Food Quantity Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={quantityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="quantity"
                stroke="#ff7300"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Foods</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Food Name</th>
                <th>Quantity</th>
                <th>Location</th>
                <th>Status</th>
                <th>Donor</th>
                <th>Expires</th>
              </tr>
            </thead>
            <tbody>
              {foods.slice(0, 10).map((food) => (
                <tr key={food._id}>
                  <td className="font-medium">{food.foodName}</td>
                  <td>{food.foodQuantity} people</td>
                  <td>{food.pickupLocation}</td>
                  <td>
                    <span
                      className={`badge ${
                        food.food_status === "Available"
                          ? "badge-success"
                          : "badge-warning"
                      }`}
                    >
                      {food.food_status}
                    </span>
                  </td>
                  <td>{food.donorName}</td>
                  <td>{new Date(food.expireDate).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
