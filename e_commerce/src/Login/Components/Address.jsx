import { useContext, useState } from "react";
import AddressForm from "./AddressForm";
import "./Address.css";
import { ProductContext } from "../../ProductProvider/ProductProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Address = () => {
  const [dataAddress, setDataAddress] = useState([
    {
      id: 0,
      name: "xyz singh",
      address: "5/A  professor colony katjunagar Jadavpur",
      pincode: 700032,
      city: "Kolkata",
      state: "West Bengal",
      mobilenumber: 1234567890,
    },
  ]);

  const [storeInputData, setStoreInputData] = useState({
    name: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    mobilenumber: "",
    alternatenumber: "",
  });

  const { state, dispatch } = useContext(ProductContext);

  const [showModal, setShowModal] = useState(false);

  const editHandler = (details, notedIndex) => {
    // const updatedList = state?.address?.filter(
    //   (add, index) => index !== notedIndex
    // );

    // dispatch({
    //   type: "ADD_ADDRESS",
    //   payload: updatedList,
    // });

    setStoreInputData({
      name: details?.name,
      address: details?.address,
      pincode: details?.pincode,
      city: details?.city,
      state: details?.state,
      mobilenumber: details?.mobilenumber,
      alternatenumber: details?.alternatenumber,
    });

    setShowModal(true);
  };

  // console.log(state?.address);

  const deleteHandler = (details, notedIndex) => {
    // console.log(notedIndex);
    // console.log(state?.Address);

    const updatedList = state?.address?.filter(
      (add, index) => index !== notedIndex
    );

    dispatch({
      type: "ADD_ADDRESS",
      payload: updatedList,
    });

    toast.warn("Address Removed", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

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
                storeInputData={storeInputData}
                setStoreInputData={setStoreInputData}
              />
            )}
          </div>
          {state?.address?.map((details, index) => (
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
                  onClick={() => editHandler(details, index)}
                >
                  Edit
                </button>
                <button
                  className="edit_button_2"
                  onClick={() => deleteHandler(details, index)}
                >
                  Delete
                </button>
              </div>
            </div>
            // </div>
          ))}

          <ToastContainer
            position="bottom-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
