import { useContext } from "react";
import { ProductContext } from "../ProductProvider/ProductProvider";

import "./Wishlist.css";
import WishlistDisplay from "./WishlistDisplay";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emptywishlist from "../assets/empty_wishlist.jpeg";
import { useNavigate } from "react-router";

const Wishlist = () => {
  const { state } = useContext(ProductContext);

  const navigate = useNavigate();

  return (
    <div className="main_wishlist_div">
      {state?.userWishlist?.length === 0 ? (
        <div className="empty_wishlist_div">
          <img
            className="empty_image_wish"
            src={emptywishlist}
            alt=""
            width="300px"
            height="400px"
          />

          <h2>Empty Wishlist</h2>

          <button
            className="empty_wishlist_btn"
            onClick={() => navigate("/products")}
          >
            Add Some Items
          </button>
        </div>
      ) : (
        <div className="wishlist_item_container">
          {state?.wishlistBox?.map((product) => (
            <WishlistDisplay product={product} />
          ))}
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

export default Wishlist;
