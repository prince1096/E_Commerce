// import { addItemToCartHandler } from "../backend/controllers/CartController";
import { useContext } from "react";
import "./ProductDisplay.css";
import { AuthContext } from "../Auth/AuthProvider";

const ProductDisplay = ({ product }) => {
  const { token } = useContext(AuthContext);

  const tilteLength = (str) => {
    return str.length > 15 ? str.slice(0, 14) + "..." : str;
  };

  const addToCartHandler = async (product) => {
    try {
      const response = await fetch("/api/user/cart", {
        method: "POST",
        authorization: token,
        body: JSON.stringify(product),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="productdisplay_container">
      <img
        src={product?.thumbnail}
        alt=""
        style={{ width: "100%", height: "200px" }}
      />

      <h3> {tilteLength(product?.title)}</h3>
      <span className="product_span">${product?.price}</span>

      <div className="image_looks image_looks_wishlist">Heart</div>

      <div className="image_looks image_looks_trending">Trending</div>

      <button className="cart_button" onClick={() => addToCartHandler(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDisplay;
