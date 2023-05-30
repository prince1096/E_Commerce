import { useContext } from "react";
import "./CarouselHome.css";

import { Link } from "react-router-dom";
import { ProductContext } from "../ProductProvider/ProductProvider";

const ImageCarousel = ({ imgDetails }) => {
  const { state, categoriesFilter } = useContext(ProductContext);

  return (
    <div>
      <div className="image_carousel_container">
        <Link className="images_carousel_navlink" to="/products">
          <button onClick={() => categoriesFilter(imgDetails?.value)}>
            <img
              src={imgDetails?.image}
              // className="images_"
              style={{ width: "100%", height: "" }}
              alt=""
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ImageCarousel;
