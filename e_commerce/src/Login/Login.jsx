import "./Login.css";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
// import axios from "axios";
import { AuthContext } from "../Auth/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductContext } from "../ProductProvider/ProductProvider";
import Loader from "../Components/Loader/Loader";

const Login = () => {
  const encodedToken = localStorage.getItem("token");
  const [loggedIn, setLoggedIn] = useState(false);
  // console.log(encodedToken);

  const { state, dispatch } = useContext(ProductContext);

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
    if (loginData?.email === "" || loginData?.password === "") {
      event.preventDefault();

      toast.info("Enter Your Credentials", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    event.preventDefault();

    setLoggedIn(true);

    setTimeout(async () => {
      setLoggedIn(false);

      try {
        const response = await fetch("/api/auth/login", {
          method: "POST",

          body: JSON.stringify(loginData),
        });

        const data = await response.json();
        // setToken(data?.encodedToken);

        if (!data?.encodedToken) {
          event.preventDefault();

          toast.info("Enter Valid Details", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          return;
        }

        if (data?.encodedToken) {
          setIsLoggedIn(true);
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
    }, 2000);
  };

  const guestLoginHandler = async () => {
    setLoginData();

    setLoggedIn(true);

    setTimeout(async () => {
      setLoggedIn(false);

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

        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }, 2000);
  };

  return (
    <div>
      <div>{loggedIn && <Loader />}</div>

      {!loggedIn && (
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
      )}
    </div>
  );
};

export default Login;
