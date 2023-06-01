// import { useState } from "react";

import Address from "../Login/Components/Address";
import "./Checkout.css";

const Checkout = () => {
  // const [storeInputData, setStoreInputData] = useState({
  //   name: "",
  //   address: "",
  //   pincode: 0,
  //   city: "",
  //   state: "",
  //   mobilenumber: 0
  // });

  return (
    <div className="checkout_main_container">
      <Address />

      {/* 2nd part */}
      <div className="checkout_price_container">
        <h2 className="checkout_product_heading"> Price details</h2>
        <div className="checkout_product_price">
          <p>Price(1 item)</p>
          <p>rs384</p>
        </div>

        <div className="checkout_product_price">
          <p>Discount</p>
          <p>0</p>
        </div>

        <div className="checkout_product_price">
          <p>Delivery Charges</p>
          <p>0</p>
        </div>

        <hr />

        <div className="checkout_product_price">
          <p>Total Price</p>
          <p>0</p>
        </div>

        <button className="checkout_place_order">Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
