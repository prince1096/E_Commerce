import { useContext, useState } from "react";

import { ProductContext } from "../ProductProvider/ProductProvider";

import Filter from "../Filter/Filter";
import ProductDisplay from "./ProductDisplay";

import "./Product.css";

const Products = () => {
  const { state } = useContext(ProductContext);

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
    console.log(5);
    setClassName("hide_product_details");
    console.log(6);
  };

  return (
    <div>
      <div className="main_top_div">
        <div className="fakefetch_container">
          <div className="filter_infetch">
            <Filter />
          </div>
          <div className={`main_container ${className} `}>
            {state?.initialProductData?.products
              ?.slice((page - 1) * 10, page * 10)
              .map((product) => (
                <ProductDisplay product={product} />
              ))}
          </div>
        </div>

        {state?.initialProductData?.products?.length > 0 && (
          <div className="pagination">
            {page !== 1 && <span onClick={() => prevPageHandler()}>◀</span>}

            {/* {[...Array(state?.initialProductData?.products?.length / 10)].map(
              (_, i) => (
                <span key={i} onClick={() => paginationHandler(i + 1)}>
                  {" "}
                  {i + 1}{" "}
                </span>
              )
            )} */}

            {page !== 1 && (
              <span onClick={() => paginationHandler(page - 1)}>
                {" "}
                {page - 1}{" "}
              </span>
            )}

            {/* <span onClick={() => paginationHandler(page + 1)}> {page} </span> */}

            <span>{page}</span>

            {page !==
              Math.ceil(state?.initialProductData?.products?.length / 10) && (
              <span onClick={() => paginationHandler(page + 1)}>
                {" "}
                {page + 1}{" "}
              </span>
            )}

            {page !==
              Math.ceil(state?.initialProductData?.products?.length / 10) && (
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
