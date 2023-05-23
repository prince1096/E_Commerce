import React from "react";

import "./SearchedProduct.css";

const SearchedProduct = ({ products }) => {
  return (
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
          <p>{products?.title}</p>
          <p>${products?.price}</p>
        </div>

        <div className="searched_product_desc">{products?.description}</div>
      </div>
    </div>
  );
};

export default SearchedProduct;
