import { NavLink, Outlet } from "react-router-dom";

import "./UserProfile.css";

const UserProfile = () => {
  const toggleActive = ({ isActive }) => {
    return isActive
      ? "user_profile_btn nav-link-active"
      : "user_profile_btn nav-link";
  };

  return (
    <div className="userprofile_container">
      <div>
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
