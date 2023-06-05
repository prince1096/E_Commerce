import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useNavigate } from "react-router";
import { NavLink, Outlet } from "react-router-dom";

import "./UserProfile.css";
import { ProductContext } from "../ProductProvider/ProductProvider";
// import "./Login.css";

const UserProfile = () => {
  const { token, isLoggedIn, setToken } = useContext(AuthContext);
  const { state, dispatch } = useContext(ProductContext);
  const navigate = useNavigate();

  const userHandler = () => {
    localStorage.clear();
    setToken("");
    // localStorage.clear(isLoggedIn);
    navigate("/", { replace: true });
  };

  const showOrders = () => {
    dispatch({ type: "USER_DISPLAY", payload: "No Order Till Now" });
  };

  // console.log(state?.userScreeen);

  const toggleActive = ({ isActive }) => {
    return isActive
      ? "user_profile_btn nav-link-active"
      : "user_profile_btn nav-link";
  };

  return (
    <div className="userprofile_container">
      <div>
        {/* <button className="user_profile_btn">
          {" "}
          <strong> User Profile </strong>{" "}
        </button>
        <button className="user_address_btn">
          <strong> Address </strong>{" "}
        </button>
        <button className="user_order_btn" onClick={showOrders}>
          <strong> Order History </strong>{" "}
        </button> */}

        <div className=" user_profile_button_container ">
          <NavLink to={"/userprofile/userdetails"} className={toggleActive}>
            User Profile
          </NavLink>
          <NavLink to={"/userprofile/address"} className={toggleActive}>
            Address
          </NavLink>
          <NavLink to={"/userprofile/order"} className={toggleActive}>
            Order History
          </NavLink>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default UserProfile;
