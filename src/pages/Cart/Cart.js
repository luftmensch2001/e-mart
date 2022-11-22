import React, { useState } from "react";
import "./Cart.css";
import productImg from "../../assets/images/products/1.png";
import CartProduct from "./CartProduct";

const products = [
    {
        image: productImg,
        name: "iPhone 14 Pro Max",
        quantity: 3,
        price: 28000000,
    },
    {
        image: productImg,
        name: "iPhone 14 Pro Max",
        quantity: 3,
        price: 28000000,
    },
    {
        image: productImg,
        name: "iPhone 14 Pro Max",
        quantity: 3,
        price: 28000000,
    },
    {
        image: productImg,
        name: "iPhone 14 Pro Max",
        quantity: 3,
        price: 28000000,
    },
];

const Cart = () => {
    const [data, setData] = useState(products);
    return (
        <div className="Cart content">
            <span className="page-title title-text">Giỏ Hàng</span>
            <span className="total-count-label">
                Hiện có
                <span className="green-text"> {products.length} sản phẩm </span>
                trong Giỏ hàng của bạn
            </span>
            <div className="cart-zone">
                <div className="cart-products-container">
                    <div className="cart-product-heading">
                        <span className="c1">Sản phẩm</span>
                        <span className="c2">Giá</span>
                        <span className="c3">Số lượng</span>
                        <span className="c4">Tổng cộng</span>
                        <span className="c5"></span>
                    </div>
                    <div className="cart-product-list">
                        {data.map((item) => (
                            <CartProduct data={item} />
                        ))}
                    </div>
                </div>
                <div className="checkout-zone"></div>
            </div>
        </div>
    );
};

export default Cart;
