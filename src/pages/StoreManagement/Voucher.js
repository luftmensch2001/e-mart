import React, { useState, useEffect } from "react";
import "./Voucher.css";
import Select from "react-select";
import { MdAdd } from "react-icons/md";
import ThoudsandSeparator from "../../components/ThousandSeparator";
import VoucherStatus from "../../components/VoucherStatus";
import { HiOutlineRefresh } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";

const sortOptions = [
    { value: "1", label: "Mới nhất trước" },
    { value: "2", label: "Cũ nhất trước" },
    { value: "3", label: "Ngày hết hạn tăng" },
    { value: "4", label: "Ngày hết hạn giảm" },
];

const filterOptions = [
    { value: "1", label: "Tất cả" },
    { value: "2", label: "Chưa đến ngày" },
    { value: "3", label: "Có thể dùng" },
    { value: "4", label: "Đã hết lượt" },
    { value: "5", label: "Đã hết hạn" },
];

const today = new Date();

const Voucher = () => {
    const [sortOption, setSortOption] = useState(null);
    const [filterOption, setFilterOption] = useState(null);
    const [showAddModal, setShowAddModal] = useState(true);
    const [data, setData] = useState([
        {
            code: "VOUCHER001",
            start: today,
            end: today,
            value: {
                isPercent: false,
                money: 15000,
                max: 0,
            },
            count: 30,
            status: 2, //1: chưa đến ngày, 2: có thể dùng, 3: đã hết lượt, 4: đã hết hạn
        },
        {
            code: "VOUCHER002",
            start: today,
            end: today,
            value: {
                isPercent: true,
                money: 5,
                max: 10000,
            },
            count: 40,
            status: 1, //1: chưa đến ngày, 2: có thể dùng, 3: đã hết lượt, 4: đã hết hạn
        },
        {
            code: "VOUCHER003",
            start: today,
            end: today,
            value: {
                isPercent: false,
                money: 25000,
                max: 0,
            },
            count: 0,
            status: 3, //1: chưa đến ngày, 2: có thể dùng, 3: đã hết lượt, 4: đã hết hạn
        },
        {
            code: "VOUCHER004",
            start: today,
            end: today,
            value: {
                isPercent: true,
                money: 15,
                max: 20000,
            },
            count: 30,
            status: 4, //1: chưa đến ngày, 2: có thể dùng, 3: đã hết lượt, 4: đã hết hạn
        },
        {
            code: "VOUCHER005",
            start: today,
            end: today,
            value: {
                isPercent: true,
                money: 5,
                max: 10000,
            },
            count: 40,
            status: 2, //1: chưa đến ngày, 2: có thể dùng, 3: đã hết lượt, 4: đã hết hạn
        },
        {
            code: "VOUCHER006",
            start: today,
            end: today,
            value: {
                isPercent: false,
                money: 25000,
                max: 0,
            },
            count: 0,
            status: 3, //1: chưa đến ngày, 2: có thể dùng, 3: đã hết lượt, 4: đã hết hạn
        },
    ]);

    useEffect(() => {
        if (showAddModal) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
    }, [showAddModal]);

    return (
        <div className="Voucher content">
            <span className="title-text">
                Quản Lý<span className="green-text"> Mã Giảm Giá</span>
            </span>
            <div className="top-buttons">
                <button className="primary-button add-voucher-button">
                    <MdAdd />
                    Thêm mới
                </button>
                <button className="update-button">
                    <HiOutlineRefresh
                        style={{ color: "#FFF", marginRight: "4px" }}
                    />
                    Cập nhật
                </button>
                <button className="update-button remove-button">
                    <AiOutlineDelete
                        style={{ color: "#FFF", marginRight: "4px" }}
                    />
                    Xoá Mã không khả dụng
                </button>
            </div>
            <div className="filter-zone">
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
                            primary: "#18a0fb",
                        },
                    })}
                />
                <Select
                    className="sort-filter-select"
                    defaultValue={filterOption}
                    onChange={setFilterOption}
                    options={filterOptions}
                    placeholder="Lọc theo trạng thái"
                    theme={(theme) => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            primary: "#18a0fb",
                        },
                    })}
                />
            </div>
            <div className="voucher-list-container">
                <div className="head">
                    <span className="column-1">Mã giảm giá</span>
                    <span className="column-2">Bắt đầu</span>
                    <span className="column-3">Kết thúc</span>
                    <span className="column-4">Số tiền giảm</span>
                    <span className="column-5">Giảm tối đa</span>
                    <span className="column-6">Lượt còn lại</span>
                    <span className="column-7">Trạng thái</span>
                </div>
                <div className="voucher-list">
                    {data.length > 0 ? (
                        data.map((item) => (
                            <div className="voucher-item">
                                <span className="column-1">{item.code}</span>
                                <span className="column-2">
                                    {item.start.toLocaleDateString()} -{" "}
                                    {item.start.toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </span>
                                <span className="column-3">
                                    {item.end.toLocaleDateString()} -{" "}
                                    {item.end.toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </span>
                                <span className="column-4">
                                    {ThoudsandSeparator(item.value.money)}
                                    {item.value.isPercent === true
                                        ? "%"
                                        : " VNĐ"}
                                </span>
                                <span className="column-5">
                                    {item.value.max > 0
                                        ? ThoudsandSeparator(item.value.max) +
                                          " VNĐ"
                                        : "-"}
                                </span>
                                <span className="column-6">{item.count}</span>
                                <div className="column-7">
                                    <VoucherStatus status={item.status} />
                                </div>
                            </div>
                        ))
                    ) : (
                        <span className="no-voucher">
                            Chưa có Mã giảm giá nào
                        </span>
                    )}
                </div>
            </div>
            {showAddModal && <AddVoucherModal />}
        </div>
    );
};

const AddVoucherModal = (id) => {
    return (
        <div className="AddVoucherModal">
            <div className="container">
                <span className="title-text">Thêm Mã Giảm Giá</span>
                <div className="row">
                    <input placeholder="Mã giảm giá" />
                </div>
            </div>
        </div>
    );
};

export default Voucher;
