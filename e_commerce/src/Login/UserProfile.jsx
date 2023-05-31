import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useNavigate } from "react-router";

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

  return (
    <div className="userprofile_container">
      <div className="user_profile_button_container">
        <button className="user_profile_btn">
          {" "}
          <strong> User Profile </strong>{" "}
        </button>
        <button className="user_address_btn">
          <strong> Address </strong>{" "}
        </button>
        <button className="user_order_btn" onClick={showOrders}>
          <strong> Order History </strong>{" "}
        </button>
      </div>
      {/* <h1>Profile Information</h1> */}
      {state?.userScreeen}
      <div className="user_profile_details">
        <p>
          <strong>Name : </strong>
        </p>
        <p>
          <strong>Email : </strong>
        </p>
      </div>
      <button className="logout_button" onClick={userHandler}>
        <strong>Logout</strong>
      </button>
    </div>
  );
};

export default UserProfile;
