// import bike from "../assets/bike.png";
// import grocery_logo from "../assets/grocery_logo.jpg";
// import homelogo from "../assets/homelogo.jpg";
// import fashion_logo from "../assets/fashion_logo.webp";
// import images_mobiles from "../assets/images_mobiles.jpg";
// import laptop_logo from "../assets/laptop_logo.jpg";
// import family_fashion_logo from "../assets/family_fashion_logo.jpg";
import home_appliances from "../assets/home_appliances.webp";
import Mobile_logo from "../assets/Mobile_logo_flipkart.webp";
import laptops from "../assets/electronics_logo.webp";
import fashion from "../assets/fashion_logo2.webp";
import Grocery from "../assets/Grocery_logo.webp";
import twoWheeler from "../assets/two_wheelers.webp";

import "./Category.css";
import { useContext, useEffect } from "react";
import { ProductContext } from "../ProductProvider/ProductProvider";

const Category = () => {
  const { state, dispatch, categoriesFilter } = useContext(ProductContext);

  // we can map here.

  const getCategoryData = async () => {
    // dispatch({ type: "DATA_FETCH_START" });

    try {
      const response = await fetch("/api/categories");

      const data = await response.json();

      console.log(data);

      dispatch({ type: "CATEGOTY_FETCH_SUCCESS", payload: data.categories });

      // console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      // dispatch({ type: "DATA_FETCH_DONE" });
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  return (
    <div className="categorywise_container">
      <div className="first_category">
        <div className="categorylist_container">
          <button
            className="category_button"
            onClick={() => categoriesFilter("smartphones")}
          >
            <img src={Mobile_logo} width="80px" height="65px" alt="" />
            <p className="logo_description">Mobiles</p>
          </button>
        </div>
        <div className="categorylist_container">
          <button
            className="category_button"
            onClick={() => categoriesFilter("laptops")}
          >
            <img src={laptops} alt="" width="80px" height="65px" />
            <p className="logo_description">Laptops</p>
          </button>
        </div>
        <div className="categorylist_container">
          <button
            className="category_button"
            onClick={() => categoriesFilter("fashion")}
          >
            <img src={fashion} alt="" width="80px" height="65px" />
            <p className="logo_description">Fashion</p>
          </button>
        </div>
      </div>

      <div className="second_category">
        <div className="categorylist_container">
          <button
            className="category_button"
            onClick={() => categoriesFilter("groceries")}
          >
            <img src={Grocery} alt="" width="80px" height="65px" />
            <p className="logo_description">Grocery</p>
          </button>
        </div>
        <div className="categorylist_container">
          <button
            className="category_button"
            onClick={() => categoriesFilter("home-appliances")}
          >
            <img src={home_appliances} alt="" width="80px" height="65px" />
            <p className="logo_description">Appliances</p>
          </button>
        </div>
        <div className="categorylist_container">
          <button
            className="category_button"
            onClick={() => categoriesFilter("automotivevehicle")}
          >
            <img src={twoWheeler} alt="" width="80px" height="65px" />
            <p className="logo_description">Bike&Parts</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
