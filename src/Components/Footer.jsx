import { Link } from "react-router";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" text-green-600 py-8 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Name */}
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <img
            src={logo}
            alt="FoodShare Logo"
            className="w-12 h-12 rounded-full border"
          />
          <h2 className="text-2xl font-bold">PlateShare</h2>
        </div>

        {/* Copyright */}
        <div className="text-green-600 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} PlateShare — All Rights Reserved
        </div>

        {/* Social Links */}
        <div className="flex gap-5 text-xl">
          <Link
            to="https://facebook.com"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <FaFacebook />
          </Link>
          <Link
            to="https://instagram.com"
            target="_blank"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </Link>
          <Link
            to="https://twitter.com"
            target="_blank"
            className="hover:text-black transition"
          >
            <FaXTwitter />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
