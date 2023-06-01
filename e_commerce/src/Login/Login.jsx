import "./Login.css";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
// import axios from "axios";
import { AuthContext } from "../Auth/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const encodedToken = localStorage.getItem("token");
  // console.log(encodedToken);

  const { setToken } = useContext(AuthContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  // const [token, setToken] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const guestUser = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };

  const getLoginData = async (event) => {
    if (!loginData) {
      return;
    }
    event.preventDefault();
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",

        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      // setToken(data?.encodedToken);
      if (data?.encodedToken) {
        setIsLoggedIn(true);
        localStorage.setItem("token", data?.encodedToken);
        setToken(data?.encodedToken);
        navigate(location?.state?.from.pathname || "/", { replace: true });
      }

      toast.success("Login Successful", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const guestLoginHandler = async () => {
    setLoginData();

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",

        body: JSON.stringify(guestUser),
      });

      const data = await response.json();

      if (data?.encodedToken) {
        setIsLoggedIn(true);
        localStorage.setItem("token", data?.encodedToken);
        setToken(data?.encodedToken);
        navigate(location?.state?.from.pathname || "/", { replace: true });
      }

      toast.success("Login Successful", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <div className="login_container">
      <form onSubmit={getLoginData} className="login_form_container">
        <div id="email-block">
          <label className="login_label">Email Address</label>
          <input
            className="login_input"
            type="email"
            name="email"
            placeholder="Email Address"
            value={loginData?.email}
            onChange={(event) =>
              setLoginData({ ...loginData, email: event.target.value })
            }
          />
        </div>

        <div id="password-block">
          <label>password</label>
          <input
            className="login_input"
            type="password"
            name="password"
            placeholder="Password"
            value={loginData?.password}
            onChange={(event) =>
              setLoginData({ ...loginData, password: event.target.value })
            }
          />
        </div>

        <button className="login_button" type="submit">
          Login
        </button>
      </form>

      <div className="guest_login_container">
        <button
          className="login_button guest_login"
          onClick={guestLoginHandler}
          type="submit"
        >
          Login as Guest
        </button>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <Link to="/signup"> Create a New Account </Link>
    </div>
  );
};

export default Login;
