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
            <div className="bg-black ">
                <Collectons />
            </div>
        </div>
    );
};

export default Home;