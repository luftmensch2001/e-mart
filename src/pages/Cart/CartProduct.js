import React, { useState } from "react";
import "./CartProduct.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";

const CartProduct = ({ data }) => {
    const [quantity, setQuantity] = useState(data.quantity);

    const UpQuantityOnClick = () => {
        setQuantity(quantity + 1);
    };
    const DownQuantityOnClick = () => {
        if (quantity <= 1) {
            toast.error("Số lượng tối thiểu là 1", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        setQuantity(quantity - 1);
    };

    const QuantityInputOnChange = (event) => {
        console.log(event.target.value);
        if (event.target.value === "-") return;
        if (event.target.value !== "" && event.target.value < 1) return;
        setQuantity(event.target.value * 1);
    };

    return (
        <div className="CartProduct">
            <div className="cart-product-info">
                <img className="cart-product-img" src={data.image} />
                <span className="cart-product-name">{data.name}</span>
            </div>
            <span className="cart-product-price">{data.price} đ</span>
            <div className="cart-product-quantity">
                <div style={{ position: "relative", width: "80px" }}>
                    <input
                        type="number"
                        value={quantity}
                        onChange={QuantityInputOnChange}
                    />
                    <button
                        className="cart-up-quantity-button"
                        onClick={UpQuantityOnClick}
                    >
                        <IoIosArrowUp className="cart-quantity-icon" />
                    </button>
                    <button
                        className="cart-down-quantity-button"
                        onClick={DownQuantityOnClick}
                    >
                        <IoIosArrowDown className="cart-quantity-icon" />
                    </button>
                </div>
            </div>
            <span className="cart-product-total">
                {data.price * quantity} đ
            </span>
            <div className="cart-product-delete">
                <button>
                    <RiDeleteBin6Line className="cart-product-delete-icon" />
                </button>
            </div>
        </div>
    );
};

export default CartProduct;
