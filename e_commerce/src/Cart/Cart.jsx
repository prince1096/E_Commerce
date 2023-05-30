import { useContext, useEffect } from "react";
import { ProductContext } from "../ProductProvider/ProductProvider";
import CartDisplay from "./CartDisplay";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Cart.css";

const Cart = () => {
  const { state, dispatch } = useContext(ProductContext);

  // console.log(state?.cartBox);

  const token = localStorage.getItem("token");
  const getCartProduct = async () => {
    try {
      const response = await fetch("/api/user/cart", {
        method: "GET",
        headers: {
          authorization: token,
        },
        // body: JSON.stringify({ product }),
      });

      const data = await response.json();
      // console.log(data?.cart);

      dispatch({ type: "CART_ADDED", payload: data?.cart });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCartProduct();
  }, []);

  const totalItems = state?.cartBox.reduce(
    (acc, item) => [
      ...acc,
      { title: item?.title, price: item?.price, quantity: 1 },
    ],
    []
  );

  const totalPrice = totalItems.reduce(
    (acc, item) => acc + item?.price * item?.quantity,
    0
  );

  return (
    <div>
      {state?.cartBox.length === 0 ? (
        <div>
          <h2>Empty Cart Start shopping </h2>
        </div>
      ) : (
        <div className="cart_display_page">
          <div>
            {state?.cartBox?.map((product) => (
              <CartDisplay key={product?.id} product={product} />
            ))}
          </div>

          <div className="totalitem_price_details">
            <div className="totalitem_cart_details"> CART PRICE DETAILS </div>
            <hr />

            {/* {state?.map} */}

            {totalItems?.map((item) => (
              <div className="totalitem_cartitem_details">
                {" "}
                <p>
                  {item.title} ({item?.quantity}){" "}
                </p>{" "}
                <p>{item?.price}</p>{" "}
              </div>
            ))}

            <div className="totalitem_totalprice_details">
              {" "}
              <p>TotalPrice : </p> <p>${totalPrice}</p>
            </div>

            <button className="totalitem_checkoutbtn_details">CHECKOUT</button>
          </div>
        </div>
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
  );
};

export default Cart;
