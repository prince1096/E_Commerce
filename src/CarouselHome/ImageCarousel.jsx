import { useContext } from "react";
import "./CarouselHome.css";

import { Link } from "react-router-dom";
import { ProductContext } from "../ProductProvider/ProductProvider";

const ImageCarousel = ({ imgDetails }) => {
  const { categoriesFilter } = useContext(ProductContext);

  return (
    <div>
      <div className="image_carousel_container">
        <Link className="images_carousel_navlink" to="/products">
          <button
            className="image_carousel_btn"
            onClick={() => categoriesFilter(imgDetails?.value)}
          >
            <img src={imgDetails?.image} className="images_carousel" alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ImageCarousel;
