import React from "react";
import "./WishlistProduct.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbShoppingCartPlus } from "react-icons/tb";

function WishlistProduct(props) {
    const data = props.data;
    console.log("data: ", data);

    return (
        <div className="WishlistProduct">
            <div className="wl-product-info c1">
                <img className="wl-product-image" src={data.image} />
                <span className="wl-product-name">{data.name}</span>
            </div>

            <span className="wl-product-type c2">{data.type}</span>

            <span className="wl-product-price c3">{data.price}</span>

            <div className="wl-product-buttons c4">
                <button className="wl-product-cart-button">
                    <TbShoppingCartPlus className="wl-product-button-icon" />
                </button>
                <button className="wl-product-remove-button">
                    <RiDeleteBin6Line className="wl-product-button-icon" />
                </button>
            </div>
        </div>
    );
}

export default WishlistProduct;
