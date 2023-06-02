import React, { useContext } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiOutlineHeart } from "react-icons/hi";

import "./Cart.css";
import { ProductContext } from "../ProductProvider/ProductProvider";

const CartDisplay = ({ product }) => {
  const {
    state,
    removeFromCartHandler,
    addToWishListHandler,
    removeFromWishListHandler,
  } = useContext(ProductContext);

  // const token = localStorage.getItem("token");

  const wishlistBoxItem = state?.wishlistBox?.find(
    (item) => item?._id === product?._id
  );

  return (
    <div>
      <div className="cart_grid_container">
        <div className="cart_image_container">
          <div className="cart_image_div">
            <img className="cart_image_div" src={product?.thumbnail} alt="" />
          </div>

          <div className="cart_wishlist_container">
            {/* <button>Heart</button> */}

            {wishlistBoxItem ? (
              <button
                disabled={state?.wishListBtnDisable}
                onClick={() => removeFromWishListHandler(product)}
                className="image_looks image_looks_wishlist"
              >
                <HiOutlineHeart className="nav_logo_product wishlist_heart" />
              </button>
            ) : (
              <button
                disabled={state?.wishListBtnDisable}
                onClick={() => addToWishListHandler(product)}
                className="image_looks image_looks_wishlist"
              >
                <HiOutlineHeart className="nav_logo_product" />
              </button>
            )}
          </div>
        </div>

        <div className="cart_product_container">
          <div className="cart_name_container">{product?.title}</div>
          <div className="cart_price_container">
            <span className="cart_disprice_container">${product?.price}</span>
            <span className="cart_mainprice_container">${product?.MRP}</span>
          </div>

          <div className="cart_discount_container">
            {Math.trunc(product?.discountPercentage)}%OFF
          </div>

          <div className="cart_quantity_container">
            Quantity : <button className="minus_quantity_button">_</button>{" "}
            <span> 1 </span> <button className="plus_quantity_button">+</button>
          </div>

          <button
            disabled={state?.cartBtnDisable}
            className="cart_remove_button"
            onClick={() => removeFromCartHandler(product)}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDisplay;
