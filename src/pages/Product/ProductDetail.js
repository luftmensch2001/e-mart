import React, { useState } from "react";
import "./ProductDetail.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import ReactPaginate from "react-paginate";
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

const today = new Date();

const reviews = [
    {
        name: "Nguyễn Văn Long",
        avatar: avatar,
        date: today,
        content:
            "Sản phẩm rất chất lượng. Camera sắc nét, chế độ đêm hoạt động rất tốt. Dung lượng pin ổn, sử dụng mượt mà không có vấn đề gì. Giao hàng nhanh.",
        starImg: stars5,
    },
    {
        name: "Lê Bảo Ngọc",
        avatar: avatar,
        date: today,
        content:
            "Sản phẩm rất chất lượng. Camera sắc nét, chế độ đêm hoạt động rất tốt. Dung lượng pin ổn, sử dụng mượt mà không có vấn đề gì. Giao hàng nhanh.",
        starImg: stars5,
    },
    {
        name: "Trần Văn Bảo",
        avatar: avatar,
        date: today,
        content:
            "Sản phẩm rất chất lượng. Camera sắc nét, chế độ đêm hoạt động rất tốt. Dung lượng pin ổn, sử dụng mượt mà không có vấn đề gì. Giao hàng nhanh.",
        starImg: stars5,
    },
    {
        name: "Nguyễn Ngọc Vy",
        avatar: avatar,
        date: today,
        content:
            "Sản phẩm rất chất lượng. Camera sắc nét, chế độ đêm hoạt động rất tốt. Dung lượng pin ổn, sử dụng mượt mà không có vấn đề gì. Giao hàng nhanh.",
        starImg: stars5,
    },
];

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(data.isFavorite);
    const [reviewData, setReviewData] = useState(reviews);

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
                                <div className="action">
                                    <span className="option-1">Yêu thích</span>
                                    <span className="option-2">Đã thích</span>
                                </div>
                            </label>
                        </div>
                        <Link to="/checkout">
                            <button className="buy-now-button primary-button">
                                Mua ngay
                            </button>
                        </Link>
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
                <div className="review-left">
                    <span className="review-title">
                        Đánh giá của khách hàng
                    </span>
                    {reviewData.length > 0 && (
                        <PaginatedItems items={reviewData} itemsPerPage={5} />
                    )}
                    {reviewData.length === 0 && <NoReviewYet />}
                </div>
                <div className="review-right">
                    <span className="review-title">Gửi đánh giá</span>
                    <div class="rate">
                        <input type="radio" id="star5" name="rate" value="5" />
                        <label for="star5" title="text">
                            5 stars
                        </label>
                        <input type="radio" id="star4" name="rate" value="4" />
                        <label for="star4" title="text">
                            4 stars
                        </label>
                        <input type="radio" id="star3" name="rate" value="3" />
                        <label for="star3" title="text">
                            3 stars
                        </label>
                        <input type="radio" id="star2" name="rate" value="2" />
                        <label for="star2" title="text">
                            2 stars
                        </label>
                        <input type="radio" id="star1" name="rate" value="1" />
                        <label for="star1" title="text">
                            1 star
                        </label>
                    </div>
                    <textarea placeholder="Đánh giá về sản phẩm" />
                    <button className="send-review-button">
                        <div class="svg-wrapper-1">
                            <div class="svg-wrapper">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                        viewBox: "0 0 24 24",
                                        width: "24",
                                        height: "24",
                                    }}
                                >
                                    <path
                                        d="M0 0h24v24H0z"
                                        style={{
                                            fill: "none",
                                        }}
                                    ></path>
                                    <path
                                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                        style={{
                                            fill: "currentColor",
                                        }}
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <span>Gửi</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

function Items({ currentItems }) {
    return (
        <div className="review-list">
            {currentItems.map((item) => (
                <div className="review-item">
                    <div className="review-info">
                        <img src={item.avatar} alt="" />
                        <span>{item.name}</span>
                    </div>
                    <div className="review-body">
                        <span>
                            {item.date.toLocaleDateString()} -{" "}
                            {item.date.toLocaleTimeString()}
                        </span>
                        <p>{item.content}</p>
                        <img src={item.starImg} alt="" />
                    </div>
                </div>
            ))}
        </div>
    );
}

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

function NoReviewYet() {
    return (
        <div className="NoReviewYet">
            <span className="title-text">
                Chưa Có <span className="green-text">Đánh Giá</span>
            </span>
            <span className="text-content">
                Hãy để lại trải nghiệm của bạn về sản phẩm bằng cách gửi đánh
                giá ngay
            </span>
        </div>
    );
}

export default ProductDetail;
