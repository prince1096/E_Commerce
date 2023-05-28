import React, { useContext } from "react";

import "./Cart.css";
import { ProductContext } from "../ProductProvider/ProductProvider";

const CartDisplay = ({ product }) => {
  const { removeFromCartHandler } = useContext(ProductContext);

  // const token = localStorage.getItem("token");

  return (
    <div>
      <div className="cart_grid_container">
        <div className="cart_image_container">
          <div className="cart_image_div">
            <img className="cart_image_div" src={product?.thumbnail} alt="" />
          </div>

          <div className="cart_wishlist_container">
            <button>Heart</button>
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
