import React, { useState, useEffect } from "react";
import "./PopularProduct.css";
import { BiCategory } from "react-icons/bi";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

import ThousandSeparator from "./ThousandSeparator";
import Loading from "./Loading";
import GetStarImage from "./GetStarImage";
import axios from "axios";

function PopularProduct() {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState();
    const [widthPercent, setWidthPercent] = useState(100);
    const [widthPercentItem, setWidthPercentItem] = useState(22);

    useEffect(() => {
        setIsLoaded(false);
        axios
            .get("http://localhost:5000/api/products/allPopulate", {
                params: {
                    count: 8,
                    accountId: localStorage.getItem("accountID"),
                },
            })
            .then((res) => {
                if (res.data.products.length === 2) {
                    setWidthPercent(60);
                    setWidthPercentItem(40);
                } else if (res.data.products.length === 6) {
                    setWidthPercentItem(25.1);
                }
                setData(res.data.products);
                console.log("res.data.products: ", res.data.products);
                setIsLoaded(true);
            })
            .catch((err) => console.log(err));
    }, []);

    if (isLoaded)
        return (
            <div className="PopularProduct content">
                <div className="popular-head">
                    <p className="title-text">
                        Sản phẩm <span className="green-text">Phổ biến</span>
                    </p>
                    <div className="popular-filter">
                        <BiCategory className="popular-filter-icon" />
                        <select className="popular-filter-selector">
                            <option value={"All"}>Tất cả danh mục</option>
                            <option value={"Điện thoại"}>Điện thoại</option>
                            <option value={"Laptop"}>Laptop</option>
                            <option value={"Thời trang nam"}>
                                Thời trang nam
                            </option>
                            <option value={"Thời trang nữ"}>
                                Thời trang nữ
                            </option>
                            <option value={"Trang sức"}>Trang sức</option>
                            <option value={"Thiết bị điện tử"}>
                                Thiết bị điện tử
                            </option>
                            <option value={"Nhà bếp"}>Nhà bếp</option>
                            <option value={"Giày nam"}>Giày nam</option>
                            <option value={"Giày nữ"}>Giày nữ</option>
                            <option value={"Sách"}>Sách</option>
                            <option value={"Đồng hồ"}>Đồng hồ</option>
                            <option value={"Cho bé"}>Cho bé</option>
                            <option value={"Sức khoẻ"}>Sức khoẻ</option>
                            <option value={"Mỹ phẩm"}>Mỹ phẩm</option>
                            <option value={"Dụng cụ gia đình"}>
                                Dụng cụ gia đình
                            </option>
                            <option value={"Khác"}>Khác</option>
                        </select>
                    </div>
                </div>
                <div
                    className="product-list"
                    style={{ width: `${widthPercent}%` }}
                >
                    {data.map((item) => (
                        <ProductCard
                            item={item}
                            widthPercentItem={widthPercentItem}
                        />
                    ))}
                </div>
            </div>
        );
    else return <Loading />;
}

function ProductCard({ item, widthPercentItem }) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="product-item" style={{ width: `${widthPercentItem}%` }}>
            <img className="product-img" src={item.imageURLs[0]} alt="" />
            <div className="product-info">
                <div className="product-name-wrapper">
                    <p className="product-name">{item.nameProduct}</p>
                </div>
                <div className="product-star">
                    <img src={GetStarImage(item.countStar)} alt="" />
                    <span>
                        ({Math.round(parseFloat(item.countStar) * 10) / 10})
                    </span>
                </div>
                <div className="product-price-container">
                    <span className="product-sale-price">
                        {ThousandSeparator(item.price)} đ
                    </span>
                    <span className="product-old-price">
                        {item.salePrice > 0
                            ? ThousandSeparator(item.salePrice) + " đ"
                            : ""}
                    </span>
                </div>
                <div className="product-buttons">
                    <button className="product-add-to-cart-button">
                        <AiOutlineShoppingCart className="product-add-to-cart-icon" />
                        Thêm Vào Giỏ
                    </button>
                    <div className="add-to-wishlist-wrapper">
                        <input
                            type="checkbox"
                            checked={isFavorite}
                            id="favorite"
                            name="favorite-checkbox"
                            value="favorite-button"
                            className="atw-input"
                        />
                        <label
                            for="favorite"
                            className="container"
                            onClick={() => setIsFavorite(!isFavorite)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                }}
                                className="feather feather-heart"
                            >
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularProduct;
