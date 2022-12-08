import React, { useState } from "react";
import Select from "react-select";
import "./ProductList.css";
import { AiOutlineFilter } from "react-icons/ai";
import productImage from "../../assets/images/products/4.jpg";
import starImg from "../../assets/images/reviews/4.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import ReactPaginate from "react-paginate";

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

const products = [
    {
        id: 1,
        category: "Mỹ phẩm",
        image: productImage,
        sell: 1430,
        name: "Nước hoa Pháp cao cấp 450ML Lưu hương 24h",
        price: 570000,
        oldPrice: 620000,
        starNumber: 4,
        starImage: starImg,
    },
    {
        id: 1,
        category: "Mỹ phẩm",
        image: productImage,
        sell: 1430,
        name: "Nước hoa Pháp cao cấp 450ML Lưu hương 24h",
        price: 570000,
        oldPrice: 620000,
        starNumber: 4,
        starImage: starImg,
    },
    {
        id: 1,
        image: productImage,
        category: "Mỹ phẩm",
        sell: 1430,
        name: "Nước hoa Pháp cao cấp 450ML Lưu hương 24h",
        price: 570000,
        oldPrice: 620000,
        starNumber: 4,
        starImage: starImg,
    },
    {
        id: 1,
        category: "Mỹ phẩm",
        image: productImage,
        sell: 1430,
        name: "Nước hoa Pháp cao cấp 450ML Lưu hương 24h",
        price: 570000,
        oldPrice: 620000,
        starNumber: 4,
        starImage: starImg,
    },
    {
        id: 1,
        category: "Mỹ phẩm",
        image: productImage,
        sell: 1430,
        name: "Nước hoa Pháp cao cấp 450ML Lưu hương 24h",
        price: 570000,
        oldPrice: 620000,
        starNumber: 4,
        starImage: starImg,
    },
    {
        id: 1,
        category: "Mỹ phẩm",
        image: productImage,
        sell: 1430,
        name: "Nước hoa Pháp cao cấp 450ML Lưu hương 24h",
        price: 570000,
        oldPrice: 620000,
        starNumber: 4,
        starImage: starImg,
    },
    {
        id: 1,
        category: "Mỹ phẩm",
        image: productImage,
        sell: 1430,
        name: "Nước hoa Pháp cao cấp 450ML Lưu hương 24h",
        price: 570000,
        oldPrice: 620000,
        starNumber: 4,
        starImage: starImg,
    },
    {
        id: 1,
        category: "Mỹ phẩm",
        image: productImage,
        sell: 1430,
        name: "Nước hoa Pháp cao cấp 450ML Lưu hương 24h",
        price: 570000,
        oldPrice: 620000,
        starNumber: 4,
        starImage: starImg,
    },
    {
        id: 1,
        category: "Mỹ phẩm",
        image: productImage,
        sell: 1430,
        name: "Nước hoa Pháp cao cấp 450ML Lưu hương 24h",
        price: 570000,
        oldPrice: 620000,
        starNumber: 4,
        starImage: starImg,
    },
    {
        id: 1,
        category: "Mỹ phẩm",
        image: productImage,
        sell: 1430,
        name: "Nước hoa Pháp cao cấp 450ML Lưu hương 24h",
        price: 570000,
        oldPrice: 620000,
        starNumber: 4,
        starImage: starImg,
    },
    {
        id: 1,
        category: "Mỹ phẩm",
        image: productImage,
        sell: 1430,
        name: "Nước hoa Pháp cao cấp 450ML Lưu hương 24h",
        price: 570000,
        oldPrice: 620000,
        starNumber: 4,
        starImage: starImg,
    },
    {
        id: 1,
        category: "Mỹ phẩm",
        image: productImage,
        sell: 1430,
        name: "Nước hoa Pháp cao cấp 450ML Lưu hương 24h",
        price: 570000,
        oldPrice: 620000,
        starNumber: 4,
        starImage: starImg,
    },
    {
        id: 1,
        category: "Mỹ phẩm",
        image: productImage,
        sell: 1430,
        name: "Nước hoa Pháp cao cấp 450ML Lưu hương 24h",
        price: 570000,
        oldPrice: 620000,
        starNumber: 4,
        starImage: starImg,
    },
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="filter-container">
                    <div className="filter-item">
                        <span className="filter-label categories">
                            Danh mục
                            <MdKeyboardArrowDown
                                className="arrow-icon"
                                onClick={() =>
                                    setShowCategories(!showCategories)
                                }
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
                                        onClick={() =>
                                            setSelectedCategory(item.id)
                                        }
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
                <div className="products-container">
                    <PaginatedItems items={products} itemsPerPage={12} />
                </div>
            </div>
        </div>
    );
};

function PaginatedItems({ items, itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName="pag-container"
                pageClassName="pag-li"
                pageLinkClassName="pag-link"
                previousClassName="pag-previous"
                previousLinkClassName="pag-link-previous"
                nextClassName="pag-next"
                nextLinkClassName="pag-link-next"
                activeClassName="pag-active"
                activeLinkClassName="pag-link-active"
                breakClassName="pag-break"
                breakLinkClassName="pag-link-break"
            />
        </>
    );
}

function Items({ currentItems }) {
    return (
        <div className="product-list">
            {currentItems.map((item) => (
                <div className="product-item">
                    <img src={item.image} className="product-image" />
                    <span className="product-category">{item.category}</span>
                    <span className="product-name">{item.name}</span>
                    <div className="product-star-wrapper">
                        <img src={item.starImage} />
                        <span>({item.starNumber})</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
