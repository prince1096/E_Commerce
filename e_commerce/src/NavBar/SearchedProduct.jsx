import React from "react";
import { Link } from "react-router-dom";

import "./SearchedProduct.css";

const SearchedProduct = ({ products }) => {
  const descLength = (str) => {
    return str?.length > 30 ? str.slice(0, 29) + "..." : str;
  };

  const nameLength = (str) => {
    return str?.length > 15 ? str.slice(0, 14) + "..." : str;
  };

  return (
    <Link
      to={`/individualproduct/${products.id}`}
      className="product_link_individual"
    >
      <div className="searched_product_container">
        <div className="searched_product_image">
          {" "}
          <img
            src={products?.thumbnail}
            width="100px"
            height="80px"
            alt=""
          />{" "}
        </div>

        <div className="searched_product_details">
          <div className="searched_product_pricing">
            <p>{nameLength(products?.title)}</p>
            <p>${products?.price}</p>
          </div>

          <div className="searched_product_desc">
            {descLength(products?.description)}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchedProduct;
