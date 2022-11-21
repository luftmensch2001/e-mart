import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

import {
    AiOutlineSearch,
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiOutlineUser,
} from "react-icons/ai";
import {
    TiSocialFacebookCircular,
    TiSocialInstagram,
    TiSocialTwitterCircular,
    TiSocialYoutubeCircular,
} from "react-icons/ti";
import { FiPhoneCall } from "react-icons/fi";

function NavBar() {
    const [wishlistCount, setWishlistCount] = useState(8);
    const [cartCount, setCartCount] = useState(1);

    return (
        <div className="NavBar">
            <div className="navbar-full-width">
                <div className="content navbar-container">
                    <Link to="/" className="navbar-logo-link">
                        <span className="navbar-logo">
                            E-<span className="green-text">Mart</span>
                        </span>
                    </Link>
                    <div className="navbar-search-container">
                        <select className="navbar-category-select">
                            <option>Tất cả danh mục</option>
                            <option>Quần áo nam</option>
                            <option>Quần áo nữ</option>
                            <option>Sức khoẻ</option>
                        </select>
                        <input
                            className="navbar-search-input"
                            placeholder="Tìm kiếm sản phẩm"
                        />
                        <AiOutlineSearch className="navbar-search-icon" />
                    </div>
                    <div className="navbar-controller">
                        <Link to="/wishlist">
                            <div className="navbar-controller-item">
                                <AiOutlineHeart className="navbar-controller-icon" />
                                {wishlistCount > 0 && (
                                    <p className="navbar-controller-count">
                                        {wishlistCount}
                                    </p>
                                )}
                            </div>
                        </Link>
                        <div className="navbar-controller-item">
                            <AiOutlineShoppingCart className="navbar-controller-icon" />
                            {cartCount > 0 && (
                                <p className="navbar-controller-count">
                                    {cartCount}
                                </p>
                            )}
                        </div>
                        <Link
                            to="/account/profile"
                            className="navbar-controller-item"
                        >
                            <AiOutlineUser className="navbar-controller-icon" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="navbar-full-width height-60">
                <div className="content navbar-menu-container">
                    <ul className="navbar-menu-list">
                        <Link to="/">
                            <li className="navbar-menu-item">Trang chủ</li>
                        </Link>
                        <Link to="/account/buy-orders">
                            <li className="navbar-menu-item">Đơn mua</li>
                        </Link>
                        <Link to="/account/sell-orders">
                            <li className="navbar-menu-item">Đơn bán</li>
                        </Link>
                        <Link to="/account/store">
                            <li className="navbar-menu-item">Cửa hàng</li>
                        </Link>
                        <li className="navbar-menu-item">Giới thiệu</li>
                        <li className="navbar-menu-item">Liên hệ</li>
                    </ul>
                    <div className="navbar-contact">
                        <div className="navbar-social">
                            <TiSocialFacebookCircular className="navbar-social-icon" />
                            <TiSocialInstagram className="navbar-social-icon" />
                            <TiSocialTwitterCircular className="navbar-social-icon" />
                            <TiSocialYoutubeCircular className="navbar-social-icon" />
                        </div>
                        <div className="navbar-phone">
                            <FiPhoneCall className="navbar-phone-icon" />
                            <div className="navbar-phone-info">
                                <span className="navbar-phone-number">
                                    (+84) 935 0032 14
                                </span>
                                <span className="navbar-phone-desc">
                                    8AM - 17PM
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
