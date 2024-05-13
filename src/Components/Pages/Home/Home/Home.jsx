
import About from "../About/About";
import Banner from "../Banner/Banner";
import Collectons from "../Collectons/Collectons";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>HOME | Meal For Heal</title>
            </Helmet>
            <Banner />
            <About />
            <div className="bg-yellow-50 ">
                <Collectons />
            </div>
        </div>
    );
};

export default Home;