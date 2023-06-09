// import { addItemToCartHandler } from "../backend/controllers/CartController";
import { useContext } from "react";
import "./WishlistDisplay.css";
import { AuthContext } from "../Auth/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../ProductProvider/ProductProvider";
import { HiOutlineHeart } from "react-icons/hi";

const WishlistDisplay = ({ product }) => {
  const { state, dispatch, addToCartHandler, removeFromWishListHandler } =
    useContext(ProductContext);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  // console.log(tokens);

  const tilteLength = (str) => {
    return str?.length > 15 ? str.slice(0, 14) + "..." : str;
  };

  const cartBoxItem = state?.cartBox?.find(
    (item) => item?._id === product?._id
  );

  return (
    <div>
      <div className="productdisplay_container">
        <Link
          to={`/individualproduct/${product._id}`}
          className="product_link_individual"
        >
          <img
            src={product?.thumbnail}
            alt=""
            style={{ width: "100%", height: "200px" }}
          />

          <h3 className="title_wishlist"> {tilteLength(product?.title)}</h3>
          <span className="product_span title_wishlist">${product?.price}</span>

          {product?.trending && (
            <div className="image_looks image_looks_trending">Trending</div>
          )}
        </Link>

        <button
          disabled={state?.wishListBtnDisable}
          onClick={() => removeFromWishListHandler(product)}
          className="image_looks image_looks_wishlist"
        >
          <HiOutlineHeart className="nav_logo_wishlist" />
        </button>

        {/* <button
          disabled={state?.cartBtnDisable}
          className="cart_button"
          onClick={() => addToCartHandler(product)}
        >
          Add to Cart
        </button> */}

        {cartBoxItem ? (
          <button
            className="individual_gotocart_wish"
            onClick={() => navigate("/cart")}
          >
            Go To Cart
          </button>
        ) : product?.in_stock ? (
          <button
            disabled={state?.cartBtnDisable}
            className="individual_addtocart_wish "
            onClick={() => addToCartHandler(product)}
          >
            Add to Cart
          </button>
        ) : (
          <button className="cart_outstock_btn" disabled={true}>
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );
};

export default WishlistDisplay;
