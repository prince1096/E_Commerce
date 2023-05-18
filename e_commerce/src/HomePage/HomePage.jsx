import { useState } from "react";
import NavBar from "../NavBar/NavBar";

const HomePage = () => {
  const [finalData, setFinalData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("api/products");
      const data = await response.json();

      setFinalData(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(finalData);

  return (
    <div>
      <NavBar />
      <button onClick={() => fetchData()}>getData</button>
    </div>
  );
};

export default HomePage;
