import React, { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import { HiOutlineRefresh } from "react-icons/hi";
import { BsArrowLeft, BsCartCheck } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa";
import AddToCart from "../../assets/images/illustrations/undraw_Add_to_cart_re_wrdo.png";

import pi1 from "../../assets/ExampleProduct/iPhone/1.png";
import pi2 from "../../assets/ExampleProduct/sach/2.jpg";
import pi3 from "../../assets/ExampleProduct/giay/1.jpg";
import pi4 from "../../assets/ExampleProduct/dongho/1.jpeg";

let products = [
    {
        image: pi1,
        name: "iPhone 14 Pro Max",
        type: "Space Black",
        quantity: 1,
        price: 31990000,
    },
    {
        image: pi2,
        name: "Sách Dám mơ lớn, đừng hoài phí tuổi trẻ - Lư Tư Hạo",
        type: "Bìa cứng",
        quantity: 3,
        price: 96000,
    },
    {
        image: pi3,
        name: "Giày Da Thể Thao Dành Cho Nam",
        type: "Size 42",
        quantity: 2,
        price: 540000,
    },
    {
        image: pi4,
        name: "Đồng Hồ Thông Minh Xiaomi Mi Watch",
        type: "Màu xanh",
        quantity: 1,
        price: 1350000,
    },
];

const Cart = () => {
    const [data, setData] = useState(products);
    if (data.length > 0)
        return (
            <div className="Cart content">
                <span className="page-title title-text">Giỏ Hàng</span>
                <span className="total-count-label">
                    Hiện có
                    <span className="green-text">
                        {" "}
                        {products.length} sản phẩm{" "}
                    </span>
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
                                <span className="checkout-value">
                                    28,000,000 đ
                                </span>
                            </div>
                            <div className="checkout-row">
                                <span className="checkout-label">
                                    Phí vận chuyển:
                                </span>
                                <span className="checkout-value">Free</span>
                            </div>
                            <div className="checkout-row">
                                <span className="checkout-label">
                                    Giảm giá:
                                </span>
                                <span className="checkout-value">
                                    120,000 đ
                                </span>
                            </div>
                            <div
                                className="checkout-row"
                                style={{ borderBottom: "none" }}
                            >
                                <span className="checkout-label">
                                    Thành tiền:
                                </span>
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
    else return <EmptyCart />;
};

const EmptyCart = () => {
    return (
        <div className="EmptyCart content">
            <img src={AddToCart} alt="" />
            <span className="title-text">
                Giỏ Hàng <span className="green-text">Đang Trống</span>
            </span>
            <span className="text-content">
                Hãy lựa chọn và thêm sản phẩm bạn ưng ý vào giỏ hàng
            </span>
            <Link to="/">
                <button
                    className="cart-continue-shopping-button"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <BsArrowLeft className="cart-button-icon" />
                    Tiếp tục mua sắm
                </button>
            </Link>
        </div>
    );
};

export default Cart;
