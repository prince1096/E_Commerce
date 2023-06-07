import { useState } from "react";
import "./Login.css";
import { useNavigate, useLocation } from "react-router";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const signupHandler = async (event) => {
    event.preventDefault();

    if (!userData) {
      return;
    }

    console.log(event.target.value);
    console.log(userData);

    try {
      let response = await fetch("/api/auth/signup", {
        method: "POST",

        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (data?.encodedToken) {
        localStorage.setItem("token", data?.encodedToken);
        localStorage.setItem("userInformation", JSON.stringify(userData));
        navigate(location?.state?.from.pathname || "/login", { replace: true });
      }

      console.log(data);
    } catch (error) {}
  };

  return (
    <div className="login_container">
      <form onSubmit={signupHandler} className="login_form_container">
        <div id="name-block">
          <label className="login_label">Full Name</label>
          <input
            className="login_input"
            type="text"
            value={userData?.fullname}
            onChange={(event) =>
              setUserData({ ...userData, fullname: event.target.value })
            }
            name="name"
            placeholder="Full Name"
          />
        </div>
        <div id="email-block">
          <label className="login_label">Email Address</label>
          <input
            className="login_input"
            type="email"
            name="email"
            value={userData?.email}
            onChange={(event) =>
              setUserData({ ...userData, email: event.target.value })
            }
            placeholder="Email Address"
          />
        </div>

        <div id="password-block">
          <label>password</label>
          <input
            className="login_input"
            type="password"
            name="password"
            value={userData?.password}
            onChange={(event) =>
              setUserData({ ...userData, password: event.target.value })
            }
            placeholder="Password"
          />
        </div>

        <button className="login_button" type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Signup;
