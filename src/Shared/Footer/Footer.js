import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo/logobd.png";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="pt-5 pb-5 ps-5 footer-container bg-dark">
      <div className=" logo-text d-flex justify-content-around">
        <div>
          <img style={{ height: "80px" }} src={logo} alt="" />
        </div>
        <div className="d-flex justify-content-center">
          <div className="footer-text ">
            <Link to="/about" className="text-decoration-none">
              <p>About BD Tour Guide</p>
            </Link>

            <Link to="/blogs" className="text-decoration-none">
              <p>Read Our BD Tour Blog</p>
            </Link>
            <Link to="/signup" className="text-decoration-none">
              <p>Sign up to Visit Site & enjoy</p>
            </Link>
          </div>
          {/* <div className="copyright ">
            <p>Get Help</p>
            <p>Read FAQs</p>
          </div> */}
        </div>
      </div>

      <div className="copy-right mt-5 d-flex justify-content-around">
        <div>
          <p>
            <small className="copy">Copyright @ {year} BD Tour Guide</small>
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <p>
            <small className="me-5">Privacy Policy</small>
          </p>
          <p>
            <small>Terms of Use</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
