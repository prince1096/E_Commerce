import { useContext, useState } from "react";

import { ProductContext } from "../ProductProvider/ProductProvider";

import Filter from "../Filter/Filter";
import ProductDisplay from "./ProductDisplay";

import "./Product.css";

const Products = () => {
  const { state } = useContext(ProductContext);

  // console.log(state);

  const [page, setPage] = useState(1);
  const [className, setClassName] = useState();

  // const pageLength = Math.ceil(state?.initialProductData?.products?.length);

  // console.log([...Array(state?.initialProductData?.products.length / 10)]);

  const paginationHandler = (i) => {
    setPage(() => i);
  };

  const prevPageHandler = () => {
    setPage((prev) => prev - 1);
  };

  const nextPageHandler = () => {
    setPage((prev) => prev + 1);
  };

  const filterHandler = () => {
    setClassName("hide_product_details");
  };

  const discountCategory = (disValue) => {
    if (disValue >= 10 && disValue < 20) {
      return "10";
    } else if (disValue >= 20 && disValue < 30) {
      return "20";
    } else if (disValue >= 30 && disValue < 40) {
      return "30";
    } else if (disValue >= 40 && disValue < 50) {
      return "40";
    } else if (disValue >= 50 && disValue < 60) {
      return "50";
    } else if (disValue >= 60) {
      return "60";
    } else {
      return 0;
    }
  };

  // console.log(discountCategory(40));

  const filteredProducts =
    state?.filtersList?.length > 0
      ? state?.initialProductData?.filter(
          (product) =>
            state?.filtersList.includes(product?.category) ||
            state?.filtersList.includes(
              discountCategory(product?.discountPercentage)
            )
        )
      : state?.initialProductData;

  return (
    <div>
      <div className="main_top_div">
        <div className="fakefetch_container">
          <div className="filter_infetch">
            <Filter
            // allProducts={state?.initialProductData}
            // filterProducts={filterProducts}
            />
          </div>
          <div className={`main_container ${className} `}>
            {filteredProducts
              ?.slice((page - 1) * 8, page * 8)
              .map((product) => (
                <ProductDisplay product={product} />
              ))}
          </div>
        </div>

        {/* Pagination */}
        {filteredProducts?.length > 0 && (
          <div className="pagination">
            {page !== 1 && <span onClick={() => prevPageHandler()}>◀</span>}

            {page !== 1 && (
              <span onClick={() => paginationHandler(page - 1)}>
                {" "}
                {page - 1}{" "}
              </span>
            )}

            <span>{page}</span>

            {page !== Math.ceil(filteredProducts?.length / 10) && (
              <span onClick={() => paginationHandler(page + 1)}>
                {" "}
                {page + 1}{" "}
              </span>
            )}

            {page !== Math.ceil(filteredProducts?.length / 10) && (
              <span onClick={() => nextPageHandler()}>▶</span>
            )}
          </div>
        )}

        <button className="show_filter_button" onClick={filterHandler}>
          Filters
        </button>
      </div>
    </div>
  );
};

export default Products;
