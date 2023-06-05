import { useContext, useState } from "react";
import "./Checkout.css";
import { ProductContext } from "../ProductProvider/ProductProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const [selectAddress, setSelectAddress] = useState("");

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

  const addressHandler = (details) => {
    setSelectAddress(details);
  };

  const orderPlaced = () => {
    if (!selectAddress["name"]) {
      toast.info("Please Select an delivery address", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.success("Order Placed", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const numberOfItems = totalItems?.reduce((acc, item) => acc + 1, 0);

  return (
    <div className="checkout_main_container">
      <div className="checkout_address_container">
        <div>
          <h2>Address Details</h2>

          {state?.address?.map((details, index) => (
            <div className="checkout_address_mapping">
              {" "}
              <input type="radio" onChange={() => addressHandler(details)} />
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

        <hr />

        {selectAddress["name"] && (
          <div>
            <h3>Deliver To</h3>

            <h4>{selectAddress?.name}</h4>
            <p> Mobile Number : {selectAddress?.mobilenumber}</p>
            <p>{selectAddress?.address}</p>
            <p>Pin : {selectAddress?.pincode}</p>
            <p>
              {selectAddress?.city}, {selectAddress?.state}
            </p>
          </div>
        )}

        <button className="checkout_place_order" onClick={orderPlaced}>
          Place Order
        </button>

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

export default Checkout;
