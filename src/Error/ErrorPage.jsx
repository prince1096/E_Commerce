import React from "react";
import "./ErrorPage.css";
import { useNavigate } from "react-router";

import Error404 from "../assets/Error404.jpg";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="errorpage_div_container">
      <div className="errorpage_image_container">
        <img className="img-responsive" src={Error404} alt="" width="350px" />
      </div>

      <div className="errorpage_details">
        <div className="errorpage_heading">
          <h1>Error 404!</h1>
        </div>
        <div className="errorpage_textdiv">Page Not Found</div>
        <div>
          <button onClick={() => navigate("/")} className="errorpage_btndiv">
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
