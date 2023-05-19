import "./ProductDisplay.css";

const ProductDisplay = ({ product }) => {
  const tilteLength = (str) => {
    return str.length > 15 ? str.slice(0, 14) + "..." : str;
  };

  return (
    <div className="productdisplay_container">
      <img
        src={product?.thumbnail}
        alt=""
        style={{ width: "100%", height: "200px" }}
      />

      <h3> {tilteLength(product?.title)}</h3>
      <span className="product_span">${product?.price}</span>

      <div className="image_looks image_looks_wishlist">Heart</div>

      <div className="image_looks image_looks_trending">Trending</div>

      <button className="cart_button">Add to Cart</button>
    </div>
  );
};

export default ProductDisplay;
