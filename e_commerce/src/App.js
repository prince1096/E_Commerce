import "./App.css";
// import logo from "./logo.png";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import HomePage from "./HomePage/HomePage";
import Product from "./Product/Product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />

        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
