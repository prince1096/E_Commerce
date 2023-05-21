import "./Login.css";

import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const encodedToken = localStorage.getItem("token");

  // const [loginData, setLoginData] = useState([]);

  // const loginHandler = async () => {
  //   try {
  //     const response = await axios.get("/api/auth/login", {
  //       headers: {
  //         authorization: encodedToken,
  //       },
  //     });
  //   } catch (error) {}
  // };

  // const encodedToken = localStorage.getItem("token");
  // const [foo, setFoo] = useState([]);
  // const fetchFooDetails = async () => {
  //   try {
  //     const response = await axios.get(`/api/user/private-route`, {
  //       headers: {
  //         authorization: encodedToken, // passing token as an authorization header
  //       },
  //     });
  //     setFoo(response.data.bar);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className=".login_container">
      {/* <form onSubmit={loginHandler} className="login_form_container"> */}
      <form className="login_form_container">
        <div id="email-block">
          <label className="login_label">Email Address</label>
          <input
            className="login_input"
            type="email"
            name="email"
            placeholder="Email Address"
          />
        </div>

        <div id="password-block">
          <label>password</label>
          <input
            className="login_input"
            type="text"
            name="password"
            placeholder="Password"
          />
        </div>

        <button className="login_button" type="submit">
          Login
        </button>
      </form>
      <Link to="/signup"> Create a New Account </Link>
    </div>
  );
};

export default Login;
