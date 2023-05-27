import { useContext, useEffect } from "react";
import { ProductContext } from "../ProductProvider/ProductProvider";
import ProductDisplay from "../Product/ProductDisplay";

import "./Wishlist.css";

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
    <div className="wishlist_item_container">
      {state?.wishlistBox?.map((product) => (
        <ProductDisplay product={product} />
      ))}
    </div>
  );
};

export default Wishlist;
