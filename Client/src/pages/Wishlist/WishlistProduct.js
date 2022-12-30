import React from "react";
import "./WishlistProduct.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbShoppingCartPlus } from "react-icons/tb";
import ThousandSeparator from "../../components/ThousandSeparator";
import { Link } from "react-router-dom";

function WishlistProduct(props) {
    const data = props.data;
    const showDeleteFunction = props.showDeleteFunction;
    const setProductId = props.setProductId;
    console.log("data: ", data);
    return (
        <div className="WishlistProduct">
            <Link
                to={`/product/${data.productId}`}
                style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
                <div className="wl-product-info c1">
                    <img
                        className="wl-product-image"
                        src={data.imageURL}
                        alt=""
                    />
                    <span className="wl-product-name">{data.nameProduct}</span>
                </div>

                <span className="wl-product-type c2">{data.color}</span>

                <span className="wl-product-price c3">
                    {data?.price && ThousandSeparator(data.price)} đ
                </span>
            </Link>
            <div className="wl-product-buttons c4">
                <button className="wl-product-cart-button">
                    <TbShoppingCartPlus className="wl-product-button-icon" />
                </button>
                <button
                    className="wl-product-remove-button"
                    onClick={() => {
                        setProductId(data.productId);
                        showDeleteFunction(true);
                    }}
                >
                    <RiDeleteBin6Line className="wl-product-button-icon" />
                </button>
            </div>
        </div>
    );
}

export default WishlistProduct;
