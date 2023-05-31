// import { addItemToCartHandler } from "../backend/controllers/CartController";
import { useContext, useState } from "react";
import "./ProductDisplay.css";
import { AuthContext } from "../Auth/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../ProductProvider/ProductProvider";
import { HiOutlineHeart } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDisplay = ({ product }) => {
  const [cartBtnDisable, setCartBtnDisable] = useState(false);

  const {
    state,
    // addToCartHandler,
    addToWishListHandler,
    removeFromWishListHandler,
  } = useContext(ProductContext);
  const token = localStorage.getItem("token");
  // console.log(tokens);

  const navigate = useNavigate();

  const tilteLength = (str) => {
    return str?.length > 15 ? str.slice(0, 14) + "..." : str;
  };

  // console.log(state?.cartBox.includes(product));

  const cartBoxItem = state?.cartBox?.find(
    (item) => item?._id === product?._id
  );

  const wishlistBoxItem = state?.wishlistBox?.find(
    (item) => item?._id === product?._id
  );

  // console.log(cartBoxItem);
  // console.log(state?.cartBox.includes(product));

  const addToCartHandler = async (product) => {
    setCartBtnDisable(true);

    try {
      const response = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: JSON.stringify({ product }),
      });

      toast.success("Item added to cart", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      const data = await response.json();
      console.log(data, "cart");

      // dispatch({ type: "CART_ADDED", payload: data?.cart });
    } catch (error) {
      // console.log(2);
      console.log(error);
    }
  };

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

          <h3> {tilteLength(product?.title)}</h3>
          <span className="product_span">${product?.price}</span>

          {product?.trending && (
            <div className="image_looks image_looks_trending">Trending</div>
          )}
        </Link>

        {wishlistBoxItem ? (
          <button
            onClick={() => removeFromWishListHandler(product)}
            className="image_looks image_looks_wishlist"
          >
            <HiOutlineHeart className="nav_logo_product wishlist_heart" />
          </button>
        ) : (
          <button
            onClick={() => addToWishListHandler(product)}
            className="image_looks image_looks_wishlist"
          >
            <HiOutlineHeart className="nav_logo_product" />
          </button>
        )}

        {cartBoxItem ? (
          <button
            className="cart_button cart_button_added"
            onClick={() => navigate("/cart")}
          >
            Go To Cart
          </button>
        ) : (
          <button
            disabled={cartBtnDisable}
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
