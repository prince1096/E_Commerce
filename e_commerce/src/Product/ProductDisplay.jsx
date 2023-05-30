// import { addItemToCartHandler } from "../backend/controllers/CartController";
import { useContext } from "react";
import "./ProductDisplay.css";
import { AuthContext } from "../Auth/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../ProductProvider/ProductProvider";
import { HiOutlineHeart } from "react-icons/hi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDisplay = ({ product }) => {
  const { state, addToCartHandler, addToWishListHandler } =
    useContext(ProductContext);
  const token = localStorage.getItem("token");
  // console.log(tokens);

  const navigate = useNavigate();

  const tilteLength = (str) => {
    return str?.length > 15 ? str.slice(0, 14) + "..." : str;
  };

  // console.log(state?.cartBox.includes(product));

  const cartBoxItem = state?.cartBox.find((item) => item?.id === product?.id);

  // console.log(cartBoxItem);
  // console.log(state?.cartBox.includes(product));

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
          onClick={() => addToWishListHandler(product)}
          className="image_looks image_looks_wishlist"
        >
          <HiOutlineHeart className="nav_logo_product" />
        </button>

        {/* {state?.cartBox.includes(product) ? (
          <button
            className="cart_button cart_button_added"
            onClick={() => navigate("/cart")}
          >
            Go To Cart
          </button>
        ) : (
          <button
            className="cart_button"
            onClick={() => addToCartHandler(product)}
          >
            Add to Cart
          </button>
        )} */}

        {cartBoxItem ? (
          <button
            className="cart_button cart_button_added"
            onClick={() => navigate("/cart")}
          >
            Go To Cart
          </button>
        ) : (
          <button
            className="cart_button"
            onClick={() => addToCartHandler(product)}
          >
            Add to Cart
          </button>
        )}

        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
};

export default ProductDisplay;
