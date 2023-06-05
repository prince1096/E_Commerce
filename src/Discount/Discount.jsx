import twenty from "../assets/twenty.jpg";
import thirty from "../assets/thirty.jpg";
import fifty from "../assets/fifty.jpg";
import disclogo from "../assets/dislogo.jpg";

import "./Discount.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../ProductProvider/ProductProvider";

const Discount = () => {
  const { discountFilter } = useContext(ProductContext);

  const discountValue = ["10", "20", "30", "40", "50"];

  return (
    <div>
      <div className="disclogo">
        <img src={disclogo} alt="" className="img_disclogo" />
      </div>

      <div className="wrapper">
        <div className="discount_container">
          <div className="plan">
            <Link to="/products">
              <button onClick={() => discountFilter(discountValue.slice(0, 2))}>
                <img src={twenty} alt="" width="250px" />
              </button>
            </Link>
          </div>
          <div className="plan plan-highlight">
            <Link to="/products">
              <button onClick={() => discountFilter(discountValue.slice(0, 3))}>
                <img src={thirty} alt="" width="250px" />
              </button>
            </Link>
          </div>
          <div className="plan">
            <div className="plan_image_div">
              <Link to="/products">
                <button onClick={() => discountFilter(discountValue.slice())}>
                  <img src={fifty} alt="" width="250px" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
