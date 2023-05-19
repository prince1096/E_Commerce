import { createContext, useEffect, useReducer } from "react";

export const ProductContext = createContext();

const initialState = {
  initialProductData: [],
  isLoading: false,
  errorMsg: "",
};

const ProductProvider = ({ children }) => {
  const productReducerfunction = (state, action) => {
    switch (action.type) {
      case "DATA_FETCH_START":
        return { ...state, isLoading: "true" };

      case "DATA_FETCH_SUCCESS":
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

      dispatch({ type: "DATA_FETCH_SUCCESS", payload: data });

      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: "DATA_FETCH_DONE" });
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div>
      <ProductContext.Provider value={{ state }}>
        {" "}
        {children}{" "}
      </ProductContext.Provider>
    </div>
  );
};

export default ProductProvider;
