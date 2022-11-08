import React from 'react';
import './Home.css';

import NavBar from '../../components/NavBar';
import Categories from '../../components/Categories';
import PopularProduct from '../../components/PopularProduct';
import RecommendCategories from './RecommendCategories';
import Recommend from '../../components/Recommend'
import Footer from '../../components/Footer'

import banner from '../../assets/images/5323800.jpg';

function Home() {
    return (
        <div className='Home'>
            <NavBar />
            <img src={banner} className='home-banner' alt=''/>
            <Categories />
            <PopularProduct />
            <RecommendCategories />
            <Recommend />
            <Footer />
        </div>
    )
}

export default Home;