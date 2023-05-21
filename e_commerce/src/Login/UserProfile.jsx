import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useNavigate } from "react-router";

const UserProfile = () => {
  const { token, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const userHandler = () => {
    localStorage.clear(token);
    localStorage.clear(isLoggedIn);
    navigate("/", { replace: true });
  };

  return (
    <div className="userprofile_container">
      <h1>Profile Information</h1>

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
