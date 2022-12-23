import React from "react";
import "./Recommend.css";

import i4stars from "../assets/images/reviews/4.png";

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
        type: "Điện thoại",
        salePrice: 38990000,
    },
    {
        name: "Sách Dám mơ lớn, đừng hoài phí tuổi trẻ - Lư Tư Hạo",
        image: pi8,
        price: 96000,
        type: "Sách",
        salePrice: 132000,
    },

    {
        name: "Đồng Hồ Thông Minh Xiaomi Mi Watch",
        image: pi3,
        price: 350000,
        type: "Đồng hồ",
        salePrice: 389900,
    },
    {
        name: "Giày Da Thể Thao Nam Cao Cấp - Bảo Hành 12 Tháng",
        image: pi4,
        price: 450000,
        type: "Giày nam",
        salePrice: 489000,
    },
    {
        name: "Kem Chống Nắng La Roche-Posay Kiểm Soát Dầu SPF50+",
        image: pi5,
        price: 350000,
        type: "Mỹ phẩm",
        salePrice: 389000,
    },
    {
        name: "Bình Giữ Nhiệt Lock&Lock 750ML Chính hãng",
        image: pi2,
        price: 169000,
        type: "Sức khoẻ",
        salePrice: 230000,
    },
    {
        name: "Nước Hoa Pháp Queen Cao Cấp 50ml - Lưu hương 24h",
        image: pi7,
        price: 2500000,
        type: "Mỹ phẩm",
        salePrice: 3690000,
    },
    {
        name: "Laptop Huawei Matebook D14 - SSD 512GB",
        image: pi6,
        price: 15000000,
        type: "Laptop",
        salePrice: 18990000,
    },
    {
        name: "Sách Dám mơ lớn, đừng hoài phí tuổi trẻ - Lư Tư Hạo",
        image: pi8,
        price: 96000,
        type: "Sách",
        salePrice: 132000,
    },
];

function Recommend() {
    return (
        <div className="Recommend content">
            <div className="recommend-block">
                <span className="title-text recommend-title">
                    Best <span className="green-text">Seller</span>
                </span>
                <div className="recommend-product-container">
                    {data.slice(0, 3).map((item) => (
                        <div className="recommend-product">
                            <img
                                className="recommend-product-img"
                                alt=""
                                src={item.image}
                            />
                            <div className="recommend-product-info">
                                <span className="recommend-product-name">
                                    {item.name}
                                </span>
                                <img
                                    className="recommend-product-stars"
                                    alt=""
                                    src={i4stars}
                                />
                                <span className="recommend-category">
                                    {item.type}
                                </span>
                                <div className="recommend-price-container">
                                    <span className="recommend-price">
                                        {ThousandSeparator(item.price)}
                                    </span>
                                    <span className="recommend-old-price">
                                        {ThousandSeparator(item.salePrice)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="recommend-block">
                <span className="title-text recommend-title">
                    Mới <span className="green-text">Nhất</span>
                </span>
                <div className="recommend-product-container">
                    {data.slice(3, 6).map((item) => (
                        <div className="recommend-product">
                            <img
                                className="recommend-product-img"
                                alt=""
                                src={item.image}
                            />
                            <div className="recommend-product-info">
                                <span className="recommend-product-name">
                                    {item.name}
                                </span>
                                <img
                                    className="recommend-product-stars"
                                    alt=""
                                    src={i4stars}
                                />
                                <span className="recommend-category">
                                    {item.type}
                                </span>
                                <div className="recommend-price-container">
                                    <span className="recommend-price">
                                        {ThousandSeparator(item.price)}
                                    </span>
                                    <span className="recommend-old-price">
                                        {ThousandSeparator(item.salePrice)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="recommend-block">
                <span className="title-text recommend-title">
                    Giảm <span className="green-text">Giá Sâu</span>
                </span>
                <div className="recommend-product-container">
                    {data.slice(6).map((item) => (
                        <div className="recommend-product">
                            <img
                                className="recommend-product-img"
                                alt=""
                                src={item.image}
                            />
                            <div className="recommend-product-info">
                                <span className="recommend-product-name">
                                    {item.name}
                                </span>
                                <img
                                    className="recommend-product-stars"
                                    alt=""
                                    src={i4stars}
                                />
                                <span className="recommend-category">
                                    {item.type}
                                </span>
                                <div className="recommend-price-container">
                                    <span className="recommend-price">
                                        {ThousandSeparator(item.price)}
                                    </span>
                                    <span className="recommend-old-price">
                                        {ThousandSeparator(item.salePrice)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Recommend;
