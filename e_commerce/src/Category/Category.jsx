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
  const { state, checkBoxHandler } = useContext(ProductContext);

  return (
    <div className="categorywise_container">
      <div
        // onClickHandler={checkBoxHandler}
        className="categorylist_container"
      >
        <button onChange={checkBoxHandler} value={"smartphones"}>
          <img src={images_mobiles} width="80px" alt="" />
          <p>Mobiles</p>
        </button>
        {/* <img src={images_mobiles} alt="" />
        <p>Mobiles</p> */}
      </div>
      <div className="categorylist_container">
        <img src={laptop_logo} alt="" />
        <p>Laptops</p>
      </div>
      <div className="categorylist_container">
        <img src={family_fashion_logo} alt="" />
        <p>Fashion</p>
      </div>
      <div className="categorylist_container">
        <img src={grocery_logo} alt="" />
        <p>Grocery</p>
      </div>
      <div className="categorylist_container">
        <img src={homelogo} alt="" />
        <p>Appliances</p>
      </div>
      <div className="categorylist_container">
        <img src={bike} alt="" />
        <p>Bike&parts</p>
      </div>
    </div>
  );
};

export default Category;
