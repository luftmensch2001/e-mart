import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import "./AddProduct.css";
import { BsCheckLg } from "react-icons/bs";

const AddProduct = () => {
    const [types, setTypes] = useState([]);
    const [typeName, setTypeName] = useState("");
    const [mainImage, setMainImage] = useState(null);
    const [otherImage, setOtherImage] = useState([]);

    const TypeNameInputOnchange = (event) => {
        setTypeName(event.target.value);
    };

    const AddTypeButtonOnClick = () => {
        if (typeName.trim() === "") return;
        let newID = types.length > 0 ? types[types.length - 1].id + 1 : 0;
        let item = { name: typeName, id: newID };
        setTypes(types.concat(item));
        setTypeName("");
        toast.success("Thêm thành công!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    const TypeNameInputOnKeyDown = (event) => {
        if (event.key !== "Enter") return;
        if (typeName.trim() === "") return;
        let newID = types.length > 0 ? types[types.length - 1].id + 1 : 0;
        let item = { name: typeName, id: newID };
        setTypes(types.concat(item));
        setTypeName("");
        toast.success("Thêm thành công!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    const RemoveTypeButtonOnClick = (ID) => {
        setTypes(
            types.filter((item) => {
                return item.id !== ID;
            })
        );
    };

    const OtherImageOnChange = (event) => {
        if (otherImage.length + event.target.files.length > 4) {
            toast.error("Chỉ được thêm tối đa 4 ảnh!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        setOtherImage([...otherImage, ...event.target.files]);
    };

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
                                value={typeName}
                                onChange={TypeNameInputOnchange}
                                onKeyDown={TypeNameInputOnKeyDown}
                            />
                            <button
                                className="primary-button"
                                onClick={AddTypeButtonOnClick}
                            >
                                Thêm
                            </button>
                        </div>
                        <div className="type-container">
                            {types.length > 0 ? (
                                types.map((item) => (
                                    <div className="type-item">
                                        <span className="type-name">
                                            {item.name}
                                        </span>
                                        <button
                                            onClick={() =>
                                                RemoveTypeButtonOnClick(item.id)
                                            }
                                        >
                                            <RiDeleteBin6Line className="icon" />
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <h2 className="no-type">
                                    Chưa có phân loại nào
                                </h2>
                            )}
                        </div>
                    </div>
                </div>
                <div className="product-image-container">
                    <span className="title">Hình ảnh sản phẩm</span>
                    <div className="row">
                        <span className="label">Ảnh chính</span>
                        <div className="image-container">
                            {mainImage ? (
                                <img
                                    src={URL.createObjectURL(mainImage)}
                                    className="main-image"
                                    alt="Chưa có ảnh nào"
                                />
                            ) : (
                                <h2
                                    style={{
                                        textAlign: "center",
                                        margin: "60px 0",
                                        display: "block",
                                        lineHeight: "30px",
                                        opacity: "0.7",
                                    }}
                                >
                                    Chưa có ảnh nào
                                </h2>
                            )}
                            <input
                                type="file"
                                name="myImage"
                                onChange={(event) => {
                                    setMainImage(event.target.files[0]);
                                }}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <span className="label">Ảnh khác</span>
                        <div className="image-container">
                            {otherImage.length > 0 ? (
                                <div className="other-image-container">
                                    {otherImage.map((item) => (
                                        <img
                                            src={URL.createObjectURL(item)}
                                            className="other-image"
                                            alt="Chưa có ảnh nào"
                                        />
                                    ))}
                                </div>
                            ) : (
                                <h2
                                    style={{
                                        textAlign: "center",
                                        margin: "60px 0",
                                        display: "block",
                                        lineHeight: "30px",
                                        opacity: "0.7",
                                    }}
                                >
                                    Chưa có ảnh nào
                                    <br />
                                    Thêm tối đa 4 ảnh
                                </h2>
                            )}
                            <input
                                type="file"
                                multiple
                                name="myImage"
                                onChange={OtherImageOnChange}
                            />
                            <button
                                className="primary-button remove-other-image"
                                onClick={() => setOtherImage([])}
                            >
                                Xoá tất cả
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="complete-button primary-button">
                <BsCheckLg className="icon" />
                Hoàn tất Thêm sản phẩm
            </button>
        </div>
    );
};

export default AddProduct;
