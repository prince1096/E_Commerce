import "./Filter.css";

const Filter = () => {
  return (
    <div className="filter_container">
      <div className="filter_clear">
        <h3>Filters</h3>
        <button>Clear</button>
      </div>

      <h3>Price</h3>
      <input type="range" min="0" className="range_input" />

      <div className="filter_product">
        <h3>Categories</h3>

        <label htmlFor="">
          <input type="checkbox" /> Mobile
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Fashion
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Grocery
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Home
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Vehicle
        </label>
      </div>

      <div className="filter_product">
        <h3>Ratings</h3>

        <label htmlFor="fourstar">
          {" "}
          <input type="radio" name="radiostar" id="fourstar" /> 4 stars and
          above{" "}
        </label>
        <label htmlFor="threestar">
          {" "}
          <input type="radio" name="radiostar" id="threestar" /> 3 stars and
          above{" "}
        </label>

        <label htmlFor="twostar">
          {" "}
          <input type="radio" name="radiostar" id="twostar" /> 2 stars and above{" "}
        </label>

        <label htmlFor="onestar">
          {" "}
          <input type="radio" name="radiostar" id="onestar" /> 1 stars and above{" "}
        </label>
      </div>

      <div className="filter_product">
        <h3>Discount</h3>

        <label htmlFor="">
          <input type="checkbox" /> 50% and upper
        </label>
        <label htmlFor="">
          <input type="checkbox" /> 40%-50%
        </label>
        <label htmlFor="">
          <input type="checkbox" /> 30%-40%
        </label>
        <label htmlFor="">
          <input type="checkbox" /> 20%-30%
        </label>
        <label htmlFor="">
          <input type="checkbox" /> 10%-20%
        </label>
      </div>

      <div className="filter_product">
        <h3>Sort By Price</h3>
        <label htmlFor="lowtohigh">
          {" "}
          <input type="radio" name="radiosort" id="lowtohigh" /> price- Low To
          High{" "}
        </label>
        <label htmlFor="hightolow">
          {" "}
          <input type="radio" name="radiosort" id="hightolow" /> price- High To
          Low{" "}
        </label>
      </div>
    </div>
  );
};

export default Filter;
