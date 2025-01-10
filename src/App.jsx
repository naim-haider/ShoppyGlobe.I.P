import { lazy, Suspense, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import ProductReview from "./components/ProductReview";

// For performance Optimization //
const Header = lazy(() => import("./components/Header"));
const ProductList = lazy(() => import("./components/ProductList"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./components/Checkout"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route
              path="/product/review/:productId"
              element={<ProductReview />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route element={<NotFound />} />
            <Route />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
