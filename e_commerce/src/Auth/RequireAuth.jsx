import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useLocation, Navigate } from "react-router";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { token, isLoggedIn } = useContext(AuthContext);

  return token && isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default RequireAuth;
