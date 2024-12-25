import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedMessage, setAddedMessage] = useState("");
  console.log(product);

  // Check if the item is already in the cart
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (isInCart) {
      setAddedMessage("This item is already in your cart!");
      setTimeout(() => {
        setAddedMessage("");
      }, 2000); // Hide the message after 2 seconds
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
        <img src={product.images[0]} height={100} alt={product.name} />
      </Link>
      <Link to={`/product/${product.id}`}>
        <h3>{product.title}</h3>
      </Link>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>
        {isInCart ? "Added to Cart" : "Add to Cart"}
      </button>
      {addedMessage && <p className="added-message">{addedMessage}</p>}
    </div>
  );
};

export default ProductItem;
