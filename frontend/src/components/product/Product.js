import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, description, price, name, productId }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <div className="product-info">
        <p className="info-name">{name}</p>
        <p className="info_description">{description.substring(0, 100)}...</p>
        <p className="info-price">${price.toLocaleString()}</p>

        <Link to={`/product/${productId}`} className="info-button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
