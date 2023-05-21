import "./NavBar.css";
// import Products from "../Product/Product";
//

import { HiOutlineHeart } from "react-icons/hi";
import { BsCart3 } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import Diversity2Icon from "@mui/icons-material/Diversity2";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar_container">
        <div className="first_header cart_logo">
          <NavLink to="/" className="nav_link">
            <div className="logo_icons">
              <Diversity2Icon fontSize="large" />
              <div>VastraCart</div>
            </div>
          </NavLink>
        </div>

        <div className="input_div_header">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search products"
            className="input_header"
          />
          <AiOutlineSearch className="nav_logo_product" />
        </div>

        <div className="third_header nav-links">
          <NavLink to="/products" className="nav_link_detail">
            {" "}
            <strong className="nav_logo_product">Product</strong>
          </NavLink>

          <NavLink to="/login" className="nav_link_detail">
            {" "}
            <BsPersonCircle className="nav_logo" />
          </NavLink>

          <NavLink to="/wishlist" className="nav_link_detail">
            {" "}
            <HiOutlineHeart className="nav_logo" />
          </NavLink>

          <NavLink to="/cart" className="nav_link_detail  nav_link_cart">
            {" "}
            <BsCart3 className="nav_logo" />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
