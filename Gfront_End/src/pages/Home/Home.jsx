import AboutPreview from "../../components/AboutPreview/AboutPreview";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Hero from "../../components/Hero/Hero";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Gallery from "../../components/Gallery/Gallery";
import Testimonials from "../../components/Testimonials/Testimonials";
import CTA from "../../components/CTA/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedProducts />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
