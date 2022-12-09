import React from 'react';
import './Recommend.css'

import product1 from '../assets/images/products/2.jpg';
import product2 from '../assets/images/products/3.jpg';
import product3 from '../assets/images/products/4.jpg';
import product4 from '../assets/images/products/5.jpg';
import product5 from '../assets/images/products/6.jpg';
import i4stars from '../assets/images/reviews/4.png';

function Recommend() {
    return (
        <div className='Recommend content'>
            <div className='recommend-block'>
                <span className='title-text recommend-title'>Best <span className='green-text'>Seller</span></span>
                <div className='recommend-product-container'>
                    <div className='recommend-product'>
                        <img className='recommend-product-img' alt='' src={product1} />
                        <div className='recommend-product-info'>
                            <span className='recommend-product-name'>Nước Hoa Pháp Cao Cấp</span>
                            <img className='recommend-product-stars' alt='' src={i4stars} />
                            <span className='recommend-category'>Đồ điện tử</span>
                            <div className='recommend-price-container'>
                                <span className='recommend-price'>$24</span>
                                <span className='recommend-old-price'>$30</span>
                            </div>
                         </div>
                    </div>
                    <div className='recommend-product'>
                        <img className='recommend-product-img' alt='' src={product2} />
                        <div className='recommend-product-info'>
                            <span className='recommend-product-name'>Nước Hoa Pháp Cao Cấp</span>
                            <img className='recommend-product-stars' alt='' src={i4stars} />
                            <span className='recommend-category'>Đồ điện tử</span>
                            <div className='recommend-price-container'>
                                <span className='recommend-price'>$24</span>
                                <span className='recommend-old-price'>$30</span>
                            </div>
                         </div>
                    </div>
                    <div className='recommend-product'>
                        <img className='recommend-product-img' alt='' src={product3} />
                        <div className='recommend-product-info'>
                            <span className='recommend-product-name'>Nước Hoa Pháp Cao Cấp</span>
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
                        <img className='recommend-product-img' alt='' src={product4} />
                        <div className='recommend-product-info'>
                            <span className='recommend-product-name'>Nước Hoa Pháp Cao Cấp</span>
                            <img className='recommend-product-stars' alt='' src={i4stars} />
                            <span className='recommend-category'>Đồ điện tử</span>
                            <div className='recommend-price-container'>
                                <span className='recommend-price'>$24</span>
                                <span className='recommend-old-price'>$30</span>
                            </div>
                         </div>
                    </div>
                    <div className='recommend-product'>
                        <img className='recommend-product-img' alt='' src={product5} />
                        <div className='recommend-product-info'>
                            <span className='recommend-product-name'>Nước Hoa Pháp Cao Cấp</span>
                            <img className='recommend-product-stars' alt='' src={i4stars} />
                            <span className='recommend-category'>Đồ điện tử</span>
                            <div className='recommend-price-container'>
                                <span className='recommend-price'>$24</span>
                                <span className='recommend-old-price'>$30</span>
                            </div>
                         </div>
                    </div>
                    <div className='recommend-product'>
                        <img className='recommend-product-img' alt='' src={product1} />
                        <div className='recommend-product-info'>
                            <span className='recommend-product-name'>Nước Hoa Pháp Cao Cấp</span>
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
                <span className='title-text recommend-title'>Giảm <span className='green-text'>Giá Sâu</span></span>
                <div className='recommend-product-container'>
                    <div className='recommend-product'>
                        <img className='recommend-product-img' alt='' src={product2} />
                        <div className='recommend-product-info'>
                            <span className='recommend-product-name'>Nước Hoa Pháp Cao Cấp</span>
                            <img className='recommend-product-stars' alt='' src={i4stars} />
                            <span className='recommend-category'>Đồ điện tử</span>
                            <div className='recommend-price-container'>
                                <span className='recommend-price'>$24</span>
                                <span className='recommend-old-price'>$30</span>
                            </div>
                         </div>
                    </div>
                    <div className='recommend-product'>
                        <img className='recommend-product-img' alt='' src={product3} />
                        <div className='recommend-product-info'>
                            <span className='recommend-product-name'>Nước Hoa Pháp Cao Cấp</span>
                            <img className='recommend-product-stars' alt='' src={i4stars} />
                            <span className='recommend-category'>Đồ điện tử</span>
                            <div className='recommend-price-container'>
                                <span className='recommend-price'>$24</span>
                                <span className='recommend-old-price'>$30</span>
                            </div>
                         </div>
                    </div>
                    <div className='recommend-product'>
                        <img className='recommend-product-img' alt='' src={product4} />
                        <div className='recommend-product-info'>
                            <span className='recommend-product-name'>Nước Hoa Pháp Cao Cấp</span>
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