import twenty from "../assets/twenty.jpg";
import thirty from "../assets/thirty.jpg";
import fifty from "../assets/fifty.jpg";
import disclogo from "../assets/dislogo.jpg";

import "./Discount.css";

const Discount = () => {
  return (
    <div>
      {/* <div> */}

      <div className="disclogo">
        <img src={disclogo} alt="" className="img_disclogo" />
      </div>

      <div className="wrapper">
        <div className="discount_container">
          <div className="plan">
            <img src={twenty} alt="" width="300px" />
          </div>
          <div className="plan plan-highlight">
            <img src={fifty} alt="" width="300px" />
          </div>
          <div className="plan">
            <img src={thirty} alt="" width="300px" />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Discount;
