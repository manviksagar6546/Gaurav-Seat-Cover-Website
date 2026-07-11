import "./ProductCard.scss";

const ProductCard = ({ image, title, category }) => {
  return (
    <div className="product-card">

      <div className="product-image">
        <img src={image} alt={title} />
      </div>

      <div className="product-content">

        <span>{category}</span>

        <h3>{title}</h3>

        <div className="buttons">

          <button className="details-btn">
            View Details
          </button>

          <button className="whatsapp-btn">
            WhatsApp
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;