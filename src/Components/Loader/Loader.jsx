import React from "react";

import spinner from "../../assets/spinner.gif";

import "./Loader.css";

const Loader = () => {
  return (
    <div className="spinner_loader">
      <div>
        <img src={spinner} alt="" />
      </div>
    </div>
  );
};

export default Loader;
