import { createSlice } from "@reduxjs/toolkit";

// Initialize cart state with data from localStorage (if available) //
const storedCart = JSON.parse(localStorage.getItem("cart")) || { items: [] };
const initialState = storedCart;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      // Save cart to localStorage //
      localStorage.setItem("cart", JSON.stringify(state));
    },
    // remove particular item from cart //
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      // Save cart to localStorage //
      localStorage.setItem("cart", JSON.stringify(state));
    },
    // Clear all items in the cart //
    clearCart: (state) => {
      state.items = [];
      // Clear cart from localStorage //
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
