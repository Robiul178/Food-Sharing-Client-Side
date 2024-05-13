// import React from 'react';

import About from "../About/About";
import Banner from "../Banner/Banner";
// import Category from "../Category/Category";
import Collectons from "../Collectons/Collectons";

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <div className="bg-yellow-50 ">
                <Collectons />
            </div>
            <div>
                <img src="https://images.pexels.com/photos/19996701/pexels-photo-19996701/free-photo-of-abundance-of-eggs-in-basket.jpeg" alt="" />
            </div>
        </div>
    );
};

export default Home;