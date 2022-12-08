import React, { useState } from "react";
import Select from "react-select";
import "./ProductList.css";
import { AiOutlineFilter } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const sortOptions = [
    { value: "1", label: "Mới nhất trước" },
    { value: "2", label: "Cũ nhất trước" },
    { value: "3", label: "Giá tăng dần" },
    { value: "4", label: "Giá giảm dần" },
    { value: "5", label: "Mua nhiều nhất" },
];

const categories = [
    { id: 1, name: "Thời trang nam" },
    { id: 2, name: "Thời trang nữ" },
    { id: 3, name: "Điện thoại" },
    { id: 4, name: "Laptop" },
    { id: 5, name: "Thiết bị điện tử" },
    { id: 6, name: "Trang sức" },
    { id: 7, name: "Mỹ phẩm" },
    { id: 8, name: "Nhà bếp" },
    { id: 9, name: "Giày nam" },
    { id: 10, name: "Giày nam" },
    { id: 11, name: "Giày nữ" },
    { id: 12, name: "Sức khoẻ" },
    { id: 13, name: "Cho bé" },
    { id: 14, name: "Dụng cụ gia đình" },
    { id: 15, name: "Đồng hồ" },
    { id: 16, name: "Khác" },
];

const ProductList = ({ keyword }) => {
    keyword = "Quần Jeans Slim Fit Dành Cho Nam";
    const [sortOption, setSortOption] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [showCategories, setShowCategories] = useState(false);

    return (
        <div className="ProductList content">
            <span className="title-text keyword-label">
                Kết quả hiển thị cho
                <br />
                <span className="green-text">"{keyword}"</span>
            </span>
            <Select
                className="sort-filter-select"
                defaultValue={sortOption}
                onChange={setSortOption}
                options={sortOptions}
                placeholder="Sắp xếp theo"
                theme={(theme) => ({
                    ...theme,
                    colors: {
                        ...theme.colors,
                        primary: "var(--primary-color)",
                    },
                })}
            />
            <div className="filter-container">
                <div className="filter-item">
                    <span className="filter-label categories">
                        Danh mục
                        <MdKeyboardArrowDown
                            className="arrow-icon"
                            onClick={() => setShowCategories(!showCategories)}
                        />
                    </span>
                    {showCategories && (
                        <div className="filter-content categories-dropdown">
                            {categories.map((item) => (
                                <button
                                    className={
                                        selectedCategory === item.id
                                            ? "category-button active"
                                            : "category-button"
                                    }
                                    onClick={() => setSelectedCategory(item.id)}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <div className="filter-item">
                    <span className="filter-label">Giá</span>
                    <div className="filter-content">
                        <div className="price-filter-row">
                            <input
                                type="number"
                                className="price-input"
                                placeholder="Giá thấp nhất"
                            />
                            <span>VNĐ</span>
                        </div>
                        <div className="price-filter-row">
                            <input
                                type="number"
                                className="price-input"
                                placeholder="Giá cao nhất"
                            />
                            <span>VNĐ</span>
                        </div>
                        <button className="price-filter-button primary-button">
                            <AiOutlineFilter
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    marginRight: "8px",
                                }}
                            />
                            Lọc
                        </button>
                    </div>
                </div>
                <div className="filter-item">
                    <span className="filter-label">Tuỳ chọn</span>
                    <div className="filter-content">
                        <div className="filter-option-row">
                            <input
                                type="checkbox"
                                id="0"
                                className="filter-checkbox"
                            />
                            <label for="0">Đang giảm giá</label>
                        </div>
                        <div className="filter-option-row">
                            <input
                                type="checkbox"
                                id="1"
                                className="filter-checkbox"
                            />
                            <label for="1">Từ 3 sao trở lên</label>
                        </div>
                        <div className="filter-option-row">
                            <input
                                type="checkbox"
                                id="2"
                                className="filter-checkbox"
                            />
                            <label for="2">Từ 4 sao trở lên</label>
                        </div>
                        <div className="filter-option-row">
                            <input
                                type="checkbox"
                                id="3"
                                className="filter-checkbox"
                            />
                            <label for="3">Từ 5 sao trở lên</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProductList;
