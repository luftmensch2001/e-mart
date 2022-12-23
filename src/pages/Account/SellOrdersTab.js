import { React, useState, useEffect } from "react";
import "./SellOrdersTab.css";
import ReactPaginate from "react-paginate";
import Order from "../../components/Order";
import "./BuyOrdersTab.css";
import { AiOutlineSearch } from "react-icons/ai";
import productImage from "../../assets/images/products/4.jpg";
import productImage2 from "../../assets/images/products/product-290274-160922-071637-600x600.jpg";
import iphone from "../../assets/ExampleProduct/iPhone/1.png";
import sach from "../../assets/ExampleProduct/sach/3.jpg";
import giay from "../../assets/ExampleProduct/giay/1.jpg";

let day1 = new Date(2022, 10, 13);
let day2 = new Date(2022, 10, 8);
let day3 = new Date(2022, 10, 2);
let day4 = new Date(2022, 8, 22);
let day5 = new Date(2020, 7, 1);

let dataRaw = [
    {
        orderDate: day1,
        productName: "Bình Giữ Nhiệt Lock&Lock 450ML",
        productImg: productImage2,
        count: 1,
        total: 165000,
        status: 1,
    },
    {
        orderDate: day2,
        productName: "iPhone 14 Pro Max 1TB",
        productImg: iphone,
        count: 2,
        total: 365000,
        status: 2,
    },
    {
        orderDate: day3,
        productName: "Sách Dám mơ lớn, đừng phí hoài tuổi trẻ - Lư Tư Hạo",
        productImg: sach,
        count: 3,
        total: 465000,
        status: 3,
    },
    {
        orderDate: day4,
        productName: "Giày Da Nam Cao cấp",
        productImg: giay,
        count: 3,
        total: 565000,
        status: 4,
    },
    {
        orderDate: day5,
        productName: "Bình Giữ Nhiệt Lock&Lock 450ML",
        productImg: productImage,
        count: 3,
        total: 465000,
        status: 3,
    },
    {
        orderDate: day2,
        productName: "Bình Giữ Nhiệt Lock&Lock 450ML",
        productImg: productImage2,
        count: 3,
        total: 465000,
        status: 3,
    },
    {
        orderDate: day3,
        productName: "Bình Giữ Nhiệt Lock&Lock 450ML",
        productImg: productImage,
        count: 3,
        total: 465000,
        status: 3,
    },
];

// dataRaw = dataRaw.concat(dataRaw).reverse();

