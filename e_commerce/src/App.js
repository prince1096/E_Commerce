import "./App.css";
// import logo from "./logo.png";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import HomePage from "./HomePage/HomePage";
import Product from "./Product/Product";
import NavBar from "./NavBar/NavBar";
import Cart from "./Cart/Cart";
import Wishlist from "./Wishlist/Wishlist";
import RequireAuth from "./Auth/RequireAuth";
import Login from "./Login/Login";
import Signup from "./Login/SignUp";
import UserProfile from "./Login/UserProfile";
import IndividualProduct from "./IndividualProduct/IndividualProduct";

function App() {
  return (
    <div className="App">
      <NavBar />

      {/* <NavLink to="/">Home</NavLink> */}

      {/* <NavLink to="/product">Produts</NavLink> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Product />} />
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route
          path="/individualproduct/:productId"
          element={<IndividualProduct />}
        />

        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
