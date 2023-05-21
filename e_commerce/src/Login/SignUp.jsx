import { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router";

// import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [token, setToken] = useState("");

  //   console.log(userData);

  const signupHandler = async (event) => {
    event.preventDefault();

    if (!userData) {
      return;
    }

    try {
      let response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      setToken(data?.encodedToken);
      if (data?.encodedToken) {
        navigate("/", { replace: true });
      }

      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  console.log(token);

  return (
    <div>
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Signup;
