import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useState } from "react";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { products, error } = useFetch();
  const product = products.find((p) => p.id.toString() === productId);
  // for item already in the cart //
  const cartItems = useSelector((state) => state.cart.items);
  const [addedMessage, setAddedMessage] = useState("");

  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Loading...</div>;

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
    <div className="product-detail">
      <img src={product.images[0]} height={100} alt={product.name} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>
        {isInCart ? "Added to Cart" : "Add to Cart"}
      </button>
      {addedMessage && <p className="added-message">{addedMessage}</p>}
    </div>
  );
};

export default ProductDetail;
