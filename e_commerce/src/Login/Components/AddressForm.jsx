import { useContext, useState } from "react";

import "./AddressForm.css";
import randomAddress from "./randomAddress";
import { ProductContext } from "../../ProductProvider/ProductProvider";

const AddressForm = ({
  dataAddress,
  setDataAddress,
  setShowModal,
  storeInputData,
  setStoreInputData,
}) => {
  const { state, dispatch } = useContext(ProductContext);

  // console.log(dataAddress);

  const addButtonHandler = () => {
    setStoreInputData({
      name: "",
      address: "",
      pincode: "",
      city: "",
      state: "",
      mobilenumber: "",
      alternatenumber: "",
    });

    if (!storeInputData) {
      return;
    }

    dispatch({
      type: "ADD_ADDRESS",
      payload: [...state?.address, storeInputData],
    });

    // setDataAddress([...dataAddress, storeInputData]);
    setShowModal(() => false);
  };

  const resetButtonHandler = () => {
    setStoreInputData({
      name: "",
      address: "",
      pincode: "",
      city: "",
      state: "",
      mobilenumber: "",
      alternatenumber: "",
    });
  };
  const cancelButtonHandler = () => {
    setShowModal(() => false);
  };

  const randomButtonHandler = () => {
    const randomNumber = Math.ceil(Math.random() * randomAddress.length);
    const randomData = randomAddress[randomNumber];

    setStoreInputData({
      name: randomData?.name,
      address: randomData?.address,
      pincode: randomData?.pincode,
      city: randomData?.city,
      state: randomData?.state,
      mobilenumber: randomData?.mobilenumber,
      alternatenumber: randomData?.alternatenumber,
    });

    // setDataAddress([...dataAddress, randomAddress[randomNumber]]);
    // setShowModal(() => false);
  };

  return (
    <div className="main_address_page">
      <div className="overlay" onClick={() => setShowModal(false)}></div>

      <div className=" modal main_address_container">
        <div className="address_1_container">
          <input
            className="login_input"
            type="text"
            name=""
            placeholder="name"
            required
            value={storeInputData?.name}
            onChange={(event) =>
              setStoreInputData({
                ...storeInputData,
                name: event.target.value,
              })
            }
          />
          <input
            className="login_input"
            type="number"
            name=""
            placeholder="mobile no."
            value={storeInputData?.mobilenumber}
            onChange={(event) =>
              setStoreInputData({
                ...storeInputData,
                mobilenumber: event.target.value,
              })
            }
          />
          <input
            className="login_input"
            type="number"
            name=""
            placeholder="pincode"
            value={storeInputData?.pincode}
            onChange={(event) =>
              setStoreInputData({
                ...storeInputData,
                pincode: event.target.value,
              })
            }
          />
          <input
            className="login_input"
            type="text"
            name=""
            placeholder="city"
            value={storeInputData?.city}
            onChange={(event) =>
              setStoreInputData({
                ...storeInputData,
                city: event.target.value,
              })
            }
          />
        </div>

        <div className="address_2_container">
          <textarea
            className="login_input"
            name=""
            id=""
            placeholder="address"
            cols="30"
            placehodler="address"
            rows="6"
            value={storeInputData?.address}
          ></textarea>
        </div>
        <div className="address_3_container">
          <input
            className="login_input"
            type="number"
            name=""
            placeholder="alternate number"
            value={storeInputData?.alternatenumber}
            onChange={(event) =>
              setStoreInputData({
                ...storeInputData,
                alternatenumber: event.target.value,
              })
            }
          />

          <input
            className="login_input"
            type="text"
            name=""
            placeholder="state"
            value={storeInputData?.state}
            onChange={(event) =>
              setStoreInputData({
                ...storeInputData,
                state: event.target.value,
              })
            }
          />
        </div>
        <div className="address_button_container">
          <button className="add_address_button" onClick={addButtonHandler}>
            Add
          </button>
          <button className="reset_address_button" onClick={resetButtonHandler}>
            Reset
          </button>
          <button
            className="random_address_button"
            onClick={randomButtonHandler}
          >
            {" "}
            Random Data
          </button>
          <button
            className="cancel_address_button"
            onClick={cancelButtonHandler}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
