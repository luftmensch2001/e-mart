import React from 'react';
import './Recommend.css'

import productImg from '../assets/images/products/38625950889ac5bc6a35f73617a5e7e8.jpg'
import productImg2 from '../assets/images/products/beatsolo3.png'
import productImg3 from '../assets/images/products/product-290274-160922-071637-600x600.jpg'
import i4stars from '../assets/images/reviews/4.png';

function Recommend() {
    return (
        <div className='Recommend content'>
            <div className='recommend-block'>
                <span className='title-text recommend-title'>Best <span className='green-text'>Seller</span></span>
                <div className='recommend-product-container'>
                    <div className='recommend-product'>
                        <img className='recommend-product-img' alt='' src={productImg} />
                        <div className='recommend-product-info'>
                            <span className='recommend-product-name'>iPhone 14 VN/A</span>
                            <img className='recommend-product-stars' alt='' src={i4stars} />
                            <span className='recommend-category'>Đồ điện tử</span>
                            <div className='recommend-price-container'>
                                <span className='recommend-price'>$24</span>
                                <span className='recommend-old-price'>$30</span>
                            </div>
                         </div>
                    </div>
                    <div className='recommend-product'>
                        <img className='recommend-product-img' alt='' src={productImg2} />
                        <div className='recommend-product-info'>
                            <span className='recommend-product-name'>iPhone 14 VN/A</span>
                            <img className='recommend-product-stars' alt='' src={i4stars} />
                            <span className='recommend-category'>Đồ điện tử</span>
                            <div className='recommend-price-container'>
                                <span className='recommend-price'>$24</span>
                                <span className='recommend-old-price'>$30</span>
                            </div>
                         </div>
                    </div>
                    <div className='recommend-product'>
                        <img className='recommend-product-img' alt='' src={productImg3} />
                        <div className='recommend-product-info'>
                            <span className='recommend-product-name'>iPhone 14 VN/A</span>
                            <img className='recommend-product-stars' alt='' src={i4stars} />
                            <span className='recommend-category'>Đồ điện tử</span>
                            <div className='recommend-price-container'>
                                <span className='recommend-price'>$24</span>
                                <span className='recommend-old-price'>$30</span>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
            <div className='recommend-block'>
                <span className='title-text recommend-title'>Mới <span className='green-text'>Nhất</span></span>
                <div className='recommend-product-container'>
                    <div className='recommend-product'>
                        <img className='recommend-product-img' alt='' src={productImg3} />
                        <div className='recommend-product-info'>
                            <span className='recommend-product-name'>iPhone 14 VN/A</span>
                            <img className='recommend-product-stars' alt='' src={i4stars} />
                            <span className='recommend-category'>Đồ điện tử</span>
                            <div className='recommend-price-container'>
                                <span className='recommend-price'>$24</span>
                                <span className='recommend-old-price'>$30</span>
                            </div>
                         </div>
                    </div>
                    <div className='recommend-product'>
                        <img className='recommend-product-img' alt='' src={productImg} />
                        <div className='recommend-product-info'>
                            <span className='recommend-product-name'>iPhone 14 VN/A</span>
                            <img className='recommend-product-stars' alt='' src={i4stars} />
                            <span className='recommend-category'>Đồ điện tử</span>
                            <div className='recommend-price-container'>
                                <span className='recommend-price'>$24</span>
                                <span className='recommend-old-price'>$30</span>
                            </div>
                         </div>
                    </div>
                    <div className='recommend-product'>
                        <img className='recommend-product-img' alt='' src={productImg2} />
                        <div className='recommend-product-info'>
                            <span className='recommend-product-name'>iPhone 14 VN/A</span>
                            <img className='recommend-product-stars' alt='' src={i4stars} />
                            <span className='recommend-category'>Đồ điện tử</span>
                            <div className='recommend-price-container'>
                                <span className='recommend-price'>$24</span>
                                <span className='recommend-old-price'>$30</span>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
            <div className='recommend-block'>
                <span className='title-text recommend-title'>Mua <span className='green-text'>Gần Đây</span></span>
                <div className='recommend-product-container'>
                    <div className='recommend-product'>
                        <img className='recommend-product-img' alt='' src={productImg2} />
                        <div className='recommend-product-info'>
                            <span className='recommend-product-name'>iPhone 14 VN/A</span>
                            <img className='recommend-product-stars' alt='' src={i4stars} />
                            <span className='recommend-category'>Đồ điện tử</span>
                            <div className='recommend-price-container'>
                                <span className='recommend-price'>$24</span>
                                <span className='recommend-old-price'>$30</span>
                            </div>
                         </div>
                    </div>
                    <div className='recommend-product'>
                        <img className='recommend-product-img' alt='' src={productImg3} />
                        <div className='recommend-product-info'>
                            <span className='recommend-product-name'>iPhone 14 VN/A</span>
                            <img className='recommend-product-stars' alt='' src={i4stars} />
                            <span className='recommend-category'>Đồ điện tử</span>
                            <div className='recommend-price-container'>
                                <span className='recommend-price'>$24</span>
                                <span className='recommend-old-price'>$30</span>
                            </div>
                         </div>
                    </div>
                    <div className='recommend-product'>
                        <img className='recommend-product-img' alt='' src={productImg} />
                        <div className='recommend-product-info'>
                            <span className='recommend-product-name'>iPhone 14 VN/A</span>
                            <img className='recommend-product-stars' alt='' src={i4stars} />
                            <span className='recommend-category'>Đồ điện tử</span>
                            <div className='recommend-price-container'>
                                <span className='recommend-price'>$24</span>
                                <span className='recommend-old-price'>$30</span>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommend;