import { React, useState } from "react";
import "./StoreTab.css";
import {
    AiOutlineSearch,
    AiOutlineEdit,
    AiOutlineDelete,
} from "react-icons/ai";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

import productImage from "../../assets/images/products/5.jpg";
import productImage2 from "../../assets/images/products/4.jpg";
import productImage3 from "../../assets/images/products/6.jpg";
import productImage4 from "../../assets/images/products/3.jpg";
import starImg from "../../assets/images/reviews/4.png";

const items = [
    {
        productImg: productImage,
        sell: 1430,
        productName: "Nước hoa Pháp cao cấp 450ML Lưu hương 24h",
        productPrice: 570000,
        productOldPrice: 620000,
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage2,
        sell: 710,
        productName: "Apple iPhone 14 Pro Max 1TB Chính Hãng VN/A",
        productPrice: 28000000,
        productOldPrice: 32500000,
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage,
        sell: 1430,
        productName: "Nước hoa Pháp cao cấp 450ML Lưu hương 24h",
        productPrice: 570000,
        productOldPrice: 620000,
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage2,
        sell: 710,
        productName: "Apple iPhone 14 Pro Max 1TB Chính Hãng VN/A",
        productPrice: 28000000,
        productOldPrice: 32500000,
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage,
        sell: 1430,
        productName: "Nước hoa Pháp cao cấp 450ML Lưu hương 24h",
        productPrice: 570000,
        productOldPrice: 620000,
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage2,
        sell: 710,
        productName: "Apple iPhone 14 Pro Max 1TB Chính Hãng VN/A",
        productPrice: 28000000,
        productOldPrice: 32500000,
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage,
        sell: 1430,
        productName: "Nước hoa Pháp cao cấp 450ML Lưu hương 24h",
        productPrice: 570000,
        productOldPrice: 620000,
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage2,
        sell: 710,
        productName: "Apple iPhone 14 Pro Max 1TB Chính Hãng VN/A",
        productPrice: 28000000,
        productOldPrice: 32500000,
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage,
        sell: 1430,
        productName: "Nước hoa Pháp cao cấp 450ML Lưu hương 24h",
        productPrice: 570000,
        productOldPrice: 620000,
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage2,
        sell: 710,
        productName: "Apple iPhone 14 Pro Max 1TB Chính Hãng VN/A",
        productPrice: 28000000,
        productOldPrice: 32500000,
        productStarNumber: 4,
        productStar: starImg,
    },
];

function Items({ currentItems }) {
    const [searchValue, setSearchValue] = useState("");

    function SearchInputOnChange(event) {
        setSearchValue(event.target.value);
    }

    return (
        <div>
            <div className="store-top">
                <Link to="/add-product">
                    <button className="store-add-product-button primary-button">
                        Thêm Sản phẩm
                    </button>
                </Link>
                <button className="store-voucher-button primary-button">
                    Quản lý Mã Giảm Giá
                </button>
                <div className="store-search-container">
                    <input
                        type="text"
                        className="store-search-input"
                        value={searchValue}
                        placeholder="Tìm kiếm sản phẩm"
                        onChange={SearchInputOnChange}
                    />
                    <button className="store-search-button primary-button">
                        <AiOutlineSearch className="store-search-icon" />
                    </button>
                </div>
            </div>
            <div className="store-product-container">
                {currentItems &&
                    currentItems.map((item) => (
                        <div className="product-item">
                            <Link to="/product">
                                <img src={item.productImg} />
                            </Link>
                            <Link to="/product">
                                <div className="product-info">
                                    <div className="product-head-info">
                                        <span className="product-sell">
                                            <span className="green-text">
                                                Đã bán:{" "}
                                            </span>
                                            {item.sell}
                                        </span>
                                        <span className="product-name">
                                            {item.productName}
                                        </span>
                                    </div>
                                    <div className="product-all-price">
                                        <span className="product-price">
                                            {item.productPrice} đ
                                        </span>
                                        <span className="product-old-price">
                                            {item.productOldPrice} đ
                                        </span>
                                    </div>
                                </div>
                            </Link>
                            <div className="product-bottom-buttons">
                                <button>
                                    <AiOutlineEdit className="icon" />
                                </button>
                                <button>
                                    <AiOutlineDelete className="icon" />
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

function PaginatedItems({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
        window.scrollTo(0, 0);
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

function StoreTab() {
    return (
        <div className="StoreTab">
            <PaginatedItems itemsPerPage={6} />
        </div>
    );
}

export default StoreTab;
