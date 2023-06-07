import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { useNavigate } from "react-router";
import { ProductContext } from "../../ProductProvider/ProductProvider";

const UserDetails = () => {
  const { token, isLoggedIn, setToken } = useContext(AuthContext);
  const { state, dispatch } = useContext(ProductContext);

  const navigate = useNavigate();

  const userInformation = localStorage.getItem("userInformation");

  console.log(userInformation);

  const userHandler = () => {
    localStorage.clear();
    setToken("");
    // localStorage.clear(isLoggedIn);
    navigate("/", { replace: true });
    window.location.reload();

    // dispatch({ type: "CLEAR_STATE" });
    // dispatch({ type: "WISHLIST_ADDED", payload: [] });
    // dispatch({ type: "CART_ADDED", payload: [] });
  };

  // console.log(state?.cartBox);
  // console.log(state?.wishListBox);

  return (
    <div>
      <h1>Profile Information</h1>
      {/* {state?.userScreeen} */}
      <div className="user_profile_details">
        <p>
          <strong>Name : {userInformation?.fullname || "Prince Raj"} </strong>
          {/* <strong>Name : {userInformation?.fullname} </strong> */}
        </p>
        <p>
          <strong>
            Email : {userInformation?.email || "princeraj@gmail.com"}{" "}
          </strong>
        </p>
      </div>
      <button className="logout_button" onClick={userHandler}>
        <strong>Logout</strong>
      </button>
    </div>
  );
};

export default UserDetails;
