import { React, useState } from "react";
import "./StoreTab.css";
import { AiOutlineSearch } from "react-icons/ai";
import ReactPaginate from "react-paginate";

import productImage from "../../assets/images/products/5.jpg";
import productImage2 from "../../assets/images/products/4.jpg";
import productImage3 from "../../assets/images/products/6.jpg";
import productImage4 from "../../assets/images/products/3.jpg";
import starImg from "../../assets/images/reviews/4.png";

const items = [
    {
        productImg: productImage,
        productName: "Nước hoa Pháp cao cấp 1",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage2,
        productName: "Nước hoa Pháp cao cấp 2",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage3,
        productName: "Nước hoa Pháp cao cấp 3",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage4,
        productName: "Nước hoa Pháp cao cấp 4",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage,
        productName: "Nước hoa Pháp cao cấp 5",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage2,
        productName: "Nước hoa Pháp cao cấp 6",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage3,
        productName: "Nước hoa Pháp cao cấp 7",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage4,
        productName: "Nước hoa Pháp cao cấp 8",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage,
        productName: "Nước hoa Pháp cao cấp 9",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage2,
        productName: "Nước hoa Pháp cao cấp 8",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage3,
        productName: "Nước hoa Pháp cao cấp 8",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage4,
        productName: "Nước hoa Pháp cao cấp 8",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage2,
        productName: "Nước hoa Pháp cao cấp 8",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage3,
        productName: "Nước hoa Pháp cao cấp 8",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage4,
        productName: "Nước hoa Pháp cao cấp 8",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage,
        productName: "Nước hoa Pháp cao cấp 8",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage2,
        productName: "Nước hoa Pháp cao cấp 3",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage3,
        productName: "Nước hoa Pháp cao cấp 4",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage4,
        productName: "Nước hoa Pháp cao cấp 5",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage,
        productName: "Nước hoa Pháp cao cấp 6",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage2,
        productName: "Nước hoa Pháp cao cấp 7",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage3,
        productName: "Nước hoa Pháp cao cấp 8",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage4,
        productName: "Nước hoa Pháp cao cấp 9",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage2,
        productName: "Nước hoa Pháp cao cấp 8",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage3,
        productName: "Nước hoa Pháp cao cấp 8",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage4,
        productName: "Nước hoa Pháp cao cấp 8",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage,
        productName: "Nước hoa Pháp cao cấp 8",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage2,
        productName: "Nước hoa Pháp cao cấp 8",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage3,
        productName: "Nước hoa Pháp cao cấp 8",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage4,
        productName: "Nước hoa Pháp cao cấp 3",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage,
        productName: "Nước hoa Pháp cao cấp 4",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage2,
        productName: "Nước hoa Pháp cao cấp 5",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage3,
        productName: "Nước hoa Pháp cao cấp 6",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage4,
        productName: "Nước hoa Pháp cao cấp 7",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage,
        productName: "Nước hoa Pháp cao cấp 8",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage2,
        productName: "Nước hoa Pháp cao cấp 9",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage,
        productName: "Nước hoa Pháp cao cấp 8",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage3,
        productName: "Nước hoa Pháp cao cấp 8",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage4,
        productName: "Nước hoa Pháp cao cấp 8",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage,
        productName: "Nước hoa Pháp cao cấp 8",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage2,
        productName: "Nước hoa Pháp cao cấp 8",
        productPrice: "$24",
        productOldPrice: "$32",
        productStarNumber: 4,
        productStar: starImg,
    },
    {
        productImg: productImage3,
        productName: "Nước hoa Pháp cao cấp 8",
        productPrice: "$24",
        productOldPrice: "$32",
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
                <button className="store-add-product-button primary-button">
                    Thêm sản phẩm
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
                        <div className="product-item store-product-item">
                            <img
                                className="product-img"
                                src={item.productImg}
                                alt=""
                            />
                            <div className="product-info">
                                <p className="product-name">
                                    {item.productName}
                                </p>
                                <div className="product-star store-product-star">
                                    <img src={item.productStar} alt="" />
                                    <span>({item.productStarNumber})</span>
                                </div>
                                <div className="product-price-container store-product-price">
                                    <span className="product-sale-price">
                                        {item.productPrice}
                                    </span>
                                    {item.productOldPrice !== -1 && (
                                        <span className="product-old-price">
                                            {item.productOldPrice}
                                        </span>
                                    )}
                                </div>
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
            <PaginatedItems itemsPerPage={9} />
        </div>
    );
}

export default StoreTab;
