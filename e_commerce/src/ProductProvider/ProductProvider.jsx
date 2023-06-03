import { createContext, useEffect, useReducer } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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
  filterByRating: "",
  sortByPrice: "",
  roundPrice: 0,
  userScreen: "",
  cartBtnDisable: false,
  wishListBtnDisable: false,
  address: [
    {
      name: "xyz singh",
      address: "5/A  professor colony katjunagar Jadavpur",
      pincode: 700032,
      city: "Kolkata",
      state: "West Bengal",
      mobilenumber: 1234567890,
    },
  ],
  categoryList: [],
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

      case "SORTING_BY_PRICE":
        return { ...state, sortByPrice: action.payload };

      // case "REVIEW_SORTING":
      //   return { ...state, initialProductData: action.payload };

      case "FILTER_BY_RATING":
        return { ...state, filterByRating: action.payload };

      case "PRICE_HANDLER":
        return { ...state, roundPrice: action.payload };

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
          filterByRating: "",
          roundPrice: 0,
          sortByPrice: "",
          // sortingValue: [],
          // searchedText: "",
        };

      case "SEARCHED":
        return { ...state, searchedText: action.payload };

      case "CART_ADDED":
        // console.log(action.payload);
        return { ...state, cartBox: action.payload };

      case "CART_BTN":
        return { ...state, cartBtnDisable: action.payload };

      case "WISHLIST_ADDED":
        return { ...state, wishlistBox: action.payload };

      case "WISHLIST_BTN":
        return { ...state, wishListBtnDisable: action.payload };

      case "USER_DISPLAY":
        return { ...state, userScreen: action.payload };

      case "ADD_ADDRESS":
        return { ...state, address: action.payload };

      case "CATEGORY_FETCH_SUCCESS":
        return { ...state, categoryList: action.payload };

      case "UPDATE_QTY_IN_CART":
        return { ...state, cartBox: action.payload };

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

  const priceSortingHandler = (event) => {
    dispatch({ type: "SORTING_BY_PRICE", payload: event.target.value });
  };

  // ReviewSorting

  const reviewSortingHandler = (event) => {
    console.log(typeof +event.target.value);

    dispatch({ type: "FILTER_BY_RATING", payload: +event.target.value });
  };

  // roundPrice
  const roundPriceHandler = (event) => {
    dispatch({ type: "PRICE_HANDLER", payload: event.target.value });
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

    console.log(value);

    value
      ? dispatch({
          type: "CHECKBOX_FILTERS",
          payload: state?.filtersList?.includes(value)
            ? [...state?.filtersList]
            : [value],
        })
      : dispatch({
          type: "CHECKBOX_FILTERS",
          payload: [
            "smartphones",
            "laptops",
            "fashion",
            "home-appliances",
            "groceries",
            "automotivevehicle",
          ],
        });
  };

  const discountFilter = (value) => {
    console.log(value);
    dispatch({
      type: "CHECKBOX_FILTERS",
      payload: [...value],
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
  }, []);

  // cart

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
      // console.log(data?.cart);

      dispatch({ type: "CART_ADDED", payload: data?.cart });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCartProduct();
  }, [state?.cartBox]);

  const token = localStorage.getItem("token");
  const getWishlistProduct = async () => {
    try {
      const response = await fetch("/api/user/wishlist", {
        method: "GET",
        headers: {
          authorization: token,
        },
        // body: JSON.stringify({ product }),
      });

      const data = await response.json();
      // console.log(data?.wishlist);

      dispatch({ type: "WISHLIST_ADDED", payload: data?.wishlist });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWishlistProduct();
  }, [state?.wishlistBox]);

  const addToCartHandler = async (product) => {
    if (!token) {
      return toast.info("Login First!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    // setCartBtnDisable(true);
    dispatch({ type: "CART_BTN", payload: true });

    try {
      const response = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: JSON.stringify({ product }),
      });

      toast.success("Item added to cart", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      const data = await response.json();
      console.log(data, "cart");

      // dispatch({ type: "CART_ADDED", payload: data?.cart });
    } catch (error) {
      // console.log(2);
      console.log(error);
    } finally {
      dispatch({ type: "CART_BTN", payload: false });
    }
  };

  const addToWishListHandler = async (product) => {
    if (!token) {
      return toast.info("Login First!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    // console.log(token, "wishlist");
    dispatch({ type: "WISHLIST_BTN", payload: true });

    try {
      // console.log(1);
      const response = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: JSON.stringify({ product }),
      });
      // console.log(response);
      // console.log(3);

      const data = await response.json();

      toast.success("Item added to wishlist", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      // console.log(2);
      console.log(error);
    } finally {
      dispatch({ type: "WISHLIST_BTN", payload: false });
    }
  };

  // removeCartHandler

  // const removeFromCartHandler = async (product) => {
  //   try {
  //     const {
  //       data: { cart },
  //     } = await axios.delete(`/api/user/cart/${product._id}`, {
  //       headers: {
  //         authorization: token,
  //       },
  //     });
  //     dispatch({ type: "CART_ADDED", payload: cart });
  //   } catch (e) {
  //     console.log("error from cart delete handler");
  //   }
  // };

  const removeFromCartHandler = async (product) => {
    dispatch({ type: "CART_BTN", payload: true });

    try {
      const response = await fetch(`/api/user/cart/${product?._id}`, {
        method: "DELETE",
        headers: {
          authorization: token,
        },
      });

      const data = await response.json();

      dispatch({ type: "CART_ADDED", payload: data?.cart });

      toast.warn("Item removed", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: "CART_BTN", payload: false });
    }
  };

  const removeFromWishListHandler = async (product) => {
    dispatch({ type: "WISHLIST_BTN", payload: true });

    try {
      const response = await fetch(`/api/user/wishlist/${product?._id}`, {
        method: "DELETE",
        headers: {
          authorization: token,
        },
      });

      const data = await response.json();
      console.log(data);

      dispatch({ type: "WISHLIST_ADDED", payload: data?.wishlist });
      toast.warn("Removed from Wishlist", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: "WISHLIST_BTN", payload: false });
    }
  };

  return (
    <div>
      <ProductContext.Provider
        value={{
          state,
          dispatch,
          priceSortingHandler,
          reviewSortingHandler,
          roundPriceHandler,
          clearFilters,
          checkBoxHandler,
          discountHandler,
          categoriesFilter,
          removeFromCartHandler,
          addToCartHandler,
          addToWishListHandler,
          removeFromWishListHandler,
          discountFilter,
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
