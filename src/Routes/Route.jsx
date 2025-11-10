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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
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
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/food/:id",
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5173/food/${params.id}`),
      },
      {
        path: "/manage-foods",
        element: (
          <PrivateRoute>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-food/:id",
        element: (
          <PrivateRoute>
            <UpdateFood></UpdateFood>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5173/update-food/${params.id}`),
      },
    ],
  },
]);
