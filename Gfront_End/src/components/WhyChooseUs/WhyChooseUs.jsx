import "./WhyChooseUs.scss";
import {
  FaAward,
  FaTools,
  FaCarSide,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward />,
    title: "Premium Quality",
    description:
      "High-quality materials designed for durability, comfort, and style.",
  },
  {
    icon: <FaTools />,
    title: "Custom Fit",
    description:
      "Seat covers and accessories designed to perfectly fit different vehicles.",
  },
  {
    icon: <FaCarSide />,
    title: "Wide Product Range",
    description:
      "Seat covers, steering covers, floor mats, cushions, and more.",
  },
  {
    icon: <FaHeadset />,
    title: "Customer Support",
    description:
      "Quick responses through WhatsApp, phone, and email.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose">

      <div className="section-title">
        <h5>WHY CHOOSE US</h5>
        <h2>Why Customers Trust Gaurav Seat Cover</h2>
        <p>
          We combine quality craftsmanship, premium materials, and excellent
          customer service to deliver products that enhance every drive.
        </p>
      </div>

      <div className="feature-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="stats">

        <div className="stat">
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat">
          <h2>500+</h2>
          <p>Products</p>
        </div>

        <div className="stat">
          <h2>5000+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat">
          <h2>24/7</h2>
          <p>Support</p>
        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;