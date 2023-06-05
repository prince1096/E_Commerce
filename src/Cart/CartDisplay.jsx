import React, { useContext } from "react";

import "react-toastify/dist/ReactToastify.css";
import { HiOutlineHeart } from "react-icons/hi";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";

import "./Cart.css";
import { ProductContext } from "../ProductProvider/ProductProvider";

const CartDisplay = ({ product, updatedQtyFromCart }) => {
  const {
    state,
    removeFromCartHandler,
    addToWishListHandler,
    removeFromWishListHandler,
  } = useContext(ProductContext);

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
            Quantity :{" "}
            <button
              className="minus_quantity_button"
              onClick={() => updatedQtyFromCart(product, "decrement")}
              disabled={product.qty < 2}
            >
              {" "}
              <AiFillMinusCircle />{" "}
            </button>{" "}
            <span> {product?.qty} </span>{" "}
            <button
              className="plus_quantity_button"
              onClick={() => updatedQtyFromCart(product, "increment")}
            >
              <AiFillPlusCircle />
            </button>
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
