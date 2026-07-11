import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Premium Car Seat Covers & Accessories
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Enhance your driving experience with premium seat covers, floor mats,
          steering covers, cushions, and high-quality automotive accessories.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link to="/products" className="btn primary">
            Explore Products
          </Link>

          <Link to="/contact" className="btn secondary">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
