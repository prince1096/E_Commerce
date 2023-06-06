import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./IndividualProduct.css";
import { HiOutlineHeart } from "react-icons/hi";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useParams } from "react-router";
import { ProductContext } from "../ProductProvider/ProductProvider";

const IndividualProduct = () => {
  const descLength = (str) => {
    return str?.length > 50 ? str.slice(0, 49) + "..." : str;
  };

  const nameLength = (str) => {
    return str?.length > 20 ? str.slice(0, 19) + "..." : str;
  };

  const {
    state,
    addToCartHandler,
    addToWishListHandler,
    removeFromWishListHandler,
  } = useContext(ProductContext);
  const navigate = useNavigate();

  const { productId } = useParams();

  const product = state?.initialProductData?.find(
    ({ _id }) => _id === productId
  );

  const cartBoxItem = state?.cartBox?.find(
    (item) => item?._id === product?._id
  );

  const wishlistBoxItem = state?.wishlistBox?.find(
    (item) => item?._id === product?._id
  );

  return (
    <div className="individual_div_container">
      <div className="individual_image_container">
        <div>
          <img
            src={product?.thumbnail}
            alt=""
            className="individual_image_div"
          />
        </div>
        {product?.trending && (
          <div className="individual_trending">Trending</div>
        )}
        <div className="individual_rating">{product?.rating}</div>

        {wishlistBoxItem ? (
          <button
            disabled={state?.wishListBtnDisable}
            onClick={() => removeFromWishListHandler(product)}
            className="image_looks image_looks_wishlist individual_heart"
          >
            <HiOutlineHeart className="nav_logo_product wishlist_heart" />
          </button>
        ) : (
          <button
            disabled={state?.wishListBtnDisable}
            onClick={() => addToWishListHandler(product)}
            className="image_looks image_looks_wishlist individual_heart"
          >
            <HiOutlineHeart className="nav_logo_product" />
          </button>
        )}
      </div>

      {/* 2ndpart */}
      <div className="individual_detailing">
        <h1 className="individual_titlename">{nameLength(product?.title)}</h1>

        <div className="individual_price_data">
          <div className="individual_pricing">
            <strong className="individual_discount_price">
              {" "}
              $ {product?.price}{" "}
            </strong>
            <strong className="individual_mrp"> $ {product?.MRP} </strong>
          </div>

          <div className="individual_discount">
            {Math.trunc(product?.discountPercentage)}% OFF
          </div>
        </div>

        <div className="individual_productdetials">
          <p>
            <strong>Availability : </strong> {product?.stock} in stock{" "}
          </p>

          <p>
            <strong>Description : </strong> {descLength(product?.description)}
          </p>
        </div>

        {cartBoxItem ? (
          <button
            className="cart_button cart_button_added individual_addedtocart"
            onClick={() => navigate("/cart")}
          >
            Go To Cart
          </button>
        ) : product?.in_stock ? (
          <button
            disabled={state?.cartBtnDisable}
            className="individual_addtocart"
            onClick={() => addToCartHandler(product)}
          >
            Add to Cart
          </button>
        ) : (
          <button className="cart_outstock_btn" disabled={true}>
            Out of Stock
          </button>
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
    </div>
  );
};

export default IndividualProduct;
