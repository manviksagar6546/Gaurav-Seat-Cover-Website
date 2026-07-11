import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <span>Gaurav</span> Seat Cover
        </Link>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li className="dropdown">
            <span className="product-menu">
              Products
              <MdKeyboardArrowDown className="dropdown-icon" />
            </span>

            <ul className="dropdown-menu">
              <li>
                <Link to="/products?category=seat-cover">Seat Covers</Link>
              </li>

              <li>
                <Link to="/products?category=steering-cover">
                  Steering Covers
                </Link>
              </li>

              <li>
                <Link to="/products?category=floor-mat">Floor Mats</Link>
              </li>

              <li>
                <Link to="/products?category=cushions">Car Cushions</Link>
              </li>

              <li>
                <Link to="/products?category=accessories">Accessories</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/payment">Payment</Link>
          </li>
        </ul>
      </nav>

      <Link to="/contact" className="contact-btn">
        <FaPhoneAlt />
        Contact Us
      </Link>
    </header>
  );
};

export default Navbar;
