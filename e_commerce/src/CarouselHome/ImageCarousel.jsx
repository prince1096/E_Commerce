import "./CarouselHome.css";

const ImageCarousel = ({ imgName }) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="images">
          <img
            src={imgName}
            // className="images_"
            style={{ width: "100%", height: "" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
