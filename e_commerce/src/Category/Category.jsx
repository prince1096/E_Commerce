import bike from "../assets/bike.png";
import grocery_logo from "../assets/grocery_logo.jpg";
import homelogo from "../assets/homelogo.jpg";
// import fashion_logo from "../assets/fashion_logo.webp";
import images_mobiles from "../assets/images_mobiles.jpg";
import laptop_logo from "../assets/laptop_logo.jpg";
import family_fashion_logo from "../assets/family_fashion_logo.jpg";

import "./Category.css";
import { useContext } from "react";
import { ProductContext } from "../ProductProvider/ProductProvider";

const Category = () => {
  const { state, categoriesFilter } = useContext(ProductContext);

  return (
    <div className="categorywise_container">
      <div className="categorylist_container">
        <button onClick={() => categoriesFilter("smartphones")}>
          <img src={images_mobiles} width="80px" height="65px" alt="" />
          <p>Mobiles</p>
        </button>
      </div>
      <div className="categorylist_container">
        <button onClick={() => categoriesFilter("laptops")}>
          <img src={laptop_logo} alt="" width="80px" height="65px" />
          <p>Laptops</p>
        </button>
      </div>
      <div className="categorylist_container">
        <button onClick={() => categoriesFilter("fashion")}>
          <img src={family_fashion_logo} alt="" width="80px" height="65px" />
          <p>Fashion</p>
        </button>
      </div>
      <div className="categorylist_container">
        <button onClick={() => categoriesFilter("groceries")}>
          <img src={grocery_logo} alt="" width="80px" height="65px" />
          <p>Grocery</p>
        </button>
      </div>
      <div className="categorylist_container">
        <button onClick={() => categoriesFilter("home-appliances")}>
          <img src={homelogo} alt="" width="80px" height="65px" />
          <p>Appliances</p>
        </button>
      </div>
      <div className="categorylist_container">
        <button onClick={() => categoriesFilter("automotivevehicle")}>
          <img src={bike} alt="" width="80px" height="65px" />
          <p>Bike&parts</p>
        </button>
      </div>
    </div>
  );
};

export default Category;
