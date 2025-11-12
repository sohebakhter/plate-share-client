import { Link } from "react-router";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";
import { FaXTwitter } from "react-icons/fa6";

{
  /* Logo & Name */
}
// <div className="flex items-center gap-3 mb-4 md:mb-0">
//   <img
//     src={logo}
//     alt="FoodShare Logo"
//     className="w-12 h-12 rounded-full border"
//   />
//   <h2 className="text-2xl font-bold">PlateShare</h2>
// </div>
// {/* Social Links */}
// <div className="flex gap-5 text-xl">
//   <Link
//     to="https://facebook.com"
//     target="_blank"
//     className="hover:text-blue-400 transition"
//   >
//     <FaFacebook />
//   </Link>
//   <Link
//     to="https://instagram.com"
//     target="_blank"
//     className="hover:text-pink-400 transition"
//   >
//     <FaInstagram />
//   </Link>
//   <Link
//     to="https://twitter.com"
//     target="_blank"
//     className="hover:text-black transition"
//   >
//     <FaXTwitter />
//   </Link>
// </div>
const Footer = () => {
  return (
    <div className="bg-white">
      <footer className="footer sm:footer-horizontal  text-base-content p-10 max-w-7xl mx-auto">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer text-base-content border-base-300 border-t px-10 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <aside className="grid-flow-col items-center">
          <img className="w-12" src={logo} alt="" />

          <p>
            <span className="text-3xl font-bold text-green-600">
              PlateShare
            </span>
            <br />
            Providing reliable donation since 1992
          </p>
        </aside>
        <p>© 2025 All Rights Reserved. Terms of Use and Privacy Policy</p>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4 ">
            <Link to="https://x.com" target="_blank">
              <FaXTwitter />
            </Link>
            <Link to="https://www.instagram.com" target="_blank">
              <FaInstagram />
            </Link>
            <Link to="https://www.facebook.com" target="_blank">
              <FaFacebook />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
