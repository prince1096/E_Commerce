// import { addItemToCartHandler } from "../backend/controllers/CartController";
import { useContext } from "react";
import "./ProductDisplay.css";
import { AuthContext } from "../Auth/AuthProvider";
import { Link } from "react-router-dom";
import { ProductContext } from "../ProductProvider/ProductProvider";
import { HiOutlineHeart } from "react-icons/hi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDisplay = ({ product }) => {
  const { dispatch, addToCartHandler, addToWishListHandler } =
    useContext(ProductContext);
  const token = localStorage.getItem("token");
  // console.log(tokens);

  const tilteLength = (str) => {
    return str?.length > 15 ? str.slice(0, 14) + "..." : str;
  };

  // const addToCartHandlesr = async (product) => {
  //   console.log(token, "cart");
  //   console.log(product);
  //   try {
  //     // console.log(1);
  //     const response = await fetch("/api/user/cart", {
  //       method: "POST",
  //       body: JSON.stringify({ product }),

  //       header: {
  //         authorization: `${token}`,
  //       },
  //     });
  //     console.log(response);
  //     // console.log(3);
  //     const data = await response.json();
  //     console.log(data, "cart");
  //   } catch (error) {
  //     // console.log(2);
  //     console.log(error);
  //   }
  // };

  // <Link to={`/ProductDetail/${item.id}`}> Visit Item </Link>

  return (
    <div>
      <div className="productdisplay_container">
        <Link
          to={`/individualproduct/${product.id}`}
          className="product_link_individual"
        >
          <img
            src={product?.thumbnail}
            alt=""
            style={{ width: "100%", height: "200px" }}
          />

          <h3> {tilteLength(product?.title)}</h3>
          <span className="product_span">${product?.price}</span>

          {/* <button
            onClick={() => addToWishListHandler(product)}
            className="image_looks image_looks_wishlist"
          >
            Heart
          </button> */}

          {product?.trending && (
            <div className="image_looks image_looks_trending">Trending</div>
          )}
        </Link>

        <button
          onClick={() => addToWishListHandler(product)}
          className="image_looks image_looks_wishlist"
        >
          <HiOutlineHeart className="nav_logo" />
        </button>

        <button
          className="cart_button"
          onClick={() => addToCartHandler(product)}
        >
          Add to Cart
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

export default ProductDisplay;
