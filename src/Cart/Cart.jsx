import { useContext } from "react";
import { ProductContext } from "../ProductProvider/ProductProvider";
import CartDisplay from "./CartDisplay";

import emptycart from "../assets/emptycart.jpg";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Cart.css";
import { useNavigate } from "react-router";

const Cart = () => {
  const { state, dispatch } = useContext(ProductContext);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const updatedQtyFromCart = async (product, type) => {
    try {
      const response = await fetch(`api/user/cart/${product?._id}`, {
        method: "POST",
        body: JSON.stringify({ action: { type } }),
        headers: {
          authorization: token,
        },
      });

      const data = await response.json();

      dispatch({ type: "UPDATE_QTY_IN_CART", payload: data.cart });
    } catch (error) {
      console.log(error);
    }
  };

  const totalItems = state?.cartBox?.reduce(
    (acc, item) => [
      ...acc,
      { title: item?.title, price: item?.price, quantity: item?.qty },
    ],
    []
  );

  const totalPrice = totalItems?.reduce(
    (acc, item) => acc + item?.price * item?.quantity,
    0
  );

  return (
    <div className="cart_page_container">
      {state?.cartBox?.length === 0 && (
        <div className="empty_cart_div">
          <img src={emptycart} alt="" width="300px" height="300px" />
          <h2>Empty Cart Start shopping </h2>

          <button
            className="empty_wishlist_btn"
            onClick={() => navigate("/products")}
          >
            Add Some Items
          </button>
        </div>
      )}

      {state?.cartBox?.length !== 0 && (
        <div className="cart_display_page">
          <div>
            {state?.cartBox?.map((product) => (
              <CartDisplay
                key={product?.id}
                product={product}
                updatedQtyFromCart={updatedQtyFromCart}
              />

              // 2
            ))}
          </div>

          <div className="totalitem_price_details">
            <div className="totalitem_cart_details"> CART PRICE DETAILS </div>
            <hr />

            {totalItems?.map((item) => (
              <div className="totalitem_cartitem_details">
                {" "}
                <p>
                  {item.title} ({item?.quantity}) :
                </p>{" "}
                <p>{item?.price * item.quantity}</p>{" "}
              </div>
            ))}

            <div className="totalitem_totalprice_details">
              {" "}
              <p>TotalPrice : </p> <p>${totalPrice}</p>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="totalitem_checkoutbtn_details"
            >
              CHECKOUT
            </button>
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
