// import { addItemToCartHandler } from "../backend/controllers/CartController";
import { useContext } from "react";
import "./WishlistDisplay.css";
import { AuthContext } from "../Auth/AuthProvider";
import { Link } from "react-router-dom";
import { ProductContext } from "../ProductProvider/ProductProvider";
import { HiOutlineHeart } from "react-icons/hi";

const WishlistDisplay = ({ product }) => {
  const { state, dispatch, addToCartHandler, removeFromWishListHandler } =
    useContext(ProductContext);
  const token = localStorage.getItem("token");
  // console.log(tokens);

  const tilteLength = (str) => {
    return str?.length > 15 ? str.slice(0, 14) + "..." : str;
  };

  return (
    <div>
      <div className="productdisplay_container">
        <Link
          to={`/individualproduct/${product.id}`}
          className="product_link_individual"
        >
          <img
            src={product?.thumbnail}
            alt=""
            style={{ width: "100%", height: "200px" }}
          />

          <h3> {tilteLength(product?.title)}</h3>
          <span className="product_span">${product?.price}</span>

          {product?.trending && (
            <div className="image_looks image_looks_trending">Trending</div>
          )}
        </Link>

        <button
          onClick={() => removeFromWishListHandler(product)}
          className="image_looks image_looks_wishlist"
        >
          <HiOutlineHeart className="nav_logo" />
        </button>

        <button
          className="cart_button"
          onClick={() => addToCartHandler(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default WishlistDisplay;
