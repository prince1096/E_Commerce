import "./CarouselHome.css";

import { NavLink } from "react-router-dom";

const ImageCarousel = ({ imgName }) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NavLink className="images">
          <img
            src={imgName}
            // className="images_"
            style={{ width: "100%", height: "" }}
            alt=""
          />
        </NavLink>
      </div>
    </div>
  );
};

export default ImageCarousel;
