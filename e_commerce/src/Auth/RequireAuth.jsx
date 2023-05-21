import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useLocation, Navigate } from "react-router";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  //   const Navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default RequireAuth;
