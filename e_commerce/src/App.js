import "./App.css";
// import logo from "./logo.png";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
