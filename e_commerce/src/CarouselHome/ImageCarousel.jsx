import "./CarouselHome.css";

import { NavLink } from "react-router-dom";

const ImageCarousel = ({ imgName }) => {
  return (
    <div>
      <div className="image_carousel_container">
        <NavLink className="images_carousel_navlink">
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
