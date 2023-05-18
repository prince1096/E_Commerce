import { useState } from "react";

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
      <h1>Hello world</h1>

      <button onClick={() => fetchData()}>getData</button>
    </div>
  );
};

export default HomePage;
