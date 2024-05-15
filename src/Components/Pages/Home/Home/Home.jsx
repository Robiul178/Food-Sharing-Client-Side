
import About from "../About/About";
import Banner from "../Banner/Banner";
import Collectons from "../Collectons/Collectons";
import { Helmet } from "react-helmet-async";
import Impact from "../Impact/Impact";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Meal For Heal | HOME</title>
            </Helmet>
            <Banner />
            <About />
            <div className="bg-yellow-50 rounded-lg">
                <Collectons />
            </div>
            <Impact />

        </div>
    );
};

export default Home;