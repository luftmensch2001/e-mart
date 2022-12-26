import React from 'react';
import './RecommendCategories.css';
import { BsArrowRight } from "react-icons/bs";

import cat1 from '../../assets/images/recommend-cat/cat1-final.png';
import cat2 from '../../assets/images/recommend-cat/cat2-final.png';
import cat3 from '../../assets/images/recommend-cat/cat3-final.png';

function RecommendCategories() {
    return (
        <div className='RecommendCategories content'>
            <span className='title-text'>Mua gì <span className='green-text'>Hôm nay ?</span></span>
            <div className='recommend-cate-container'>
                <div className='recommend-cate-item'>
                    <img src={cat1} alt='' className='recommend-cate-img' />
                    <span className='recommend-cate-desc'>Những phong cách thời trang mới nhất</span>
                    <button className='recommend-cate-button'>
                        <p>Mua ngay</p>
                        <BsArrowRight className='recommend-cate-icon'/>
                    </button>
                </div>
                <div className='recommend-cate-item'>
                    <img src={cat2} alt='' className='recommend-cate-img' />
                    <span className='recommend-cate-desc'>Thiết bị điện tử chính hãng giá tốt</span>
                    <button className='recommend-cate-button'>
                        <p>Mua ngay</p>
                        <BsArrowRight className='recommend-cate-icon'/>
                    </button>
                </div>
                <div className='recommend-cate-item'>
                    <img src={cat3} alt='' className='recommend-cate-img' />
                    <span className='recommend-cate-desc'>Những đầu sách nổi tiếng mọi thời đại</span>
                    <button className='recommend-cate-button'>
                        <p>Mua ngay</p>
                        <BsArrowRight className='recommend-cate-icon'/>
                    </button>
                </div>
            </div>    
        </div>
    )
}

export default RecommendCategories;