import React, { useState } from "react";
import "./ProductDetail.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";

import img1 from "../../assets/images/products/4.jpg";
import img2 from "../../assets/images/products/5.jpg";
import img3 from "../../assets/images/products/6.jpg";
import stars4 from "../../assets/images/reviews/4.png";
import stars5 from "../../assets/images/reviews/5.png";
import avatar from "../../assets/images/avatar.png";

const data = {
    id: "id001",
    name: "Apple iPhone 14 Pro Max 1TB - Chính Hãng VN/A - Bảo hành 24 tháng",
    catalog: "Điện thoại",
    starsImage: stars5,
    isFavorite: false,
    averageStars: 4.7,
    reviewCount: 15,
    oldPrice: 30000000,
    price: 28000000,
    description:
        "iPhone 14 Pro Max VN/A là dòng sản phẩm cao cấp nhất nằm trong thế hệ iPhone 14 Series mới vừa được ra mắt cùng với nhiều nâng cấp về ngoại hình và tính năng, hứa hẹn sẽ là dòng sản phẩm đột phá trong vài năm trở lại đây của Apple. Điểm độc đáo trên thế hệ iPhone 14 Series chính là điện thoại vệ tinh hỗ trợ người dùng trong việc liên lạc bằng cách kết nối với các trạm vệ tinh xoay quanh quỹ đạo mà không cần sóng của nhà mạng. iPhone 14 Pro Max VN/A có dung lượng 4.323 mAh – thấp hơn một chút so với mức 4.352 mAh của 13 Pro Max. Ngoài ra, thiết bị được trang bị sạc nhanh với công suất 30W, cao hơn đáng kể so với mức sạc 20W cũ. iPhone 14 Pro Max VN/A hiện là chiếc flagship có trọng lượng nặng nhất trên thị trường với khối lượng 255 gram, cao hơn 15 gram so với thế hệ trước. Người dùng có tùy chọn các phiên bản dung lượng gồm 128 GB, 256 GB, 512 GB và 1TB. Thiết bị sử dụng phần khung titan thay vì thép không gỉ, mang đến một chiếc iPhone mạnh mẽ hơn, nhẹ hơn và chống trầy tốt hơn, dù làm tăng khối lượng. iPhone 14 Pro Max VN/A sử dụng bộ vi xử lý Apple A16 Bionic được xử lý trên tiến trình 4nm. Với bộ xử lý neural 16 nhân trên chip này, bên cạnh bộ xử lý màn hình hoàn toàn mới để hỗ trợ đẩy tần số quét xuống 1Hz, xử lý tính năng always-on và giúp Dynamic Island hoạt động mượt mà.Thiết bị có RAM 6GB sử dụng công nghệ LPDDR5 cải tiến về tốc độ truyền và điện năng tiêu thụ.",
};

const today = new Date().getDate();

