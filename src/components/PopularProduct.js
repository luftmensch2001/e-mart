import React from 'react';
import './PopularProduct.css';
import { BiCategory } from "react-icons/bi";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";


import iphone from '../assets/images/products/1.png';
import dongho from '../assets/images/products/38625950889ac5bc6a35f73617a5e7e8.jpg';
import i1star from '../assets/images/reviews/1.png';
import i2stars from '../assets/images/reviews/2.png';
import i3stars from '../assets/images/reviews/3.png';
import i4stars from '../assets/images/reviews/4.png';
import i5stars from '../assets/images/reviews/5.png';

function PopularProduct() {
    return (
        <div className='PopularProduct content'>
            <div className='popular-head'>
                <p className='title-text'>Sản phẩm <span className='green-text'>Phổ biến</span></p>    
                <div className='popular-filter'>
                    <BiCategory className='popular-filter-icon'/>
                    <select className='popular-filter-selector'>
                        <option>Tất cả danh mục</option>
                        <option>Thời trang nam</option>
                        <option>Đồng hồ</option>
                        <option>Mỹ phẩm</option>
                        <option>Khác</option>
                    </select>
                </div>
            </div>
            <div className='product-list'>
                <div className='product-item'>
                    <img className='product-img' src={iphone} alt=""/>
                    <div className='product-info'>
                        <p className='product-name'>iPhone 14 Chính Hãng VN/A</p>
                        <div className='product-star'>
                            <img src={i5stars} alt="" />
                            <span>(4.0)</span>
                        </div>
                        <div className='product-price-container'>
                            <span className='product-sale-price'>$24</span>
                            <span className='product-old-price'>$30</span>
                        </div>
                        <div className='product-buttons'>
                            <button className='product-add-to-cart-button'>
                                <AiOutlineShoppingCart className='product-add-to-cart-icon'/>
                                Thêm Vào Giỏ
                            </button>
                            <button className='product-add-to-wishlist-button'>
                                <AiOutlineHeart className='product-add-to-wishlist-icon'/>
                            </button>
                        </div>
                        
                    </div>
                </div>
                <div className='product-item'>
                    <img className='product-img' src={dongho} alt=""/>
                    <div className='product-info'>
                        <p className='product-name'>Đồng Hồ Rolex Mạ Vàng 24K</p>
                        <div className='product-star'>
                            <img src={i4stars} alt="" />
                            <span>(4.0)</span>
                        </div>
                        <div className='product-price-container'>
                            <span className='product-sale-price'>$24</span>
                            <span className='product-old-price'>$30</span>
                        </div>
                        <div className='product-buttons'>
                            <button className='product-add-to-cart-button'>
                                <AiOutlineShoppingCart className='product-add-to-cart-icon'/>
                                Thêm Vào Giỏ
                            </button>
                            <button className='product-add-to-wishlist-button'>
                                <AiOutlineHeart className='product-add-to-wishlist-icon'/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='product-item'>
                    <img className='product-img' src={iphone} alt=""/>
                    <div className='product-info'>
                        <p className='product-name'>iPhone 14 Chính Hãng VN/A</p>
                        <div className='product-star'>
                            <img src={i3stars} alt="" />
                            <span>(4.0)</span>
                        </div>
                        <div className='product-price-container'>
                            <span className='product-sale-price'>$24</span>
                            <span className='product-old-price'>$30</span>
                        </div>
                        <div className='product-buttons'>
                            <button className='product-add-to-cart-button'>
                                <AiOutlineShoppingCart className='product-add-to-cart-icon'/>
                                Thêm Vào Giỏ
                            </button>
                            <button className='product-add-to-wishlist-button'>
                                <AiOutlineHeart className='product-add-to-wishlist-icon'/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='product-item'>
                    <img className='product-img' src={dongho} alt=""/>
                    <div className='product-info'>
                        <p className='product-name'>iPhone 14 Chính Hãng VN/A</p>
                        <div className='product-star'>
                            <img src={i4stars} alt="" />
                            <span>(4.0)</span>
                        </div>
                        <div className='product-price-container'>
                            <span className='product-sale-price'>$24</span>
                            <span className='product-old-price'>$30</span>
                        </div>
                        <div className='product-buttons'>
                            <button className='product-add-to-cart-button'>
                                <AiOutlineShoppingCart className='product-add-to-cart-icon'/>
                                Thêm Vào Giỏ
                            </button>
                            <button className='product-add-to-wishlist-button'>
                                <AiOutlineHeart className='product-add-to-wishlist-icon'/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='product-item'>
                    <img className='product-img' src={dongho} alt=""/>
                    <div className='product-info'>
                        <p className='product-name'>iPhone 14 Chính Hãng VN/A</p>
                        <div className='product-star'>
                            <img src={i2stars} alt="" />
                            <span>(4.0)</span>
                        </div>
                        <div className='product-price-container'>
                            <span className='product-sale-price'>$24</span>
                            <span className='product-old-price'>$30</span>
                        </div>
                        <div className='product-buttons'>
                            <button className='product-add-to-cart-button'>
                                <AiOutlineShoppingCart className='product-add-to-cart-icon'/>
                                Thêm Vào Giỏ
                            </button>
                            <button className='product-add-to-wishlist-button'>
                                <AiOutlineHeart className='product-add-to-wishlist-icon'/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='product-item'>
                    <img className='product-img' src={iphone} alt=""/>
                    <div className='product-info'>
                        <p className='product-name'>iPhone 14 Chính Hãng VN/A</p>
                        <div className='product-star'>
                            <img src={i4stars} alt="" />
                            <span>(4.0)</span>
                        </div>
                        <div className='product-price-container'>
                            <span className='product-sale-price'>$24</span>
                            <span className='product-old-price'>$30</span>
                        </div>
                        <div className='product-buttons'>
                            <button className='product-add-to-cart-button'>
                                <AiOutlineShoppingCart className='product-add-to-cart-icon'/>
                                Thêm Vào Giỏ
                            </button>
                            <button className='product-add-to-wishlist-button'>
                                <AiOutlineHeart className='product-add-to-wishlist-icon'/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='product-item'>
                    <img className='product-img' src={dongho} alt=""/>
                    <div className='product-info'>
                        <p className='product-name'>iPhone 14 Chính Hãng VN/A</p>
                        <div className='product-star'>
                            <img src={i1star} alt="" />
                            <span>(4.0)</span>
                        </div>
                        <div className='product-price-container'>
                            <span className='product-sale-price'>$24</span>
                            <span className='product-old-price'>$30</span>
                        </div>
                        <div className='product-buttons'>
                            <button className='product-add-to-cart-button'>
                                <AiOutlineShoppingCart className='product-add-to-cart-icon'/>
                                Thêm Vào Giỏ
                            </button>
                            <button className='product-add-to-wishlist-button'>
                                <AiOutlineHeart className='product-add-to-wishlist-icon'/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='product-item'>
                    <img className='product-img' src={iphone} alt=""/>
                    <div className='product-info'>
                        <p className='product-name'>iPhone 14 Chính Hãng VN/A</p>
                        <div className='product-star'>
                            <img src={i4stars} alt="" />
                            <span>(4.0)</span>
                        </div>
                        <div className='product-price-container'>
                            <span className='product-sale-price'>$24</span>
                            <span className='product-old-price'>$30</span>
                        </div>
                        <div className='product-buttons'>
                            <button className='product-add-to-cart-button'>
                                <AiOutlineShoppingCart className='product-add-to-cart-icon'/>
                                Thêm Vào Giỏ
                            </button>
                            <button className='product-add-to-wishlist-button'>
                                <AiOutlineHeart className='product-add-to-wishlist-icon'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularProduct;