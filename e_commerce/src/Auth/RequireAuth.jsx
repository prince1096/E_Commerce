import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useLocation, Navigate, useNavigate } from "react-router";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  // const navigate = useNavigate();
  // const { token, isLoggedIn } = useContext(AuthContext);
  const { token } = useContext(AuthContext);

  return token ? children : <Navigate to="/login" state={{ from: location }} />;
  // return token ? children :  ;
};

export default RequireAuth;
