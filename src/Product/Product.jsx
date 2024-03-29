import { useContext, useEffect, useState } from "react";

import { ProductContext } from "../ProductProvider/ProductProvider";

import Filter from "../Filter/Filter";
import ProductDisplay from "./ProductDisplay";

import "./Product.css";
import Category from "../Category/Category";
// import Navbar2 from "../NavBar/NavBar";
import Loader from "../Components/Loader/Loader";
import NoProductFound from "../assets/NoProductFound.jpg";
import { ImCross } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";

import { FaFilter } from "react-icons/fa";

const Products = () => {
  const { state, dispatch } = useContext(ProductContext);
  const [showFilters, setShowFilter] = useState(false);

  const [page, setPage] = useState(1);

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

  // console.log(state?.filterByRating);
  // console.log(filteredProducts);

  const ratingFilteredProduct = state?.filterByRating
    ? filteredProducts?.filter(
        (product) => product?.rating >= +state?.filterByRating
      )
    : filteredProducts;

  // console.log(ratingFilteredProduct);

  // console.log(state?.roundPrice);

  const roundPriceFilteredProduct = ratingFilteredProduct?.filter(
    (product) => product?.price > state?.roundPrice
  );

  const sortingPriceProduct = state?.sortByPrice
    ? [...roundPriceFilteredProduct]?.sort((a, b) =>
        state?.sortByPrice === "lowToHigh"
          ? a.price - b.price
          : b.price - a.price
      )
    : [...roundPriceFilteredProduct];

  const numberOfProducts = sortingPriceProduct?.length;

  useEffect(() => {
    const timeId = setTimeout(() => {
      dispatch({ type: "DATA_FETCH_DONE" });
    }, 2000);

    return () => clearTimeout(timeId);
  }, []);

  return (
    // <div>

    <div className="main_top_div">
      {state?.isLoading && <Loader />}

      {/* <Navbar2 />{" "} */}

      {!state?.isLoading && (
        <div>
          <div className="fakefetch_container">
            <div className="product_category_component">
              <Category />
            </div>

            <div className="product_listing_page_container">
              <div
                className="filter_infetch hide_filter_responsive "

                // className="filter_infetch"
              >
                <Filter filterHandler={filterHandler} />
              </div>

              <div>
                <div className="sticky_product_data">
                  <h2>Showing All Products({numberOfProducts})</h2>

                  <div>
                    <button
                      className="show_filter_button"
                      onClick={() => setShowFilter(true)}
                    >
                      ShowFilters
                      <FaFilter />
                    </button>

                    {showFilters && (
                      <div className="hide_filter_component, mobile_filter_list">
                        <button
                          className="hide_filter_btn"
                          onClick={() => setShowFilter(false)}
                        >
                          HideFilters
                          <RxCross2 />
                        </button>
                        <Filter />
                      </div>
                    )}
                  </div>
                </div>

                <div className={`main_container_product  `}>
                  {sortingPriceProduct?.length === 0 && (
                    <div className="noproduct_found">
                      <img src={NoProductFound} alt="" />
                      <h1>No Product found</h1>
                    </div>
                  )}

                  {sortingPriceProduct
                    ?.slice((page - 1) * 8, page * 8)
                    .map((product) => (
                      <ProductDisplay key={product?.id} product={product} />
                    ))}
                </div>
              </div>
            </div>
          </div>
          {/* Pagination */}
          {sortingPriceProduct?.length > 0 && (
            <div className="pagination">
              {page !== 1 && (
                <span
                  onClick={() => prevPageHandler()}
                  className="pagination_arrow"
                >
                  ◀
                </span>
              )}

              {page !== 1 && (
                <span
                  onClick={() => paginationHandler(page - 1)}
                  className="previous_page_product"
                >
                  {" "}
                  {page - 1}{" "}
                </span>
              )}

              <span className="current_page_product">{page}</span>

              {page !== Math.ceil(sortingPriceProduct?.length / 8) && (
                <span
                  onClick={() => paginationHandler(page + 1)}
                  className="next_page_product"
                >
                  {" "}
                  {page + 1}{" "}
                </span>
              )}

              {page !== Math.ceil(sortingPriceProduct?.length / 8) && (
                <span
                  onClick={() => nextPageHandler()}
                  className="pagination_arrow"
                >
                  ▶
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
    // </div>
  );
};

export default Products;
