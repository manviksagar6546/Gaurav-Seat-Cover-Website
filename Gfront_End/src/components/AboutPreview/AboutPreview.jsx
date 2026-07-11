import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./AboutPreview.scss";
import aboutImage from "../../assets/images/about.jpg";

const AboutPreview = () => {
  return (
    <section className="about-preview">
      <div className="container">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={aboutImage} alt="Gaurav Seat Cover" />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span>About Us</span>

          <h2>Premium Car Seat Covers & Accessories</h2>

          <p>
            Gaurav Seat Cover specializes in manufacturing and supplying
            premium-quality car seat covers, steering covers, floor mats,
            cushions, and automotive accessories. Our goal is to deliver
            comfort, durability, and style for every vehicle.
          </p>

          <ul>
            <li>✔ Premium Quality Materials</li>
            <li>✔ Custom Fit Designs</li>
            <li>✔ Wide Range of Products</li>
            <li>✔ Trusted by Hundreds of Customers</li>
          </ul>

          <Link to="/about" className="about-btn">
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
