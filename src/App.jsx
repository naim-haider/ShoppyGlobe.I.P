import { lazy, Suspense, useState } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import ProductReview from "./components/ProductReview";
import UserRegister from "./Authentication/UserRegister";
import UserLogin from "./Authentication/UserLogin";
import { useSelector } from "react-redux";

// For performance Optimization //
const Header = lazy(() => import("./components/Header"));
const AdminHeader = lazy(() => import("./components/admin/AdminHeader"));
const ProductList = lazy(() => import("./components/ProductList"));
const AdminDashboard = lazy(() => import("./components/admin/AdminDashboard"));
const AddProduct = lazy(() => import("./components/admin/AddProduct"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./components/Checkout"));

const PrivateRoute = ({ children }) => {
  // Get user from Redux store //
  const userInfo = useSelector((state) => state.user.userInfo);

  // Redirect to login if not loggedin //
  return userInfo && !userInfo.isAdmin ? children : <Navigate to="/" />;
};

function App() {
  const userInfo = useSelector((state) => state.user.userInfo);
  // console.log(userInfo);
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          {userInfo?.isAdmin ? <AdminHeader /> : <Header />}
          <Routes>
            <Route path="/register" element={<UserRegister />} />
            <Route path="/login" element={<UserLogin />} />
            {userInfo?.isAdmin ? (
              <Route path="/" element={<AdminDashboard />} />
            ) : (
              <Route path="/" element={<ProductList />} />
            )}
            {userInfo?.isAdmin ? (
              <Route path="/product-form" element={<AddProduct />} />
            ) : (
              <></>
            )}
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route
              path="/product/review/:productId"
              element={<ProductReview />}
            />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />

            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
            <Route />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
