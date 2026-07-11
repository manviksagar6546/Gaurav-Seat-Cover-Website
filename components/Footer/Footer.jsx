import "./Footer.scss";

import { Link } from "react-router-dom";

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-box">

          <h2>Gaurav Seat Cover</h2>

          <p>
            Premium manufacturer and supplier of car seat covers,
            steering covers, floor mats, cushions and automotive
            accessories.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>

            <li><Link to="/">Home</Link></li>

            <li><Link to="/about">About</Link></li>

            <li><Link to="/products">Products</Link></li>

            <li><Link to="/contact">Contact</Link></li>

            <li><Link to="/payment">Payment</Link></li>

          </ul>

        </div>

        {/* Products */}

        <div className="footer-box">

          <h3>Products</h3>

          <ul>

            <li>Seat Covers</li>

            <li>Steering Covers</li>

            <li>Floor Mats</li>

            <li>Car Cushions</li>

            <li>Accessories</li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-box">

          <h3>Contact</h3>

          <ul>

            <li>
              <FaPhoneAlt />
              +91 XXXXX XXXXX
            </li>

            <li>
              <FaWhatsapp />
              WhatsApp
            </li>

            <li>
              <FaEnvelope />
              info@gauravseatcover.com
            </li>

            <li>
              <FaMapMarkerAlt />
              Ghaziabad, Uttar Pradesh
            </li>

          </ul>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Gaurav Seat Cover. All Rights Reserved.
        </p>

        <div className="social-icons">

          <a href="#">
            <FaFacebookF />
          </a>

          <a href="#">
            <FaInstagram />
          </a>

        </div>

      </div>

      <button className="top-btn" onClick={scrollTop}>
        <FaArrowUp />
      </button>

    </footer>
  );
};

export default Footer;