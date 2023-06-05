import React from "react";

import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import HomePage from "../HomePage/HomePage";
// import HomePage from "./HomePage/HomePage";
import Product from "../Product/Product";
import NavBar from "../NavBar/NavBar";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import RequireAuth from "../Auth/RequireAuth";
import Login from "../Login/Login";
import Signup from "../Login/SignUp";
import UserProfile from "../Login/UserProfile";
import IndividualProduct from "../IndividualProduct/IndividualProduct";
import UserDetails from "../Login/Components/UserDetails";
import Address from "../Login/Components/Address";
import Order from "../Login/Components/Order";
import Checkout from "../Cart/Checkout";
import ErrorPage from "../Error/ErrorPage";

const RouterPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/navbar" element={<NavBar />} />

        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <Wishlist />
            </RequireAuth>
          }
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userprofile" element={<UserProfile />}>
          <Route path="userdetails" element={<UserDetails />} />
          <Route path="address" element={<Address />} />
          <Route path="order" element={<Order />} />
        </Route>
        <Route
          path="/individualproduct/:productId"
          element={<IndividualProduct />}
        />

        <Route path="/mockman" element={<Mockman />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default RouterPage;
