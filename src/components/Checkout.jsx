import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    city: "",
    zipCode: "",
  });
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({
      ...shippingDetails,
      [name]: value,
    });
  };

  const handleSubmitOrder = () => {
    if (
      !shippingDetails.name ||
      !shippingDetails.address ||
      !shippingDetails.city ||
      !shippingDetails.zipCode
    ) {
      setMessage("Please fill out all fields.");
      return;
    }

    // Simulate an order submission (you can replace this with actual backend API logic)
    setMessage("Your order has been submitted successfully!");
    // Optionally, you could clear the cart here:
    dispatch(clearCart());
    navigate("/"); // Redirect to home after order
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <div className="cart-items">
        <h3>Your Cart</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="shipping-form">
        <h3>Shipping Information</h3>
        <form>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={shippingDetails.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={shippingDetails.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={shippingDetails.city}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Zip Code:</label>
            <input
              type="text"
              name="zipCode"
              value={shippingDetails.zipCode}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>

      <div className="order-summary">
        <h3>Order Summary</h3>
        <p>Total: ${calculateTotal()}</p>
        <button onClick={handleSubmitOrder}>Place Order</button>
      </div>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Checkout;
