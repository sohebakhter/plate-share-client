import { Link } from "react-router";

import logo from "../assets/logo.png";

import styled from "styled-components";

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
          <StyledWrapper>
            <div className="card bg-green-600">
              <ul>
                <li className="iso-pro">
                  <span />
                  <span />
                  <span />
                  <Link to="https://www.facebook.com" target="_blank">
                    <svg
                      viewBox="0 0 320 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                  </Link>
                  <div className="text">Facebook</div>
                </li>
                <li className="iso-pro">
                  <span />
                  <span />
                  <span />
                  <Link to="https://x.com" target="_blank">
                    <svg
                      width="24"
                      height="24"
                      className="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 28 28"
                      fill="currentColor"
                    >
                      <path d="M2 2h5.396l6.158 8.288L20.604 2H26l-9.209 12.403L26 26h-5.396l-6.158-8.288L7.396 26H2l9.209-12.403L2 2z" />
                    </svg>
                  </Link>
                  <div className="text">X/Twitter</div>
                </li>
                <li className="iso-pro">
                  <span />
                  <span />
                  <span />
                  <Link to="https://www.instagram.com" target="_blank">
                    <svg
                      className="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </Link>
                  <div className="text">Instagram</div>
                </li>
              </ul>
            </div>
          </StyledWrapper>
        </nav>
      </footer>
    </div>
  );
};
const StyledWrapper = styled.div`
  .card {
    max-width: fit-content;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 1rem;
    backdrop-filter: blur(15px);
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.192),
      inset 0 0 5px rgba(255, 255, 255, 0.274), 0 5px 5px rgba(0, 0, 0, 0.164);
    transition: 0.5s;
  }

  .card:hover {
    animation: ease-out 5s;
    background: rgba(173, 173, 173, 0.05);
  }

  .card ul {
    padding: 0.5rem;
    display: flex;
    list-style: none;
    gap: 0.2rem;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .card ul li {
    cursor: pointer;
  }

  .svg {
    transition: all 0.3s;
    /* if you find some problems change w - h : 30px*/
    padding: 1rem;
    height: 60px;
    width: 60px;
    border-radius: 100%;
    color: rgb(255, 174, 0);
    fill: currentColor;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
      inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.164);
  }

  .text {
    opacity: 0;
    border-radius: 5px;
    padding: 5px;
    transition: all 0.3s;
    color: rgb(255, 174, 0);
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    z-index: 9999;
    box-shadow: -5px 0 1px rgba(153, 153, 153, 0.2),
      -10px 0 1px rgba(153, 153, 153, 0.2),
      inset 0 0 20px rgba(255, 255, 255, 0.3),
      inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.082);
  }

  /*isometric prooyection*/
  .iso-pro {
    transition: 0.5s;
  }
  .iso-pro:hover a > .svg {
    transform: translate(15px, -15px);
    border-radius: 100%;
  }

  .iso-pro:hover .text {
    opacity: 1;
    transform: translate(25px, -2px) skew(-5deg);
  }

  .iso-pro:hover .svg {
    transform: translate(5px, -5px);
  }

  .iso-pro span {
    opacity: 0;
    position: absolute;
    color: #1877f2;
    border-color: #1877f2;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
      inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.164);
    border-radius: 50%;
    transition: all 0.3s;
    height: 60px;
    width: 60px;
  }

  .iso-pro:hover span {
    opacity: 1;
  }

  .iso-pro:hover span:nth-child(1) {
    opacity: 0.2;
  }

  .iso-pro:hover span:nth-child(2) {
    opacity: 0.4;
    transform: translate(5px, -5px);
  }

  .iso-pro:hover span:nth-child(3) {
    opacity: 0.6;
    transform: translate(10px, -10px);
  }
`;

export default Footer;
