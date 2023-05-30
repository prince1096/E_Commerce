import { useContext, useEffect } from "react";
import { ProductContext } from "../ProductProvider/ProductProvider";
import ProductDisplay from "../Product/ProductDisplay";

import "./Wishlist.css";
import WishlistDisplay from "./WishlistDisplay";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wishlist = () => {
  const { state, dispatch } = useContext(ProductContext);

  const token = localStorage.getItem("token");
  const getWishlistProduct = async () => {
    try {
      const response = await fetch("/api/user/wishlist", {
        method: "GET",
        headers: {
          authorization: token,
        },
        // body: JSON.stringify({ product }),
      });

      const data = await response.json();
      console.log(data?.wishlist);

      dispatch({ type: "WISHLIST_ADDED", payload: data?.wishlist });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWishlistProduct();
  }, []);

  console.log(state?.wishlistBox);

  return (
    <div>
      {state?.wishlistBox?.length === 0 ? (
        <div>
          <h1>Empty Wishlist</h1>
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
