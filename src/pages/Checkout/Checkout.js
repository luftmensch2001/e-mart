import React, { useState } from "react";
import "./Checkout.css";
import paypal from "../../assets/images/paypal.png";
import cod from "../../assets/images/cash-on-delivery.png";
import { BsCheckCircleFill } from "react-icons/bs";

const Checkout = () => {
    const [orderFor, setOrderFor] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(0); // 0 is Paypal
    return (
        <div className="Checkout content">
            <span className="page-title title-text">
                Thông tin <span className="green-text">Thanh toán</span>
            </span>
            <span className="title-desc">
                Nhập thông tin để hoàn tất đặt hàng
            </span>
            <div className="checkout-container">
                <div className="checkout-info-container">
                    <div className="input-row">
                        <input
                            className="input-1"
                            type="text"
                            required="required"
                            placeholder="Họ và tên"
                        />
                    </div>
                    <div className="input-row">
                        <input
                            className="input-2"
                            type="email"
                            required="required"
                            placeholder="Địa chỉ E-mail"
                        />
                        <input
                            className="input-2"
                            type="number"
                            required="required"
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
                        </select>
                        <select className="select-2">
                            <option>Chọn quận / huyện</option>
                        </select>
                    </div>
                    <div className="input-row">
                        <select className="select-2">
                            <option>Chọn xã / phường</option>/option>
                        </select>
                        <input
                            className="input-2"
                            type="text"
                            placeholder="Số nhà / đường"
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
                    <div className="input-row">
                        <button className="complete-button primary-button">
                            Hoàn tất đặt hàng
                        </button>
                    </div>
                </div>
                <div className="checkout-bill-container"></div>
            </div>
        </div>
    );
};

export default Checkout;
