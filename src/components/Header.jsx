import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>
    </header>
  );
};

export default Header;
