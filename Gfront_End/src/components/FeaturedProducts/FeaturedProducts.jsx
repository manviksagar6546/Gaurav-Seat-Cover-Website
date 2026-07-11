import "./FeaturedProducts.scss";

import ProductCard from "../ProductCard/ProductCard";

import seat from "../../assets/images/seatcover.jpg";
import steering from "../../assets/images/steeringcover.jpg";
import mat from "../../assets/images/floormat.jpg";
import cushion from "../../assets/images/carcushion.jpg";

const FeaturedProducts = () => {

    const products = [

        {
            image: seat,
            title: "Premium Seat Covers",
            category: "Seat Covers"
        },

        {
            image: steering,
            title: "Steering Covers",
            category: "Accessories"
        },

        {
            image: mat,
            title: "Car Floor Mats",
            category: "Floor Mats"
        },

        {
            image: cushion,
            title: "Comfort Cushions",
            category: "Cushions"
        }

    ];

    return (

        <section className="featured">

            <h5>OUR PRODUCTS</h5>

            <h2>Featured Products</h2>

            <p>
                Explore our premium automotive accessories designed for
                comfort, durability, and style.
            </p>

            <div className="product-grid">

                {
                    products.map((product, index) => (

                        <ProductCard
                            key={index}
                            image={product.image}
                            title={product.title}
                            category={product.category}
                        />

                    ))
                }

            </div>

        </section>

    );

};

export default FeaturedProducts;