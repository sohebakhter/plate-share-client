import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <div className="bg-gray-100">
      <div className="min-h-screen flex flex-col">
        <Navbar></Navbar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayout;
