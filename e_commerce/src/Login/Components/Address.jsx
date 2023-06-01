import { useState } from "react";
import AddressForm from "./AddressForm";
import "./Address.css";

const Address = () => {
  const [dataAddress, setDataAddress] = useState([
    {
      name: "xyz singh",
      address: "5/A  professor colony delhi India",
      pincode: 100032,
      city: "delhi",
      state: "delhi",
      mobilenumber: 1234567890,
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="checkout_address_container">
        <div>
          <h2>Address Details</h2>

          <div>
            <button onClick={() => setShowModal(true)}>
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
              style={{ border: "2px solid" }}
            >
              {" "}
              <input type="radio" />
              <div>
                <h4>{details?.name}</h4>
                {details?.address} Pin : {details?.pincode}
                <p> Mobile Number : {details?.mobilenumber}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Address;
