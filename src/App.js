import "./App.css";
import { React, useState } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/LoginRegister/Login";
import Register from "./pages/LoginRegister/Register";
import Account from "./pages/Account/Account";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet, Routes, Route, useLocation } from "react-router-dom";
import BuyOrdersTab from "./pages/Account/BuyOrdersTab";
import SellOrdersTab from "./pages/Account/SellOrdersTab";
import StoreTab from "./pages/Account/StoreTab";
import ProfileTab from "./pages/Account/ProfileTab";
import AccountManagement from "./pages/Account/AccountManegement";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";

function App() {
    const location = useLocation().pathname;
    const hideHeaderFooter = location === "/login" || location === "/register";
    console.log("location: ", location);
    console.log("hideHeaderFooter: ", hideHeaderFooter);

    return (
        <div className="App">
            {!hideHeaderFooter && <NavBar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/account" element={<Account tabIndex={1} />}>
                    <Route
                        path="/account/buy-orders"
                        element={<BuyOrdersTab />}
                    />
                    <Route
                        path="/account/sell-orders"
                        element={<SellOrdersTab />}
                    />
                    <Route path="/account/store" element={<StoreTab />} />
                    <Route path="/account/profile" element={<ProfileTab />} />
                    <Route
                        path="/account/account-management"
                        element={<AccountManagement />}
                    />
                </Route>
            </Routes>
            {!hideHeaderFooter && <Footer />}
        </div>
    );
}

export default App;
