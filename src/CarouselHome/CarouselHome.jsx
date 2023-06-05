// Flipkart
import autopart from "../assets/autopart.jpg";
import clothes from "../assets/clothes.jpg";
import food from "../assets/food.jpg";
import lappy from "../assets/lappy.jpg";
import mobiles_phones from "../assets/mobiles_phones.jpg";
import sale from "../assets/sale.jpg";
import appliances from "../assets/appliances.jpg";
import "./CarouselHome.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageCarousel from "./ImageCarousel";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselHome = () => {
  const imageArr = [
    {
      image: mobiles_phones,
      value: "smartphones",
    },

    {
      image: lappy,
      value: "laptops",
    },

    {
      image: clothes,
      value: "fashion",
    },

    {
      image: food,
      value: "groceries",
    },

    {
      image: appliances,
      value: "home-appliances",
    },

    {
      image: autopart,
      value: "automotivevehicle",
    },

    {
      image: sale,
      value: "",
    },
  ];

  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .4"
        transitionDuration={1000}
      >
        {imageArr.map((image, index) => (
          <ImageCarousel imgDetails={image} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselHome;
