import React, { useState } from "react";
import Select from "react-select";
import "./ProductList.css";
import { AiOutlineFilter } from "react-icons/ai";
import productImage from "../../assets/images/products/4.jpg";
import starImg from "../../assets/images/reviews/4.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import ThousandSeparator from "../../components/ThousandSeparator";

import pi1 from "../../assets/ExampleProduct/iPhone/1.png";
import pi2 from "../../assets/ExampleProduct/binhgiunhiet/binh-giu-nhiet-lock-lock-name-tumbler-lhc4125b-7.jpg";
import pi3 from "../../assets/ExampleProduct/dongho/1.jpeg";
import pi4 from "../../assets/ExampleProduct/giay/1.jpg";
import pi5 from "../../assets/ExampleProduct/kemchongnang/00013491-kem-chong-nang-la-roche-posay-kiem-soat-dau-spf50-6561-634c_large.webp";
import pi6 from "../../assets/ExampleProduct/laptop/gsmarena001-1653379584969-16533795856231394043061.webp";
import pi7 from "../../assets/ExampleProduct/nuochoa/6.jpg";
import pi8 from "../../assets/ExampleProduct/sach/2.jpg";

const products = [
    {
        name: "Apple iPhone 14 Pro Max 1TB Chính Hãng",
        image: pi1,
        price: 35000000,
        category: "Điện thoại",
        salePrice: 38990000,
        sell: 1430,
        starNumber: 4,
        starImage: starImg,
    },
    {
        name: "Sách Dám mơ lớn, đừng hoài phí tuổi trẻ - Lư Tư Hạo",
        image: pi8,
        price: 96000,
        category: "Sách",
        salePrice: 132000,
        sell: 1430,
        starNumber: 4,
        starImage: starImg,
    },

    {
        name: "Đồng Hồ Thông Minh Xiaomi Mi Watch",
        image: pi3,
        price: 350000,
        category: "Đồng hồ",
        salePrice: 389900,
        sell: 1430,
        starNumber: 4,
        starImage: starImg,
    },
    {
        name: "Giày Da Thể Thao Nam Cao Cấp - Bảo Hành 12 Tháng",
        image: pi4,
        price: 450000,
        category: "Giày nam",
        salePrice: 489000,
        sell: 1430,
        starNumber: 4,
        starImage: starImg,
    },
    {
        name: "Kem Chống Nắng La Roche-Posay Kiểm Soát Dầu SPF50+",
        image: pi5,
        price: 350000,
        category: "Mỹ phẩm",
        salePrice: 389000,
        sell: 1430,
        starNumber: 4,
        starImage: starImg,
    },
    {
        name: "Bình Giữ Nhiệt Lock&Lock 750ML Chính hãng",
        image: pi2,
        price: 169000,
        category: "Sức khoẻ",
        salePrice: 230000,
        sell: 1430,
        starNumber: 4,
        starImage: starImg,
    },
    {
        name: "Nước Hoa Pháp Queen Cao Cấp 50ml - Lưu hương 24h",
        image: pi7,
        price: 2500000,
        category: "Mỹ phẩm",
        salePrice: 3690000,
        sell: 1430,
        starNumber: 4,
        starImage: starImg,
    },
    {
        name: "Laptop Huawei Matebook D14 - SSD 512GB",
        image: pi6,
        price: 15000000,
        category: "Laptop",
        salePrice: 18990000,
        sell: 1430,
        starNumber: 4,
        starImage: starImg,
    },
    {
        name: "Sách Dám mơ lớn, đừng hoài phí tuổi trẻ - Lư Tư Hạo",
        image: pi8,
        price: 96000,
        category: "Sách",
        salePrice: 132000,
        sell: 1430,
        starNumber: 4,
        starImage: starImg,
    },
];

const sortOptions = [
    { value: "1", label: "Mới nhất trước" },
    { value: "2", label: "Cũ nhất trước" },
    { value: "3", label: "Giá tăng dần" },
    { value: "4", label: "Giá giảm dần" },
    { value: "5", label: "Mua nhiều nhất" },
];

const countOptions = [
    { value: 9, label: "9 sản phẩm" },
    { value: 12, label: "12 sản phẩm" },
    { value: 15, label: "15 sản phẩm" },
    { value: 18, label: "18 sản phẩm" },
    { value: 21, label: "21 sản phẩm" },
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

const productss = [
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
        name: "Nước hoa Pháp cao cấp 450ML Lưu hương 24h",
        price: 570000,
        oldPrice: 620000,
        sell: 1430,
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
    const [countOption, setCountOption] = useState(countOptions[1]);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [showCategories, setShowCategories] = useState(false);

    return (
        <div className="ProductList content">
            <span className="title-text keyword-label">
                Kết quả hiển thị cho
                <br />
                <span className="green-text">"{keyword}"</span>
            </span>
            <div className="selects-wrapper">
                <Select
                    className="count-select"
                    defaultValue={countOption}
                    onChange={setCountOption}
                    options={countOptions}
                    placeholder="Hiển thị"
                    theme={(theme) => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            primary: "var(--primary-color)",
                        },
                    })}
                />
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
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="filter-container">
                    <div className="filter-item">
                        <span
                            className="filter-label categories"
                            onClick={() => setShowCategories(!showCategories)}
                        >
                            Danh mục
                            <MdKeyboardArrowDown className="arrow-icon" />
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
                    <PaginatedItems
                        items={products}
                        itemsPerPage={countOption.value}
                    />
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
        window.scrollTo(0, 140);
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
                <ProductCard item={item} />
            ))}
        </div>
    );
}

const ProductCard = ({ item }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="product-item">
            <img src={item.image} className="product-image" />
            <span className="product-category">{item.category}</span>
            <span className="product-name">{item.name}</span>
            <div className="product-star-wrapper">
                <img src={item.starImage} />
                <span>({item.starNumber})</span>
            </div>
            <div className="product-price-wrapper">
                <span className="price">{ThousandSeparator(item.price)} đ</span>
                <span className="old-price">
                    {ThousandSeparator(item.salePrice)} đ
                </span>
            </div>
            <div className="buttons-wrapper">
                <button className="add-to-cart-button primary-button">
                    <BsCartPlus
                        style={{
                            width: "22px",
                            height: "22px",
                            marginRight: "6px",
                        }}
                    />{" "}
                    Thêm vào Giỏ
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
    );
};

export default ProductList;