function Items({ currentItems, filterFunction }) {
    const [statusFilterValue, setStatusFilterValue] = useState(1);
    const [searchValue, setSearchValue] = useState("");
    const [dateFilterValue, setDateFilterValue] = useState(1);

    function StatusFilterOnchange(event) {
        switch (event.target.value) {
            case "Tất cả":
                setStatusFilterValue(1);
                filterFunction(searchValue, 1, dateFilterValue);
                break;
            case "Đang chờ xác nhận":
                setStatusFilterValue(2);
                filterFunction(searchValue, 2, dateFilterValue);
                break;
            case "Đang vận chuyển":
                setStatusFilterValue(3);
                filterFunction(searchValue, 3, dateFilterValue);
                break;
            case "Đã giao hàng":
                setStatusFilterValue(4);
                filterFunction(searchValue, 4, dateFilterValue);
                break;
            case "Đã huỷ":
                setStatusFilterValue(5);
                filterFunction(searchValue, 5, dateFilterValue);
                break;
            default:
                break;
        }
    }

    function DateFilterOnchange(event) {
        switch (event.target.value) {
            case "Tất cả":
                setDateFilterValue(1);
                filterFunction(searchValue, statusFilterValue, 1);
                break;
            case "Hôm nay":
                setDateFilterValue(2);
                filterFunction(searchValue, statusFilterValue, 2);
                break;
            case "Tuần này":
                setDateFilterValue(3);
                filterFunction(searchValue, statusFilterValue, 3);
                break;
            case "Tháng này":
                setDateFilterValue(4);
                filterFunction(searchValue, statusFilterValue, 4);
                break;
            case "Năm này":
                setDateFilterValue(5);
                filterFunction(searchValue, statusFilterValue, 5);
                break;
            default:
                break;
        }
    }

    function SearchInputOnChange(event) {
        console.log(searchValue);
        setSearchValue(event.target.value);
    }

    function SearchButtonClick(event) {
        filterFunction(searchValue, statusFilterValue, dateFilterValue);
    }

    function SearchKeyDown(event) {
        if (event.key === "Enter") {
            filterFunction(searchValue, statusFilterValue, dateFilterValue);
        }
    }

    return (
        <>
            <div className="top">
                <div className="search-container">
                    <span className="top-label">Tìm kiếm</span>
                    <div className="search-field">
                        <AiOutlineSearch
                            className="search-icon"
                            onClick={SearchButtonClick}
                        />
                        <input
                            className="seach-input"
                            type="text"
                            placeholder="Tìm kiếm đơn hàng"
                            value={searchValue}
                            onChange={SearchInputOnChange}
                            onKeyDown={SearchKeyDown}
                        />
                    </div>
                </div>
                <div className="status-filter-container">
                    <span className="top-label">Trạng thái</span>
                    <select
                        className="status-filter-select"
                        onChange={StatusFilterOnchange}
                    >
                        <option
                            selected={statusFilterValue === 1 ? "selected" : ""}
                        >
                            Tất cả
                        </option>
                        <option
                            selected={statusFilterValue === 2 ? "selected" : ""}
                        >
                            Đang chờ xác nhận
                        </option>
                        <option
                            selected={statusFilterValue === 3 ? "selected" : ""}
                        >
                            Đang vận chuyển
                        </option>
                        <option
                            selected={statusFilterValue === 4 ? "selected" : ""}
                        >
                            Đã giao hàng
                        </option>
                        <option
                            selected={statusFilterValue === 5 ? "selected" : ""}
                        >
                            Đã huỷ
                        </option>
                    </select>
                </div>
                <div className="date-filter-container">
                    <span className="top-label">Thời gian đặt hàng</span>
                    <select
                        className="date-filter-select"
                        onChange={DateFilterOnchange}
                    >
                        <option
                            selected={dateFilterValue === 1 ? "selected" : ""}
                        >
                            Tất cả
                        </option>
                        <option
                            selected={dateFilterValue === 2 ? "selected" : ""}
                        >
                            Hôm nay
                        </option>
                        <option
                            selected={dateFilterValue === 3 ? "selected" : ""}
                        >
                            Tuần này
                        </option>
                        <option
                            selected={dateFilterValue === 4 ? "selected" : ""}
                        >
                            Tháng này
                        </option>
                        <option
                            selected={dateFilterValue === 5 ? "selected" : ""}
                        >
                            Năm này
                        </option>
                    </select>
                </div>
            </div>
            <div className="bot">
                <div className="orders-header">
                    <span className="orders-header-label c1">
                        Ngày đặt hàng
                    </span>
                    <span className="orders-header-label c2">Sản phẩm</span>
                    <span className="orders-header-label c3">Số lượng</span>
                    <span className="orders-header-label c4">
                        Tổng thanh toán
                    </span>
                    <span className="orders-header-label c5">Trạng thái</span>
                </div>
                <div className="orders-list">
                    {currentItems &&
                        currentItems.map((item) => <Order data={item} />)}
                </div>
            </div>
        </>
    );
}

function PaginatedItems({ items, itemsPerPage, filterFunction }) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
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

function SellOrdersTab() {
    const [allOrders, setAllOrders] = useState(dataRaw);
    const [orders, setOrders] = useState(dataRaw);
    let searchValue = "";
    let dateValue = 1;
    let statusValue = 1;

    function FilterOrders(searchVal, statusVal, dateVal) {
        statusValue = statusVal;
        searchValue = searchVal;
        dateValue = dateVal;
        let arr = allOrders.filter(FilterByStatus);
        arr = arr.filter(FilterByName);
        arr = arr.filter(FilterByDate);
        setOrders(arr);
    }

    function FilterByName(item) {
        const productNameLow = item.productName.toLowerCase();
        const searchString = searchValue.toLowerCase();
        return productNameLow.includes(searchString);
    }

    function FilterByStatus(item) {
        if (statusValue === 1) return true;
        return item.status + 1 === statusValue;
    }

    function FilterByDate(item) {
        if (dateValue === 1) return true;
        const today = new Date();
        const milisecondsInDay = 1000 * 60 * 60 * 24;
        if (dateValue === 2) {
            const daySubtract = Math.abs(today - item.orderDate);
            return daySubtract <= milisecondsInDay;
        }
        if (dateValue === 3) {
            const daySubtract = Math.abs(today - item.orderDate);
            return daySubtract <= milisecondsInDay * 7;
        }
        if (dateValue === 4) {
            return (
                today.getFullYear() === item.orderDate.getFullYear() &&
                today.getMonth() === item.orderDate.getMonth()
            );
        }
        if (dateValue === 5) {
            return today.getFullYear() === item.orderDate.getFullYear();
        }
    }

    return (
        <div className="SellOrdersTab">
            <PaginatedItems
                items={orders}
                itemsPerPage={4}
                filterFunction={FilterOrders}
            />
        </div>
    );
}

export default SellOrdersTab;
