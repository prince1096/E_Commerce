// import { useState } from "react";

import { useContext } from "react";
import Address from "../Login/Components/Address";
import "./Checkout.css";
import { ProductContext } from "../ProductProvider/ProductProvider";

const Checkout = () => {
  // const [storeInputData, setStoreInputData] = useState({
  //   name: "",
  //   address: "",
  //   pincode: 0,
  //   city: "",
  //   state: "",
  //   mobilenumber: 0
  // });

  const { state } = useContext(ProductContext);

  const totalItems = state?.cartBox?.reduce(
    (acc, item) => [
      ...acc,
      { title: item?.title, price: item?.price, quantity: 1 },
    ],
    []
  );

  const totalPrice = totalItems?.reduce(
    (acc, item) => acc + item?.price * item?.quantity,
    0
  );

  const addressLength = state?.address?.length;

  // const deliveryAddress =

  // const deliveryAddress = [state?.address?.length?.fill(false)];

  // console.log(deliveryAddress);

  const numberOfItems = totalItems?.reduce((acc, item) => acc + 1, 0);

  return (
    <div className="checkout_main_container">
      {/* <Address /> */}

      <div className="checkout_address_container">
        <div>
          <h2>Address Details</h2>
          {/* <div>
          </div> */}
          {state?.address?.map((details, index) => (
            <div
              className="checkout_address_mapping"
              //   style={{ border: "2px solid" }}
            >
              {" "}
              <input type="radio" />
              <div>
                <h4>{details?.name}</h4>
                <p> Mobile Number : {details?.mobilenumber}</p>
                <p>{details?.address}</p>
                <p>Pin : {details?.pincode}</p>
                <p>
                  {details?.city}, {details?.state}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2nd part */}
      <div className="checkout_price_container">
        <h2 className="checkout_product_heading"> Price details</h2>
        <div className="checkout_product_price">
          <p>Price({numberOfItems} item)</p>
          <p>${totalPrice}</p>
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
          <p>${totalPrice}</p>
        </div>

        <button className="checkout_place_order">Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
