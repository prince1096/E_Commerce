import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import CarouselHome from "../CarouselHome/CarouselHome";

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
      {/* <button onClick={() => fetchData()}>getData</button> */}
      <CarouselHome />
    </div>
  );
};

export default HomePage;
