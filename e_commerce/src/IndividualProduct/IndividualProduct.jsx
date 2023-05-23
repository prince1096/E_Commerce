import { useContext } from "react";
import "./IndividualProduct.css";
import { HiOutlineHeart } from "react-icons/hi";

import { useParams } from "react-router";
import { ProductContext } from "../ProductProvider/ProductProvider";

const IndividualProduct = () => {
  const { state } = useContext(ProductContext);

  const { productId } = useParams();

  const product = state?.initialProductData?.find(({ id }) => id === productId);

  return (
    <div className="individual_div_container">
      <div className="individual_image_container">
        <div>
          <img src={product?.thumbnail} width="270px" height="300px" alt="" />
        </div>
        {product?.trending && (
          <div className="individual_trending">Trending</div>
        )}
        <div className="individual_rating">{product?.rating}</div>
        <button className="individual_heart">
          <HiOutlineHeart className="nav_logo individual_heart_logo" />
        </button>
      </div>

      {/* 2ndpart */}
      <div className="individual_detailing">
        <h1 className="individual_titlename">{product?.title}</h1>

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
            <strong>Description : </strong> {product?.description}
          </p>
        </div>

        <button className="individual_addtocart">Add To Cart</button>
      </div>
    </div>
  );
};

export default IndividualProduct;
