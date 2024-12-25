import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="checkout-button-container">
          <Link to="/checkout">
            <button className="checkout-button">Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
