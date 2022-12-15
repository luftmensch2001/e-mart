import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import "./AddProduct.css";
import { BsCheckLg } from "react-icons/bs";
import axios from "axios";
import { storage } from "../../components/firebase";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import { v4 } from "uuid";

const AddProduct = () => {
    const [types, setTypes] = useState([]);
    const [typeName, setTypeName] = useState("");
    const [mainImage, setMainImage] = useState(null);
    const [otherImage, setOtherImage] = useState([]);
    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState(1);
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");

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

    const UpLoadImages = (productID) => {
        // Main Image
        if (!mainImage) return;
        const imageRef = ref(storage, `images/${mainImage.name + v4()}`);
        uploadBytes(imageRef, mainImage)
            .then(() => {
                getDownloadURL(imageRef).then((url) => {
                    axios
                        .post(
                            "http://localhost:5000/api/imageProducts/create",
                            {
                                productId: productID,
                                imageURL: url,
                                isMainImage: true,
                            }
                        )
                        .then((res) => console.log(res))
                        .catch((err) => console.log(err));
                });
            })
            .catch((err) => console.log(err));
        // Other Images
        console.log("Other image: ", otherImage);
        otherImage.forEach((item) => {
            const imageRef = ref(storage, `images/${item.name + v4()}`);
            uploadBytes(imageRef, item)
                .then(() => {
                    getDownloadURL(imageRef).then((url) => {
                        axios
                            .post(
                                "http://localhost:5000/api/imageProducts/create",
                                {
                                    productId: productID,
                                    imageURL: url,
                                    isMainImage: false,
                                }
                            )
                            .then((res) => console.log(res))
                            .catch((err) => console.log(err));
                    });
                })
                .catch((err) => console.log(err));
        });
    };

    const AddProductOnClick = () => {
        if (!mainImage) {
            toast.warn("Vui lòng thêm hình ảnh cho sản phẩm!", {
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

        const accountID = localStorage.getItem("accountID");

        axios
            .post("http://localhost:5000/api/products/create", {
                accoutId: accountID,
                nameProduct: productName,
                price: productPrice,
                describe: productDescription,
                type: productCategory,
            })
            .then((res) => {
                UpLoadImages(res.data.productID);
                toast.success("Thêm sản phẩm thành công", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch((err) => {
                if (err.response.data.message === "Missing information") {
                    toast.warn("Vui lòng nhập đầy đủ thông tin!", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                } else
                    toast.error("Lỗi kết nối!", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
            });
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
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
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
                            value={productCategory}
                            onChange={(e) => setProductCategory(e.target.value)}
                        >
                            <option value={1}>Điện thoại</option>
                            <option value={2}>Laptop</option>
                            <option value={3}>Mỹ phẩm</option>
                            <option value={4}>Thời trang nam</option>
                            <option value={5}>Sách</option>
                        </select>
                    </div>
                    <div className="product-info-row">
                        <span className="product-info-label">
                            Giá <span>(VNĐ)</span>:
                        </span>
                        <input
                            className="product-info-input"
                            type="number"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                        />
                    </div>
                    <div className="product-info-row-detail">
                        <span className="product-info-label">
                            Mô tả sản phẩm:
                        </span>
                        <textarea
                            placeholder="Mô tả chi tiết sản phẩm"
                            value={productDescription}
                            onChange={(e) =>
                                setProductDescription(e.target.value)
                            }
                        />
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
                                        margin: "80px 0",
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
            <button
                className="complete-button primary-button"
                onClick={AddProductOnClick}
            >
                <BsCheckLg className="icon" />
                Hoàn tất Thêm sản phẩm
            </button>
        </div>
    );
};

export default AddProduct;
