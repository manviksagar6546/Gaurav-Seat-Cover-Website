import "./Gallery.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import gallery1 from "../../assets/images/g1.jpg";
import gallery2 from "../../assets/images/g2.jpg";
import gallery3 from "../../assets/images/g3.jpg";
import gallery4 from "../../assets/images/g4.jpg";
import gallery5 from "../../assets/images/g5.jpg";
import gallery6 from "../../assets/images/g6.jpg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

const Gallery = () => {
  return (
    <section className="gallery">

      <div className="gallery-heading">
        <h5>OUR GALLERY</h5>

        <h2>Our Recent Work</h2>

        <p>
          Take a look at some of our premium seat covers, steering covers,
          floor mats, and customized car interior installations.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={25}
        slidesPerView={3}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="gallery-card">
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Gallery;