// import { useEffect, useState } from "react";
// import NavBar from "../NavBar/NavBar";
import CarouselHome from "../CarouselHome/CarouselHome";
import Discount from "../Discount/Discount";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <div>
      {/* <NavBar /> */}
      {/* <button onClick={() => fetchData()}>getData</button> */}
      <CarouselHome />
      <Discount />
      <Footer />
    </div>
  );
};

export default HomePage;