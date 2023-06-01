import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { useNavigate } from "react-router";

const UserDetails = () => {
  const { token, isLoggedIn, setToken } = useContext(AuthContext);

  const navigate = useNavigate();

  const userInformation = localStorage.getItem("userInformation");

  const userHandler = () => {
    localStorage.clear();
    setToken("");
    // localStorage.clear(isLoggedIn);
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h1>Profile Information</h1>
      {/* {state?.userScreeen} */}
      <div className="user_profile_details">
        <p>
          <strong>Name : {userInformation?.fullname || "Prince Raj"} </strong>
        </p>
        <p>
          <strong>
            Email : {userInformation?.email || "princeraj10121996@gmail.com"}{" "}
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
