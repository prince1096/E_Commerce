import "./App.css";
// import logo from "./logo.png";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import HomePage from "./HomePage/HomePage";
import Product from "./Product/Product";
import NavBar from "./NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />

      {/* <NavLink to="/">Home</NavLink> */}

      {/* <NavLink to="/product">Produts</NavLink> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