const reviews = [
    {
        name: "Nguyễn Văn Long",
        date: today,
        content:
            "Sản phẩm rất chất lượng. Camera sắc nét, chế độ đêm hoạt động rất tốt. Dung lượng pin ổn, sử dụng mượt mà không có vấn đề gì. Giao hàng nhanh.",
        starImg: stars5,
    },
    {
        name: "Lê Bảo Ngọc",
        date: today,
        content:
            "Sản phẩm rất chất lượng. Camera sắc nét, chế độ đêm hoạt động rất tốt. Dung lượng pin ổn, sử dụng mượt mà không có vấn đề gì. Giao hàng nhanh.",
        starImg: stars5,
    },
    {
        name: "Trần Văn Bảo",
        date: today,
        content:
            "Sản phẩm rất chất lượng. Camera sắc nét, chế độ đêm hoạt động rất tốt. Dung lượng pin ổn, sử dụng mượt mà không có vấn đề gì. Giao hàng nhanh.",
        starImg: stars5,
    },
    {
        name: "Nguyễn Ngọc Vy",
        date: today,
        content:
            "Sản phẩm rất chất lượng. Camera sắc nét, chế độ đêm hoạt động rất tốt. Dung lượng pin ổn, sử dụng mượt mà không có vấn đề gì. Giao hàng nhanh.",
        starImg: stars5,
    },
];

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(data.isFavorite);

    const UpQuantityOnClick = () => {
        setQuantity(quantity + 1);
    };
    const DownQuantityOnClick = () => {
        if (quantity <= 1) {
            toast.error("Số lượng tối thiểu là 1", {
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
        setQuantity(quantity - 1);
    };

    const AddToWishlistOnClick = () => {
        if (isFavorite) {
            toast.success("Đã xoá khỏi danh sách yêu thích", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.success("Đã thêm vào danh sách yêu thích", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        setIsFavorite(!isFavorite);
    };

    const QuantityInputOnChange = (event) => {
        console.log(event.target.value);
        if (event.target.value === "-") return;
        if (event.target.value !== "" && event.target.value < 1) return;
        setQuantity(event.target.value * 1);
    };
    return (
        <div className="ProductDetail content">
            <div className="d-product-overview">
                <div className="d-product-images">
                    <Carousel thumbWidth="min(100px, 18%)" showArrows={false}>
                        <div>
                            <img src={img1} alt="" />
                        </div>
                        <div>
                            <img src={img2} alt="" />
                        </div>
                        <div>
                            <img src={img3} alt="" />
                        </div>
                        <div>
                            <img src={img1} alt="" />
                        </div>
                        <div>
                            <img src={img2} alt="" />
                        </div>
                    </Carousel>
                </div>
                <div className="d-product-info">
                    <span className="d-product-catalog">{data.catalog}</span>
                    <span className="d-product-name">{data.name}</span>
                    <div className="d-product-review-overview">
                        <img
                            src={data.starsImage}
                            className="d-product-star-img"
                            alt=""
                        />
                        <span>({data.averageStars})</span>
                        <span>{data.reviewCount} lượt đánh giá</span>
                    </div>
                    <div className="d-product-prices">
                        <span className="d-product-current-price">
                            {data.price} đ
                        </span>
                        <span className="d-product-old-price">
                            {data.oldPrice} đ
                        </span>
                    </div>
                    <div className="d-product-classify">
                        <div className="d-product-quantity-wrapper">
                            <span>Số lượng:</span>
                            <input
                                type="number"
                                value={quantity}
                                onChange={QuantityInputOnChange}
                            />
                            <button
                                className="up-quantity-button"
                                onClick={UpQuantityOnClick}
                            >
                                <IoIosArrowUp className="quantity-icon" />
                            </button>
                            <button
                                className="down-quantity-button"
                                onClick={DownQuantityOnClick}
                            >
                                <IoIosArrowDown className="quantity-icon" />
                            </button>
                        </div>
                        <div className="d-product-type-wrapper">
                            <span>Phân loại hàng:</span>
                            <select>
                                <option>Silver</option>
                                <option>Gold</option>
                                <option>Space Black</option>
                                <option>Deep Purple</option>
                            </select>
                        </div>
                    </div>
                    <div className="d-product-buy-wrapper">
                        <button
                            className={
                                "add-to-wishlist-button " +
                                (isFavorite && "active")
                            }
                            onClick={AddToWishlistOnClick}
                        >
                            <AiFillHeart className="icon" />
                        </button>
                        <button className="buy-now-button primary-button">
                            Mua ngay
                        </button>
                        <button className="add-to-cart-button primary-button">
                            <AiOutlineShoppingCart className="icon" />
                            Thêm vào Giỏ hàng
                        </button>
                    </div>
                </div>
            </div>
            <div className="d-product-description-wrapper">
                <span className="d-product-title">Mô tả sản phẩm</span>
                <p className="d-product-description">{data.description}</p>
            </div>
            <div className="d-product-review-wrapper">
                <span className="d-product-title">Đánh giá</span>
            </div>
        </div>
    );
};

export default ProductDetail;
