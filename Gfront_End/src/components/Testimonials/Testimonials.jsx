import "./Testimonials.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Delhi",
    review:
      "Excellent seat cover quality and perfect fitting. My car looks premium now.",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Amit Verma",
    location: "Noida",
    review:
      "Very professional service. Delivery was quick and the product quality exceeded my expectations.",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Neha Singh",
    location: "Ghaziabad",
    review:
      "Loved the leather seat covers. Highly recommended for anyone looking for premium accessories.",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Rohit Kumar",
    location: "Meerut",
    review:
      "Reasonable pricing with excellent finishing. Definitely buying again.",
    image: "https://i.pravatar.cc/150?img=15",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">

      <div className="heading">
        <h5>TESTIMONIALS</h5>
        <h2>What Our Customers Say</h2>
        <p>
          Customer satisfaction is our biggest achievement.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>

            <div className="testimonial-card">

              <img src={item.image} alt={item.name} />

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p>"{item.review}"</p>

              <h3>{item.name}</h3>

              <span>{item.location}</span>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Testimonials;