import "./CTA.scss";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="cta">

      <div className="cta-overlay">

        <h2>Ready to Upgrade Your Car Interior?</h2>

        <p>
          Contact Gaurav Seat Cover today for premium seat covers,
          steering covers, floor mats, cushions, and other automotive
          accessories. Get expert guidance and the best prices.
        </p>

        <div className="cta-buttons">

          <a
            href="https://wa.me/+918287534009"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <FaWhatsapp />
            WhatsApp Us
          </a>

          <Link to="/contact" className="contact-btn">
            <FaPhoneAlt />
            Contact Now
          </Link>

        </div>

      </div>

    </section>
  );
};

export default CTA;