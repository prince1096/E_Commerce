import { createContext, useEffect, useReducer } from "react";

export const ProductContext = createContext();

const initialState = {
  initialProductData: [],
  storeInitialData: [],
  isLoading: false,
  errorMsg: "",
  filtersList: [],
  searchedText: "",
  cartBox: [],
  wishlistBox: [],
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
        return {
          ...state,
          // initialProductData: [],
          // storeInitialData: [],
          // isLoading: false,
          // errorMsg: "",
          filtersList: [],
          // searchedText: "",
        };

      case "SEARCHED":
        return { ...state, searchedText: action.payload };

      case "CART_ADDED":
        return { ...state, cartBox: action.payload };

      case "WISHLIST_ADDED":
        return { ...state, wishlistBox: action.payload };

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

      // console.log(data);
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

  // roundPrice
  const roundPriceHandler = (event) => {
    const priceFilteredProduct = state?.storeInitialData?.filter(
      (product) => product?.price > event.target.value
    );

    dispatch({ type: "PRICE_HANDLER", payload: priceFilteredProduct });
  };

  // clear filters
  const clearFilters = () => {
    console.log(1);
    dispatch({ type: "CLEAR_FILTERS" });
    console.log(2);
  };

  //

  // category
  const checkBoxHandler = (event) => {
    const { value, checked } = event.target;

    checked
      ? dispatch({
          type: "CHECKBOX_FILTERS",
          payload: [...state?.filtersList, value],
        })
      : dispatch({
          type: "CHECKBOX_FILTERS",
          payload: state.filtersList.filter(
            (filterValue) => value !== filterValue
          ),
        });
  };

  const categoriesFilter = (value) => {
    // console.log(value, "2");
    // dispatch({
    //   type: "CHECKBOX_FILTERS",
    //   payload: state?.filtersList?.includes(value)
    //     ? [...state?.filtersList]
    //     : [...state?.filtersList, value],
    // });

    dispatch({
      type: "CHECKBOX_FILTERS",
      payload: state?.filtersList?.includes(value)
        ? [...state?.filtersList]
        : [value],
    });
  };

  // console.log(state?.filtersList);

  // discountcheckbox
  const discountHandler = (event) => {
    const { value, checked } = event.target;

    console.log(value);

    checked
      ? dispatch({
          type: "DISCOUNT_HANDLER",
          payload: [...state?.filtersList, value],
        })
      : dispatch({
          type: "DISCOUNT_HANDLER",
          payload: state.filtersList.filter(
            (filterValue) => value !== filterValue
          ),
        });
  };

  useEffect(() => {
    getProductData();
    getCartProduct();
  }, []);

  // cart

  const token = localStorage.getItem("token");
  const getCartProduct = async () => {
    try {
      const response = await fetch("/api/user/cart", {
        method: "GET",
        headers: {
          authorization: token,
        },
        // body: JSON.stringify({ product }),
      });

      const data = await response.json();
      console.log(data?.cart);

      dispatch({ type: "CART_ADDED", payload: data?.cart });
    } catch (error) {
      console.log(error);
    }
  };

  // getCartProduct();

  useEffect(() => {
    getCartProduct();
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
          checkBoxHandler,
          discountHandler,
          categoriesFilter,
          // searchProductHandler,
        }}
      >
        {" "}
        {children}{" "}
      </ProductContext.Provider>
    </div>
  );
};

export default ProductProvider;
