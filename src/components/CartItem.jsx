import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <div>
        <span>{item.quantity}</span>
      </div>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
