import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoute from "../Context/PrivateRoute";
import AddFood from "../Components/AddFood";
import AvailableFoods from "../Components/AvailableFoods";
import FoodDetails from "../Components/FoodDetails";
import ManageMyFoods from "../Components/ManageMyFoods";
import UpdateFood from "../Components/UpdateFood";
import Loading from "../Components/Loading";
import Error404 from "../Components/Error404";
import MyFoodRequests from "../Components/MyFoodRequests";
import Dashboard from "../Dashboard/Dashboard";
import DashboardLayout from "../Layouts/DashboardLayout";
import Profile from "../Dashboard/Profile";
import AboutUs from "../Components/AboutUs";
import ContactUs from "../Components/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    hydrateFallbackElement: <Loading></Loading>,
    errorElement: <Error404></Error404>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/foods",
        Component: AvailableFoods,
      },
      {
        path: "/food/:id",
        Component: FoodDetails,
      },
      {
        path: "/about",
        Component: AboutUs,
      },
      {
        path: "/contact",
        Component: ContactUs,
      },
    ],
  },
  {
    path: "dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, element: <Dashboard></Dashboard> },
      {
        path: "add-food",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-foods",
        element: (
          <PrivateRoute>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "update-food/:id",
        element: (
          <PrivateRoute>
            <UpdateFood></UpdateFood>
          </PrivateRoute>
        ),
      },
      {
        path: "my-requests",
        element: (
          <PrivateRoute>
            <MyFoodRequests></MyFoodRequests>
          </PrivateRoute>
        ),
      },
      { path: "profile", element: <Profile></Profile> },
    ],
  },
]);
