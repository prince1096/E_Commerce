import { useContext } from "react";
import "./Filter.css";
import { ProductContext } from "../ProductProvider/ProductProvider";

const Filter = () => {
  const {
    state,
    // dispatch,
    lowPriceHandler,
    highPriceHandler,
    reviewSortingHandler,
    roundPriceHandler,
    clearFilters,
    checkBoxHandler,
    discountHandler,
  } = useContext(ProductContext);

  return (
    <div className="filter_container">
      <div className="filter_clear">
        <h3>Filters</h3>
        <button onClick={clearFilters}>Clear</button>
      </div>

      <h3>Price</h3>
      <input
        type="range"
        min="0"
        max="2000"
        className="range_input"
        onChange={roundPriceHandler}
      />

      <div className="filter_product">
        <h3>Categories</h3>

        <label htmlFor="">
          <input
            type="checkbox"
            value="smartphones"
            checked={state?.filtersList?.includes("smartphones")}
            onChange={checkBoxHandler}
          />{" "}
          Mobile
        </label>

        <label htmlFor="">
          <input
            type="checkbox"
            value="laptops"
            checked={state?.filtersList?.includes("laptops")}
            onChange={checkBoxHandler}
          />{" "}
          Laptops
        </label>

        <label htmlFor="">
          <input
            type="checkbox"
            value="fashion"
            checked={state?.filtersList?.includes("fashion")}
            onChange={checkBoxHandler}
          />{" "}
          Fashion
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            value="groceries"
            checked={state?.filtersList?.includes("groceries")}
            onChange={checkBoxHandler}
          />{" "}
          Grocery
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            value="home-appliances"
            checked={state?.filtersList?.includes("home-appliances")}
            onChange={checkBoxHandler}
          />{" "}
          Home
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            value="automotivevehicle"
            checked={state?.filtersList?.includes("automotivevehicle")}
            onChange={checkBoxHandler}
          />{" "}
          Vehicle
        </label>
      </div>

      <div className="filter_product">
        <h3>Ratings</h3>

        <label htmlFor="fourstar">
          {" "}
          <input
            type="radio"
            name="radiostar"
            id="fourstar"
            value="4"
            onChange={reviewSortingHandler}
          />{" "}
          4 stars and above{" "}
        </label>
        <label htmlFor="threestar">
          {" "}
          <input
            type="radio"
            name="radiostar"
            id="threestar"
            value="3"
            onChange={reviewSortingHandler}
          />{" "}
          3 stars and above{" "}
        </label>

        <label htmlFor="twostar">
          {" "}
          <input
            type="radio"
            name="radiostar"
            id="twostar"
            value="2"
            // checked={state?.filtersList?.includes("60")}

            onChange={reviewSortingHandler}
          />{" "}
          2 stars and above{" "}
        </label>

        <label htmlFor="onestar">
          {" "}
          <input
            type="radio"
            name="radiostar"
            id="onestar"
            value="1"
            onChange={reviewSortingHandler}
          />{" "}
          1 stars and above{" "}
        </label>
      </div>

      <div className="filter_product">
        <h3>Discount</h3>

        <label htmlFor="">
          <input
            type="checkbox"
            value="60"
            checked={state?.filtersList?.includes("60")}
            onChange={discountHandler}
          />{" "}
          60% and upper
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            value="50"
            checked={state?.filtersList?.includes("50")}
            onChange={discountHandler}
          />{" "}
          50%-60%
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            value="40"
            checked={state?.filtersList?.includes("40")}
            onChange={discountHandler}
          />{" "}
          40%-50%
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            value="30"
            checked={state?.filtersList?.includes("30")}
            onChange={discountHandler}
          />{" "}
          30%-40%
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            value="20"
            checked={state?.filtersList?.includes("20")}
            onChange={discountHandler}
          />{" "}
          20%-30%
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            value="10"
            checked={state?.filtersList?.includes("10")}
            onChange={discountHandler}
          />{" "}
          10%-20%
        </label>
      </div>

      <div className="filter_product">
        <h3>Sort By Price</h3>
        <label htmlFor="lowtohigh">
          {" "}
          <input
            type="radio"
            name="radiosort"
            id="lowtohigh"
            onClick={lowPriceHandler}
          />{" "}
          price- Low To High{" "}
        </label>
        <label htmlFor="hightolow">
          {" "}
          <input
            type="radio"
            name="radiosort"
            id="hightolow"
            onClick={highPriceHandler}
          />{" "}
          price- High To Low{" "}
        </label>
      </div>
    </div>
  );
};

export default Filter;
