import { createContext, useEffect, useReducer } from "react";

export const ProductContext = createContext();

const initialState = {
  initialProductData: [],
  storeInitialData: [],
  isLoading: false,
  errorMsg: "",
  filtersList: [],
};

const ProductProvider = ({ children }) => {
  // reducer function
  const productReducerfunction = (state, action) => {
    switch (action.type) {
      case "DATA_FETCH_START":
        return { ...state, isLoading: true };

      case "DATA_FETCH_SUCCESS":
        return {
          ...state,
          initialProductData: action.payload,
          storeInitialData: action.payload,
        };

      case "CHECKBOX_FILTERS":
        return { ...state, filtersList: action.payload };

      case "DATA_FETCH_DONE":
        return { ...state, isLoading: false };

      case "LOW_PRICE_HANDLER":
        return { ...state, initialProductData: action.payload };

      case "HIGH_PRICE_HANDLER":
        return { ...state, initialProductData: action.payload };

      case "REVIEW_SORTING":
        return { ...state, initialProductData: action.payload };

      case "PRICE_HANDLER":
        return { ...state, initialProductData: action.payload };

      case "DISCOUNT_HANDLER":
        return { ...state, filtersList: action.payload };

      case "CLEAR_FILTERS":
        return { ...state, initialProductData: action.payload };

      default:
        return { ...state };
    }
  };

  const [state, dispatch] = useReducer(productReducerfunction, initialState);

  const getProductData = async () => {
    dispatch({ type: "DATA_FETCH_START" });

    try {
      const response = await fetch("/api/products");

      const data = await response.json();

      dispatch({ type: "DATA_FETCH_SUCCESS", payload: data.products });

      // console.log(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: "DATA_FETCH_DONE" });
    }
  };

  // console.log(state?.initialProductData);
  // console.log(state?.storeInitialData);

  // sorting

  const lowPriceHandler = () => {
    const lowPriceProduct = state?.initialProductData?.sort(
      (a, b) => a.price - b.price
    );

    dispatch({ type: "LOW_PRICE_HANDLER", payload: lowPriceProduct });
  };

  const highPriceHandler = () => {
    const highPriceProduct = state?.initialProductData?.sort(
      (a, b) => b.price - a.price
    );
    dispatch({ type: "HIGH_PRICE_HANDLER", payload: highPriceProduct });
  };

  // ReviewSorting

  const reviewSortingHandler = (event) => {
    console.log(typeof +event.target.value);

    const ratingFilteredProduct = state?.storeInitialData?.filter(
      (product) => product?.rating >= +event.target.value
    );

    console.log(ratingFilteredProduct);

    dispatch({ type: "REVIEW_SORTING", payload: ratingFilteredProduct });
  };

  const roundPriceHandler = (event) => {
    const priceFilteredProduct = state?.storeInitialData?.filter(
      (product) => product?.price > event.target.value
    );

    dispatch({ type: "PRICE_HANDLER", payload: priceFilteredProduct });
  };

  const clearFilters = () => {
    console.log(1);
    dispatch({ type: "CLEAR_FILTERS", payload: [...state?.storeInitialData] });
    console.log(2);
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div>
      <ProductContext.Provider
        value={{
          state,
          dispatch,
          lowPriceHandler,
          highPriceHandler,
          reviewSortingHandler,
          roundPriceHandler,
          clearFilters,
        }}
      >
        {" "}
        {children}{" "}
      </ProductContext.Provider>
    </div>
  );
};

export default ProductProvider;
