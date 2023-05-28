import { useContext, useState } from "react";

import { ProductContext } from "../ProductProvider/ProductProvider";

import Filter from "../Filter/Filter";
import ProductDisplay from "./ProductDisplay";

import "./Product.css";
import Category from "../Category/Category";

const Products = () => {
  const { state } = useContext(ProductContext);
  const [showModal, setShowModal] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  // console.log(state);

  const [page, setPage] = useState(1);
  // const [className, setClassName] = useState();

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
    // setClassName("hide_product_details");
    // setShowFilter(!showFilter);
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

  console.log(state?.filterByRating);
  console.log(filteredProducts);

  const ratingFilteredProduct = state?.filterByRating
    ? filteredProducts?.filter(
        (product) => product?.rating >= +state?.filterByRating
      )
    : filteredProducts;

  console.log(ratingFilteredProduct);

  console.log(state?.roundPrice);

  const roundPriceFilteredProduct = ratingFilteredProduct?.filter(
    (product) => product?.price > state?.roundPrice
  );

  const sortingPriceProduct = state?.sortByPrice
    ? roundPriceFilteredProduct?.sort((a, b) =>
        state?.sortByPrice === "lowToHigh"
          ? a.price - b.price
          : b.price - a.price
      )
    : roundPriceFilteredProduct;

  return (
    // <div>
    <div className="main_top_div">
      <div className="fakefetch_container">
        <div className="product_category_component">
          <Category />
        </div>

        <div className="product_listing_page_container">
          <div
            // className={` filter_infetch ${
            //   showFilter ? "hide_filter_responsive" : "show_filter_responsive"
            // } `}

            className="filter_infetch"
          >
            <Filter
              // showFilter={showFilter}
              // setShowFilter={setShowFilter}

              filterHandler={filterHandler}
            />
          </div>
          <div className={`main_container_product  `}>
            {roundPriceFilteredProduct
              ?.slice((page - 1) * 8, page * 8)
              .map((product) => (
                <ProductDisplay key={product?.id} product={product} />
              ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      {roundPriceFilteredProduct?.length > 0 && (
        <div className="pagination">
          {page !== 1 && <span onClick={() => prevPageHandler()}>◀</span>}

          {page !== 1 && (
            <span onClick={() => paginationHandler(page - 1)}>
              {" "}
              {page - 1}{" "}
            </span>
          )}

          <span>{page}</span>

          {page !== Math.ceil(roundPriceFilteredProduct?.length / 8) && (
            <span onClick={() => paginationHandler(page + 1)}>
              {" "}
              {page + 1}{" "}
            </span>
          )}

          {page !== Math.ceil(roundPriceFilteredProduct?.length / 8) && (
            <span onClick={() => nextPageHandler()}>▶</span>
          )}
        </div>
      )}

      <button className={`show_filter_button`} onClick={filterHandler}>
        ShowFilters
      </button>
    </div>
    // </div>
  );
};

export default Products;
