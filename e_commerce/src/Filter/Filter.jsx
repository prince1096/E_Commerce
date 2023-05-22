import { useContext } from "react";
import "./Filter.css";
import { ProductContext } from "../ProductProvider/ProductProvider";

const Filter = () => {
  const {
    state,
    dispatch,
    lowPriceHandler,
    highPriceHandler,
    reviewSortingHandler,
    roundPriceHandler,
    clearFilters,
  } = useContext(ProductContext);

  const checkBoxHandler = (event) => {
    const { value, checked } = event.target;

    checked
      ? dispatch({
          type: "CHECKBOX_FILTERS",
          payload: [...state?.filtersList, value],
        })
      : dispatch({
          type: "CHECKBOX_FILTERS",
          payload: state.filtersList.filter(
            (filterValue) => value !== filterValue
          ),
        });
  };

  const discountHandler = (event) => {
    const { value, checked } = event.target;

    console.log(value);

    checked
      ? dispatch({
          type: "DISCOUNT_HANDLER",
          payload: [...state?.filtersList, value],
        })
      : dispatch({
          type: "DISCOUNT_HANDLER",
          payload: state.filtersList.filter(
            (filterValue) => value !== filterValue
          ),
        });
  };

  // console.log(state?.filtersList);

  // console.log(state?.filtersList);

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
            onChange={checkBoxHandler}
          />{" "}
          Mobile
        </label>

        <label htmlFor="">
          <input type="checkbox" value="laptops" onChange={checkBoxHandler} />{" "}
          Laptops
        </label>

        <label htmlFor="">
          <input type="checkbox" value="fashion" onChange={checkBoxHandler} />{" "}
          Fashion
        </label>
        <label htmlFor="">
          <input type="checkbox" value="groceries" onChange={checkBoxHandler} />{" "}
          Grocery
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            value="home-appliances"
            onChange={checkBoxHandler}
          />{" "}
          Home
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            value="automotivevehicle"
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
          <input type="checkbox" value="60" onChange={discountHandler} /> 60%
          and upper
        </label>
        <label htmlFor="">
          <input type="checkbox" value="50" onChange={discountHandler} />{" "}
          50%-60%
        </label>
        <label htmlFor="">
          <input type="checkbox" value="40" onChange={discountHandler} />{" "}
          40%-50%
        </label>
        <label htmlFor="">
          <input type="checkbox" value="30" onChange={discountHandler} />{" "}
          30%-40%
        </label>
        <label htmlFor="">
          <input type="checkbox" value="20" onChange={discountHandler} />{" "}
          20%-30%
        </label>
        <label htmlFor="">
          <input type="checkbox" value="10" onChange={discountHandler} />{" "}
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
