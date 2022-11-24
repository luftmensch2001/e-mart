import React, { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import productImg from "../../assets/images/products/1.png";
import CartProduct from "./CartProduct";
import { HiOutlineRefresh } from "react-icons/hi";
import { BsArrowLeft, BsCartCheck } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa";

let products = [
    {
        image: productImg,
        name: "iPhone 14 Pro Max",
        type: "Màu xanh",
        quantity: 1,
        price: 28000000,
    },
    {
        image: productImg,
        name: "iPhone 14 Pro Max",
        type: "Màu đỏ",
        quantity: 3,
        price: 28000000,
    },
    {
        image: productImg,
        name: "iPhone 14 Pro Max",
        type: "Màu xanh",
        quantity: 2,
        price: 28000000,
    },
    {
        image: productImg,
        name: "iPhone 14 Pro Max",
        type: "Màu tím",
        quantity: 1,
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
                    <div className="cart-bottom-buttons">
                        <Link to="/">
                            <button
                                className="cart-continue-shopping-button"
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                <BsArrowLeft className="cart-button-icon" />
                                Tiếp tục mua sắm
                            </button>
                        </Link>
                        <button className="cart-update-button">
                            <HiOutlineRefresh
                                className="cart-button-icon"
                                style={{ color: "#FFF" }}
                            />
                            Cập nhật Giỏ
                        </button>
                    </div>
                </div>
                <div className="checkout-zone">
                    <div className="bill-wrapper">
                        <div className="checkout-row">
                            <span className="checkout-label">
                                Tổng tiền hàng:
                            </span>
                            <span className="checkout-value">28,000,000 đ</span>
                        </div>
                        <div className="checkout-row">
                            <span className="checkout-label">
                                Phí vận chuyển:
                            </span>
                            <span className="checkout-value">Free</span>
                        </div>
                        <div className="checkout-row">
                            <span className="checkout-label">Giảm giá:</span>
                            <span className="checkout-value">120,000 đ</span>
                        </div>
                        <div
                            className="checkout-row"
                            style={{ borderBottom: "none" }}
                        >
                            <span className="checkout-label">Thành tiền:</span>
                            <span className="checkout-value-total">
                                27,880,000 đ
                            </span>
                        </div>
                        <Link to="/checkout">
                            <button
                                className="checkout-button primary-button"
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                <BsCartCheck className="checkout-button-icon" />
                                Thanh toán
                            </button>
                        </Link>
                    </div>
                    <div className="coupon-wrapper">
                        <input
                            className="coupon-input"
                            type="text"
                            placeholder="Mã giảm giá"
                        />
                        <button className="coupon-apply-button primary-button">
                            <FaMoneyBillWave className="coupon-icon" />
                            Áp dụng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
