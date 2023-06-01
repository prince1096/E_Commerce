import { useState } from "react";
import AddressForm from "./AddressForm";
import "./Address.css";

const Address = () => {
  const [dataAddress, setDataAddress] = useState([
    {
      name: "xyz singh",
      address: "5/A  professor colony katjunagar Jadavpur",
      pincode: 700032,
      city: "Kolkata",
      state: "West Bengal",
      mobilenumber: 1234567890,
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const editHandler = (details) => {};

  return (
    <div>
      <div className="checkout_address_container">
        <div>
          <h2>Address Details</h2>

          <div>
            <button
              className="add_new_address_btn"
              onClick={() => setShowModal(true)}
            >
              {" "}
              + Add New Address{" "}
            </button>

            {showModal && (
              <AddressForm
                showModal={showModal}
                setShowModal={setShowModal}
                dataAddress={dataAddress}
                setDataAddress={setDataAddress}
              />
            )}
          </div>

          {dataAddress?.map((details) => (
            <div
              className="checkout_address_mapping"
              //   style={{ border: "2px solid" }}
            >
              {" "}
              {/* <input type="radio" /> */}
              {/* <div> */}
              <h4>{details?.name}</h4>
              <p> Mobile Number : {details?.mobilenumber}</p>
              <p>{details?.address}</p>
              <p>Pin : {details?.pincode}</p>
              <p>
                {details?.city}, {details?.state}
              </p>
              <div className="address_btn_edit">
                <button
                  className="edit_button_1"
                  onClick={() => editHandler(details)}
                >
                  Edit
                </button>
                <button className="edit_button_2">Delete</button>
              </div>
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Address;
