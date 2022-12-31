import React, { useEffect, useState } from "react";
import "./Checkout.css";
import paypal from "../../assets/images/paypal.png";
import cod from "../../assets/images/cash-on-delivery.png";
import { BsCheckCircleFill } from "react-icons/bs";
import ThousandSeparator from "../../components/ThousandSeparator";
import Select from "react-select";
import AddressData from "../../assets/AddressData.json";

const Checkout = ({ products, total, discount }) => {
    const [orderFor, setOrderFor] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(0); // 0 is Paypal
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [fullName2, setFullName2] = useState("");
    const [email2, setEmail2] = useState("");
    const [phoneNumber2, setPhoneNumber2] = useState("");
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [ward, setWard] = useState("");
    const [street, setStreet] = useState("");
    const [note, setNote] = useState("");

    const [provinceOptions, setProvinceOptions] = useState([]);
    const [districtOptions, setDistrictOptions] = useState([]);
    const [wardOptions, setWardOptions] = useState([]);

    // Get Provinces Data
    useEffect(() => {
        let arr = [];
        for (let i = 0; i < AddressData.length; i++) {
            let option = {
                value: AddressData[i].Name,
                label: AddressData[i].Name,
            };
            arr.push(option);
        }
        setProvinceOptions(arr);
        setDistrict(null);
        setWard(null);
    }, []);

    // Get Districts Data
    useEffect(() => {
        for (let i = 0; i < AddressData.length; i++)
            if (AddressData[i].Name === province.value) {
                let arr = [];
                AddressData[i].Districts.forEach((element) => {
                    let option = {
                        value: element.Name,
                        label: element.Name,
                    };
                    arr.push(option);
                });
                setDistrictOptions(arr);
                break;
            }
        setWard(null);
    }, [province]);

    // Get Wards Data
    useEffect(() => {
        if (!district) return;

        for (let i = 0; i < AddressData.length; i++)
            if (AddressData[i].Name === province.value) {
                for (let j = 0; j < AddressData[i].Districts.length; j++) {
                    if (AddressData[i].Districts[j].Name === district) {
                        let arr = [];
                        AddressData[i].Districts[j].Wards.forEach((element) => {
                            let option = {
                                value: element.Name,
                                label: element.Name,
                            };
                            arr.push(option);
                        });
                        setWardOptions(arr);
                        break;
                    }
                }
                break;
            }
    }, [district]);

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
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div className="input-row">
                        <input
                            className="input-2"
                            type="email"
                            required="required"
                            placeholder="Địa chỉ E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className="input-2"
                            type="tel"
                            required="required"
                            placeholder="Số điện thoại"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
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
                                value={fullName2}
                                onChange={(e) => setFullName2(e.target.value)}
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
                                value={email2}
                                onChange={(e) => setEmail2(e.target.value)}
                            />
                            <input
                                className="input-2"
                                type="tel"
                                required="required"
                                placeholder="Số điện thoại người nhận"
                                value={phoneNumber2}
                                onChange={(e) =>
                                    setPhoneNumber2(e.target.value)
                                }
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
                        <Select
                            className="select-2"
                            defaultValue={null}
                            onChange={setProvince}
                            options={provinceOptions}
                            placeholder="Chọn tỉnh / thành phố"
                            isSearchable={true}
                            theme={(theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    primary: "var(--primary-color)",
                                },
                            })}
                        />
                        <Select
                            className="select-2"
                            defaultValue={null}
                            value={districtOptions.filter(function (option) {
                                return option.value === district;
                            })}
                            onChange={(e) => setDistrict(e.value)}
                            options={districtOptions}
                            placeholder="Chọn quận / huyện"
                            isSearchable={true}
                            theme={(theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    primary: "var(--primary-color)",
                                },
                            })}
                        />
                    </div>
                    <div className="input-row">
                        <Select
                            className="select-2"
                            defaultValue={null}
                            value={wardOptions.filter(function (option) {
                                return option.value === ward;
                            })}
                            onChange={(e) => setWard(e.value)}
                            options={wardOptions}
                            placeholder="Chọn xã / phường"
                            isSearchable={true}
                            theme={(theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    primary: "var(--primary-color)",
                                },
                            })}
                        />
                        <input
                            className="input-2"
                            type="text"
                            placeholder="Số nhà / đường"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                        />
                    </div>
                    <div className="input-row">
                        <textarea
                            placeholder="Ghi chú cho người bán"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />
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
                            Hoàn tất Đặt hàng
                        </button>
                    </div>
                </div>
                <div className="checkout-bill-container">
                    <div className="bill-product-container">
                        {products.map((item) => (
                            <div className="bill-product-item">
                                <div className="bill-product-info">
                                    <img
                                        className="bill-product-img"
                                        src={item.imageURL}
                                    />
                                    <div className="bill-product-detail">
                                        <div className="bill-product-name-wrapper">
                                            <span className="bill-product-name">
                                                {item.nameProduct}
                                            </span>
                                        </div>
                                        <span className="bill-product-quantity">
                                            Phân loại: {item.color}
                                        </span>
                                        <span className="bill-product-quantity">
                                            Số lượng: {item.count}
                                        </span>
                                    </div>
                                </div>
                                <span className="bill-product-total">
                                    {ThousandSeparator(item.price * item.count)}{" "}
                                    đ
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="bill-money-container">
                        <div className="bill-row">
                            <span className="label">Tổng tiền hàng</span>
                            <span className="value">
                                {ThousandSeparator(total)} đ
                            </span>
                        </div>
                        <div className="bill-row">
                            <span className="label">Phí vận chuyển</span>
                            <span className="value">Free</span>
                        </div>
                        <div className="bill-row">
                            <span className="label">Giảm giá</span>
                            <span className="value">
                                {ThousandSeparator(discount)} đ
                            </span>
                        </div>
                        <div className="bill-row">
                            <span className="label">Thành tiền</span>
                            <span
                                className="label"
                                style={{ fontSize: "1.7rem" }}
                            >
                                {ThousandSeparator(total - discount)} đ
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
