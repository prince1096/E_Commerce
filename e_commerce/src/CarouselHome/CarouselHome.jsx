// Flipkart
import grocery from "../assets/grocery.webp";
import Home_appliances from "../assets/Home_appliances.jpg";
import autopart from "../assets/autopart.jpg";
import family_fashion from "../assets/family_fashion.jpg";
import mobiles_logo from "../assets/mobiles_logo.jpg";
import laptop from "../assets/laptop.jpg";
import NewArrival from "../assets/NewArrival.jpg";

import "./CarouselHome.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageCarousel from "./ImageCarousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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
    mobiles_logo,
    laptop,
    family_fashion,
    grocery,
    Home_appliances,
    autopart,
    NewArrival,
  ];

  return (
    <div>
      {/* <h1>Hello World</h1> */}
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .4"
        transitionDuration={1000}
        // containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      >
        {imageArr.map((image, index) => (
          <ImageCarousel imgName={image} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselHome;
