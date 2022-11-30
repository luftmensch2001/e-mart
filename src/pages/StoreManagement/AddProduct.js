import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./AddProduct.css";

const AddProduct = () => {
    const [types, setTypes] = useState([
        { name: "Màu xanh", id: 1 },
        { name: "Màu vàng", id: 2 },
        { name: "Màu đỏ", id: 1 },
    ]);
    return (
        <div className="AddProduct content">
            <span className="title-text">
                Thêm <span className="green-text">Sản Phẩm</span>
            </span>
            <div className="add-product-wrapper">
                <div className="product-info-container">
                    <div className="product-info-row">
                        <span className="product-info-label">
                            Tên sản phẩm:
                        </span>
                        <input
                            className="product-info-input"
                            type="text"
                            placeholder="Nhập tên sản phẩm"
                        />
                    </div>
                    <div className="product-info-row">
                        <span className="product-info-label">Danh mục:</span>
                        <select
                            className="product-info-input"
                            style={{
                                width: "fit-content",
                                minWidth: "35%",
                                cursor: "pointer",
                            }}
                        >
                            <option>Điện thoại</option>
                            <option>Laptop</option>
                            <option>Mỹ phẩm</option>
                            <option>Thời trang nam</option>
                            <option>Sách</option>
                        </select>
                    </div>
                    <div className="product-info-row">
                        <span className="product-info-label">
                            Giá <span>(VNĐ)</span>:
                        </span>
                        <input className="product-info-input" type="number" />
                    </div>
                    <div className="product-info-row-detail">
                        <span className="product-info-label">
                            Mô tả sản phẩm:
                        </span>
                        <textarea placeholder="Mô tả chi tiết sản phẩm" />
                    </div>
                    <div className="product-type-wrapper">
                        <span className="title">Phân loại sản phẩm:</span>
                        <div className="add-type-container">
                            <input
                                type="text"
                                placeholder="Tên phân loại hàng"
                            />
                            <button className="primary-button">Thêm</button>
                        </div>
                        <div className="type-container">
                            {types.map((item) => (
                                <div className="type-item">
                                    <span className="type-name">
                                        {item.name}
                                    </span>
                                    <button>
                                        <RiDeleteBin6Line className="icon" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="product-image-container"></div>
            </div>
        </div>
    );
};

export default AddProduct;
