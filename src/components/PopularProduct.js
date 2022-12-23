import React from "react";
import "./PopularProduct.css";
import { BiCategory } from "react-icons/bi";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

import i5stars from "../assets/images/reviews/5.png";

import pi1 from "../assets/ExampleProduct/iPhone/1.png";
import pi2 from "../assets/ExampleProduct/binhgiunhiet/binh-giu-nhiet-lock-lock-name-tumbler-lhc4125b-7.jpg";
import pi3 from "../assets/ExampleProduct/dongho/1.jpeg";
import pi4 from "../assets/ExampleProduct/giay/1.jpg";
import pi5 from "../assets/ExampleProduct/kemchongnang/00013491-kem-chong-nang-la-roche-posay-kiem-soat-dau-spf50-6561-634c_large.webp";
import pi6 from "../assets/ExampleProduct/laptop/gsmarena001-1653379584969-16533795856231394043061.webp";
import pi7 from "../assets/ExampleProduct/nuochoa/6.jpg";
import pi8 from "../assets/ExampleProduct/sach/2.jpg";
import ThousandSeparator from "./ThousandSeparator";

const data = [
    {
        name: "Apple iPhone 14 Pro Max 1TB Chính Hãng",
        image: pi1,
        price: 35000000,
        salePrice: 38990000,
    },
    {
        name: "Sách Dám mơ lớn, đừng hoài phí tuổi trẻ - Lư Tư Hạo",
        image: pi8,
        price: 96000,
        salePrice: 132000,
    },

    {
        name: "Đồng Hồ Thông Minh Xiaomi Mi Watch",
        image: pi3,
        price: 350000,
        salePrice: 389900,
    },
    {
        name: "Giày Da Thể Thao Nam Cao Cấp - Bảo Hành 12 Tháng",
        image: pi4,
        price: 450000,
        salePrice: 489000,
    },
    {
        name: "Kem Chống Nắng La Roche-Posay Kiểm Soát Dầu SPF50+",
        image: pi5,
        price: 350000,
        salePrice: 389000,
    },
    {
        name: "Bình Giữ Nhiệt Lock&Lock 750ML Chính hãng",
        image: pi2,
        price: 169000,
        salePrice: 230000,
    },
    {
        name: "Nước Hoa Pháp Queen Cao Cấp 50ml - Lưu hương 24h",
        image: pi7,
        price: 2500000,
        salePrice: 3690000,
    },
    {
        name: "Laptop Huawei Matebook D14 - SSD 512GB",
        image: pi6,
        price: 15000000,
        salePrice: 18990000,
    },
];

function PopularProduct() {
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
                        <option value={"Thời trang nam"}>Thời trang nam</option>
                        <option value={"Thời trang nữ"}>Thời trang nữ</option>
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
            <div className="product-list">
                {data.map((item) => (
                    <div className="product-item">
                        <img className="product-img" src={item.image} alt="" />
                        <div className="product-info">
                            <p className="product-name">{item.name}</p>
                            <div className="product-star">
                                <img src={i5stars} alt="" />
                                <span>(4.0)</span>
                            </div>
                            <div className="product-price-container">
                                <span className="product-sale-price">
                                    {ThousandSeparator(item.price)}
                                </span>
                                <span className="product-old-price">
                                    {ThousandSeparator(item.salePrice)}
                                </span>
                            </div>
                            <div className="product-buttons">
                                <button className="product-add-to-cart-button">
                                    <AiOutlineShoppingCart className="product-add-to-cart-icon" />
                                    Thêm Vào Giỏ
                                </button>
                                <button className="product-add-to-wishlist-button">
                                    <AiOutlineHeart className="product-add-to-wishlist-icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PopularProduct;
