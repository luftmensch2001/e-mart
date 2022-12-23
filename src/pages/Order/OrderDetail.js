import React, { useState } from "react";
import "./OrderDetail.css";
import "../Checkout/Checkout.css";
import paypal from "../../assets/images/paypal.png";
import cod from "../../assets/images/cash-on-delivery.png";
import { BsCheckCircleFill } from "react-icons/bs";

import pi1 from "../../assets/ExampleProduct/iPhone/1.png";
import pi2 from "../../assets/ExampleProduct/sach/2.jpg";
import pi3 from "../../assets/ExampleProduct/giay/1.jpg";
import pi4 from "../../assets/ExampleProduct/dongho/1.jpeg";
import ThousandSeparator from "../../components/ThousandSeparator";

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

const OrderDetail = ({ isBuyOrder }) => {
    const [orderFor, setOrderFor] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(0); // 0 is Paypal
    const [data, setData] = useState(products);

    isBuyOrder = false;

    return (
        <div className="Checkout OrderDetail content">
            <span className="page-title title-text">
                Thông tin <span className="green-text">Đơn hàng</span>
            </span>
            <div className="checkout-container">
                <div className="checkout-info-container">
                    <div className="input-row">
                        <input
                            className="input-1"
                            type="text"
                            required="required"
                            placeholder="Họ và tên"
                            value={"Trần Đoàn Phương"}
                        />
                    </div>
                    <div className="input-row">
                        <input
                            className="input-2"
                            type="email"
                            required="required"
                            value={"phuong@gmail.com"}
                            placeholder="Địa chỉ E-mail"
                        />
                        <input
                            className="input-2"
                            type="tel"
                            required="required"
                            value={"0905092378"}
                            placeholder="Số điện thoại"
                        />
                    </div>
                    <div
                        className="input-row"
                        style={{ justifyContent: "flex-start" }}
                    >
                        <input
                            type="checkbox"
                            checked={orderFor}
                            className="order-for-checkbox"
                            onClick={() => setOrderFor(!orderFor)}
                        />
                        <span>Đặt hàng hộ</span>
                    </div>
                    {orderFor && (
                        <div className="input-row">
                            <input
                                className="input-1"
                                type="text"
                                required="required"
                                placeholder="Họ và tên người nhận"
                            />
                        </div>
                    )}
                    {orderFor && (
                        <div className="input-row">
                            <input
                                className="input-2"
                                type="email"
                                required="required"
                                placeholder="Địa chỉ E-mail người nhận"
                            />
                            <input
                                className="input-2"
                                type="number"
                                required="required"
                                placeholder="Số điện thoại người nhận"
                            />
                        </div>
                    )}
                    {orderFor && (
                        <span className="order-for-desc">
                            * Chúng tôi cũng sẽ gửi thông tin và trạng thái đơn
                            hàng đến E-mail của người nhận
                        </span>
                    )}
                    <div className="input-row">
                        <select className="select-2">
                            <option>Chọn tỉnh / thành phố</option>
                            <option selected={true}>
                                Thành Phố Hồ Chí Minh
                            </option>
                        </select>
                        <select className="select-2">
                            <option>Chọn quận / huyện</option>
                            <option selected={true}>Quận Bình Thạnh</option>
                        </select>
                    </div>
                    <div className="input-row">
                        <select className="select-2">
                            <option>Chọn xã / phường</option>/option>
                            <option selected={true}>Phường 25</option>
                        </select>
                        <input
                            className="input-2"
                            type="text"
                            placeholder="Số nhà / đường"
                            value={"Số 120, Đường Đinh Bộ Lĩnh"}
                        />
                    </div>
                    <div className="input-row">
                        <textarea placeholder="Ghi chú cho người bán" />
                    </div>
                    <div className="input-row">
                        <span style={{ marginTop: "10px" }}>
                            Chọn phương thức thanh toán:
                        </span>
                    </div>
                    <div className="input-row">
                        <div
                            className="payment-img-container"
                            onClick={() => setPaymentMethod(0)}
                        >
                            <img className="payment-img" src={paypal} />
                            {paymentMethod === 0 && (
                                <BsCheckCircleFill className="icon" />
                            )}
                        </div>
                        <div
                            className="payment-img-container"
                            onClick={() => setPaymentMethod(1)}
                        >
                            <img className="payment-img" src={cod} />
                            {paymentMethod === 1 && (
                                <BsCheckCircleFill className="icon" />
                            )}
                        </div>
                    </div>
                    {isBuyOrder ? (
                        <div className="input-row button-wrapper">
                            <button className="primary-button">
                                Đã Nhận Hàng
                            </button>
                            <button className="primary-button">
                                Huỷ Đơn Hàng
                            </button>
                        </div>
                    ) : (
                        <div className="input-row button-wrapper">
                            <button className="primary-button">
                                Chấp nhận Đơn Hàng
                            </button>
                            <button className="primary-button">
                                Từ Chối Đơn Hàng
                            </button>
                        </div>
                    )}
                </div>
                <div className="checkout-bill-container">
                    <div className="bill-product-container">
                        {data.map((item) => (
                            <div className="bill-product-item">
                                <div className="bill-product-info">
                                    <img
                                        className="bill-product-img"
                                        src={item.image}
                                    />
                                    <div className="bill-product-detail">
                                        <span className="bill-product-name">
                                            {item.name}
                                        </span>
                                        <span className="bill-product-quantity">
                                            Số lượng: {item.quantity}
                                        </span>
                                    </div>
                                </div>
                                <span className="bill-product-total">
                                    {ThousandSeparator(
                                        item.price * item.quantity
                                    )}{" "}
                                    đ
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="bill-money-container">
                        <div className="bill-row">
                            <span className="label">Tổng tiền hàng</span>
                            <span className="value">28,000,000 đ</span>
                        </div>
                        <div className="bill-row">
                            <span className="label">Phí vận chuyển</span>
                            <span className="value">Free</span>
                        </div>
                        <div className="bill-row">
                            <span className="label">Giảm giá</span>
                            <span className="value">1,200,000 đ</span>
                        </div>
                        <div className="bill-row">
                            <span className="label">Thành tiền</span>
                            <span
                                className="label"
                                style={{ fontSize: "1.7rem" }}
                            >
                                27,880,000 đ
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
