import React from "react";

import spinner from "../../assets/spinner.gif";

import "./Loader.css";

// import clothes from "../assets/clothes.jpg";

const Loader = () => {
  return (
    <div className="spinner_loader">
      <div>
        <img src={spinner} alt="" />
      </div>

      {/* <h1>Loader...</h1> */}
    </div>
  );
};

export default Loader;
