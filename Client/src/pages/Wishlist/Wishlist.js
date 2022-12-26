import { React, useState, useEffect } from "react";
import "./Wishlist.css";
import ReactPaginate from "react-paginate";
import WishlistProduct from "./WishlistProduct";
import { AiOutlineSearch } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

import pi1 from "../../assets/ExampleProduct/iPhone/1.png";
import pi2 from "../../assets/ExampleProduct/sach/2.jpg";
import pi3 from "../../assets/ExampleProduct/giay/1.jpg";
import pi4 from "../../assets/ExampleProduct/dongho/1.jpeg";

let products = [
    {
        image: pi1,
        name: "iPhone 14 Pro Max",
        type: "Space Black",
        quantity: 1,
        price: 31990000,
    },
    {
        image: pi2,
        name: "Sách Dám mơ lớn, đừng hoài phí tuổi trẻ - Lư Tư Hạo",
        type: "Bìa cứng",
        quantity: 3,
        price: 96000,
    },
    {
        image: pi3,
        name: "Giày Da Thể Thao Dành Cho Nam",
        type: "Size 42",
        quantity: 2,
        price: 540000,
    },
    {
        image: pi4,
        name: "Đồng Hồ Thông Minh Xiaomi Mi Watch",
        type: "Màu xanh",
        quantity: 1,
        price: 1350000,
    },
];

function Items({ currentItems, filterFunction }) {
    const [searchValue, setSearchValue] = useState("");

    function SearchInputOnChange(event) {
        setSearchValue(event.target.value);
    }

    function SearchKeyDown(event) {
        if (event.key === "Enter") {
            filterFunction(searchValue);
        }
    }
    return (
        <div className="Wishlist content">
            <span className="page-title title-text">
                Danh Sách <span className="green-text">Yêu Thích</span>
            </span>
            <span className="total-count-label">
                Hiện có
                <span className="green-text"> {products.length} sản phẩm </span>
                trong Danh sách yêu thích của bạn
            </span>
            <div className="wishlist-search-container">
                <input
                    className="wishlist-search-input"
                    placeholder="Tìm kiếm sản phẩm"
                    onChange={SearchInputOnChange}
                    onKeyDown={SearchKeyDown}
                />
                <AiOutlineSearch className="wishlist-search-icon" />
            </div>
            <div className="wishlist-container">
                <div className="wishlist-header">
                    <span className="wishlist-header-field c1">Sản phẩm</span>
                    <span className="wishlist-header-field c2">Phân loại</span>
                    <span className="wishlist-header-field c3">Giá</span>
                    <span className="wishlist-header-field c4"></span>
                </div>
                <div className="wishlist-list">
                    {currentItems.map((item) => (
                        <WishlistProduct data={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function PaginatedItems({ items, itemsPerPage, filterFunction }) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
        window.scrollTo(0, 160);
    };

    useEffect(() => {
        setItemOffset(0);
    }, [items]);

    return (
        <>
            <Items
                currentItems={currentItems}
                filterFunction={filterFunction}
            />
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

function Wishlist() {
    const [data, setData] = useState(products);
    const [allProduct, setAllProduct] = useState(products);
    let searchValue = "";

    function FilterByName(item) {
        const productNameLow = item.name.toLowerCase();
        const searchString = searchValue.toLowerCase();
        return productNameLow.includes(searchString);
    }

    function FilterProduct(searchVal) {
        searchValue = searchVal;
        const arr = allProduct.filter(FilterByName);
        setData(arr);
    }
    if (data.length > 0)
        return (
            <div className="BuyOrdersTab">
                <PaginatedItems
                    items={data}
                    itemsPerPage={4}
                    filterFunction={FilterProduct}
                />
            </div>
        );
    else return <EmptyWishlist />;
}

const EmptyWishlist = () => {
    return (
        <div className="EmptyWishlist content">
            <span className="title-text">
                Danh Sách Yêu Thích{" "}
                <span className="green-text">Đang Trống</span>
            </span>
            <span className="text-content">
                Thêm sản phẩm vào Danh Sách Yêu Thích để có thể mua lại khi muốn
            </span>
            <Link to="/">
                <button
                    className="cart-continue-shopping-button"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <BsArrowLeft className="cart-button-icon" />
                    Tiếp tục mua sắm
                </button>
            </Link>
        </div>
    );
};

export default Wishlist;
