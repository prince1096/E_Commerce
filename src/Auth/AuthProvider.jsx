import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const currentUser = localStorage.getItem("isLoggedIn");
  const [isLoggedIn, setIsLoggedIn] = useState(currentUser || false);

  const encodedToken = localStorage.getItem("token");

  const [token, setToken] = useState(encodedToken || "");

  console.log(token);

  return (
    <div>
      <AuthContext.Provider
        value={{ token, setToken, isLoggedIn, setIsLoggedIn }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
