import "./NavBar.css";

import { HiOutlineHeart } from "react-icons/hi";
import { BsCart3 } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";

import { HiShoppingBag } from "react-icons/hi";
import Diversity2Icon from "@mui/icons-material/Diversity2";

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { ProductContext } from "../ProductProvider/ProductProvider";
import SearchedProduct from "./SearchedProduct";

const Navbar = () => {
  const { token } = useContext(AuthContext);
  const { state, dispatch } = useContext(ProductContext);

  const { searchedText } = state;

  const searchedItem = state?.initialProductData?.filter((product) =>
    product?.title?.toLowerCase().includes(searchedText?.toLowerCase())
  );

  return (
    <div className="navbar_div_container">
      <div className="main_navbar_container">
        <div className="div_container_logo">
          <NavLink to="/" className="nav_link">
            <div className="logo_icons">
              <Diversity2Icon fontSize="medium" />
              <div>QuickCart</div>
            </div>
          </NavLink>
        </div>

        <div className="search_navbar_container_desktop">
          {/* <div> */}
          <input
            type="text"
            name=""
            placeholder="Search products"
            className="search_navbar_input_desktop"
            value={searchedText}
            onChange={(event) =>
              dispatch({ type: "SEARCHED", payload: event.target.value })
            }
          />

          {searchedText?.length > 0 && (
            <div className="searched_product_containers_desktop">
              {" "}
              {searchedItem.map((product) => (
                <SearchedProduct products={product} />
              ))}
            </div>
          )}
          {/* </div> */}
        </div>

        <div className="user_navbar_container">
          <div>
            <NavLink to="/products" className="nav_link_detail">
              {" "}
              <strong className="nav_logo_product">
                {" "}
                <HiShoppingBag className="user_product_logo" />{" "}
              </strong>
            </NavLink>
          </div>
          <div>
            {token ? (
              <NavLink
                to="/userprofile/userdetails"
                className="nav_link_detail"
              >
                {" "}
                <BsPersonCircle className="nav_logo, user_login_logo" />
              </NavLink>
            ) : (
              <NavLink to="/login" className="nav_link_detail">
                {" "}
                {/* <BsPersonCircle className="nav_logo" /> */}
                Login
              </NavLink>
            )}
          </div>
          <div>
            <NavLink to="/wishlist" className="nav_link_detail">
              {" "}
              {/* <HiOutlineHeart className="nav_logo" /> */}
              {token && state?.wishlistBox?.length === 0 ? (
                <HiOutlineHeart className="nav_logo" />
              ) : (
                <span className="wishlist_navbaar_logoo">
                  <HiOutlineHeart className="nav_logo" />
                  <span className="wishlist_item_number">
                    {state?.wishlistBox?.length}
                  </span>
                </span>
              )}
            </NavLink>
          </div>
          <div>
            <NavLink to="/cart" className="nav_link_detail  nav_link_cart">
              {" "}
              {/* <BsCart3 className="nav_logo" /> */}
              {token && state?.cartBox?.length === 0 ? (
                <BsCart3 className="nav_logo" />
              ) : (
                <span className="wishlist_navbaar_logoo">
                  <BsCart3 className="nav_logo" />
                  <span className="wishlist_item_number">
                    {state?.cartBox?.length}
                  </span>
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </div>

      <div>
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search products"
            className="search_navbar_input_mobile"
            value={searchedText}
            onChange={(event) =>
              dispatch({ type: "SEARCHED", payload: event.target.value })
            }
          />

          {searchedText?.length > 0 && (
            <div className="searched_product_containers_mobile">
              {" "}
              {searchedItem?.length === 0 && <h2>No Products Matched</h2>}
              {searchedItem.map((product) => (
                <SearchedProduct products={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
