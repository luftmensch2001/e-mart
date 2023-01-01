import React, { useEffect, useState } from "react";
import "../Checkout/Checkout.css";
import "./OrderDetail.css";
import paypal from "../../assets/images/paypal.png";
import cod from "../../assets/images/cash-on-delivery.png";
import { BsCheckCircleFill } from "react-icons/bs";
import ThousandSeparator from "../../components/ThousandSeparator";
import Select from "react-select";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

const OrderDetail = ({ isBuyOrder }) => {
    const [isLoaded, setIsLoaded] = useState(true);
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
    const [products, setProducts] = useState();
    const [billData, setBillData] = useState();

    const billId = useParams().billId;

    useEffect(() => {
        setIsLoaded(false);
        let counter = 0;
        // Get Products in bill
        axios
            .get("http://localhost:5000/api/productInBills/", {
                params: {
                    billId: billId,
                },
            })
            .then((res) => {
                setProducts(res.data.productInBill);
                console.log("products: ", products);
                let productsArr = res.data.productInBill;
                productsArr.forEach((product) => {
                    axios
                        .get("http://localhost:5000/api/products/byProductId", {
                            params: {
                                productId: product.productId,
                            },
                        })
                        .then((res) => {
                            console.log("res one product: ", res);
                            product.nameProduct = res.data.product.nameProduct;
                            product.imageURL = res.data.product.imageURLs[0];
                            product.price = res.data.product.price;
                            setProducts(productsArr.slice(0));
                        })
                        .catch((err) => console.log(err));
                });
                counter++;
                if (counter === 2) setIsLoaded(true);
            })
            .catch((err) => console.log(err));
        // Get Bill data
        axios
            .get("http://localhost:5000/api/bills/byBillId", {
                params: {
                    billId: billId,
                },
            })
            .then((res) => {
                setBillData(res.data.bill);
                console.log("bill: ", res.data.bill);
                counter++;
                if (counter === 2) setIsLoaded(true);
            })
            .catch((err) => console.log(err));
    }, [billId]);

    if (!isLoaded) return <Loading />;

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
                            value={billData?.fullName}
                            readOnly={true}
                        />
                    </div>
                    <div className="input-row">
                        <input
                            className="input-2"
                            type="email"
                            value={billData?.email}
                            readOnly={true}
                        />
                        <input
                            className="input-2"
                            type="tel"
                            value={billData?.phoneNumber}
                            readOnly={true}
                        />
                    </div>
                    <div
                        className="input-row"
                        style={{ justifyContent: "flex-start" }}
                    >
                        <input
                            type="checkbox"
                            checked={billData?.orderFor}
                            className="order-for-checkbox"
                            readOnly={true}
                        />
                        <span>Đặt hàng hộ</span>
                    </div>
                    {billData?.orderFor && (
                        <div className="input-row">
                            <input
                                className="input-1"
                                type="text"
                                value={billData.fullName2}
                                readOnly={true}
                            />
                        </div>
                    )}
                    {billData?.orderFor && (
                        <div className="input-row">
                            <input
                                className="input-2"
                                type="email"
                                value={billData.email2}
                                readOnly={true}
                            />
                            <input
                                className="input-2"
                                type="tel"
                                value={billData.phoneNumber2}
                                readOnly={true}
                            />
                        </div>
                    )}
                    {billData?.orderFor && (
                        <span className="order-for-desc">
                            * Chúng tôi cũng sẽ gửi thông tin và trạng thái đơn
                            hàng đến E-mail của người nhận
                        </span>
                    )}
                    <div className="input-row">
                        <input
                            className="input-2"
                            type="email"
                            value={billData?.city}
                            readOnly={true}
                        />
                        <input
                            className="input-2"
                            type="tel"
                            value={billData?.district}
                            readOnly={true}
                        />
                    </div>
                    <div className="input-row">
                        <input
                            className="input-2"
                            type="email"
                            value={billData?.ward}
                            readOnly={true}
                        />
                        <input
                            className="input-2"
                            type="tel"
                            value={billData?.detail}
                            readOnly={true}
                        />
                    </div>
                    <div className="input-row">
                        <textarea
                            placeholder="Ghi chú cho người bán"
                            value={billData?.note}
                            readOnly={true}
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
                            {billData?.paymentMethod === "Paypal" && (
                                <BsCheckCircleFill className="icon" />
                            )}
                        </div>
                        <div
                            className="payment-img-container"
                            onClick={() => setPaymentMethod(1)}
                        >
                            <img className="payment-img" src={cod} />
                            {billData?.paymentMethod === "COD" && (
                                <BsCheckCircleFill className="icon" />
                            )}
                        </div>
                    </div>
                </div>
                <div className="checkout-bill-container">
                    <div className="bill-product-container">
                        {products?.map((item) => (
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
                                {billData?.totalPrice
                                    ? ThousandSeparator(billData.totalPrice)
                                    : "0"}{" "}
                                đ
                            </span>
                        </div>
                        <div className="bill-row">
                            <span className="label">Phí vận chuyển</span>
                            <span className="value">Free</span>
                        </div>
                        <div className="bill-row">
                            <span className="label">Giảm giá</span>
                            <span className="value">
                                {billData?.discount
                                    ? ThousandSeparator(billData.discount)
                                    : 0}{" "}
                                đ
                            </span>
                        </div>
                        <div className="bill-row">
                            <span className="label">Thành tiền</span>
                            <span
                                className="label"
                                style={{ fontSize: "1.7rem" }}
                            >
                                {billData?.totalPrice
                                    ? ThousandSeparator(
                                          billData.totalPrice -
                                              billData.discount
                                      )
                                    : "0"}{" "}
                                đ
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
