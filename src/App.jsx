import React, { useState } from "react";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import LoginModel from "./components/signupLogin/LoginModel";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./components/products/ProductsPage";
import DetaildProduct from "./components/products/DetaildProduct";
import AccountPrivacy from "./components/account/AccountPrivacy";
import GiftCards from "./components/account/GiftCards";
import MyOrder from "./components/account/MyOrder";
import Addresses from "./components/account/Addresses";
import Accounts from "./components/account/Accounts";
import MyCart from "./components/navbar/MyCart";
import Payment from "./components/account/Payment";
import { useLocation } from "react-router-dom";
import AllProducts from "./components/home/AllProducts";
import ProtectedRoute from "./components/signupLogin/ProtectedRoute";
import NotFound from "./components/signupLogin/NotFound";
import Search from "./components/navbar/Search";
const App = () => {
  const [showLogin, setshowLogin] = useState(false);
  const [productBill, setProductBill] = useState(false);
  const location = useLocation();
  const shouldHideFooter = [
    "/accounts/myorder",
    "/accounts/address",
    "/accounts/accountprivacy",
    "/accounts/giftcards",
    "/payment",
    "/search"
  ].some((path) => location.pathname.startsWith(path));

  // const shouldHideFooter =
  //   404 ||
  //   hideFooterRoutes.some((route) => location.pathname.startsWith(route));
  // console.log("Current Path:", location.pathname);
  // console.log("Footer hide:", shouldHideFooter);

  return (
    <div>
      <Navbar
        onClickShow={() => setshowLogin(true)}
        onClickBill={() => setProductBill(true)}
      />
      {showLogin && <LoginModel onClose={() => setshowLogin(false)} />}
      {productBill && <MyCart onRemove={() => setProductBill(false)} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductsPage />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route
          path="/products/:category/products/DetaildProduct/:id"
          element={<DetaildProduct />}
        />
        <Route
          path="/products/DetaildProduct/:id"
          element={<DetaildProduct />}
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute onLoginRequired={() => setshowLogin(true)}>
              <Payment />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/search" element={<Search />} />

        <Route
          path="/accounts"
          element={
            <ProtectedRoute onLoginRequired={() => setshowLogin(true)}>
              <Accounts />
            </ProtectedRoute>
          }
        >
          <Route
            path="myorder"
            element={
              <ProtectedRoute onLoginRequired={() => setshowLogin(true)}>
                <MyOrder />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="address"
            element={
              <ProtectedRoute onLoginRequired={() => setshowLogin(true)}>
                <Addresses />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="giftcards"
            element={
              <ProtectedRoute onLoginRequired={() => setshowLogin(true)}>
                <GiftCards />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="accountprivacy"
            element={
              <ProtectedRoute onLoginRequired={() => setshowLogin(true)}>
                <AccountPrivacy />{" "}
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>

      {!shouldHideFooter && <Footer />}

    </div>
  );
};

export default App;
