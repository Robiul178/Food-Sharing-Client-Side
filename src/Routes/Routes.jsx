import { Outlet } from "react-router-dom";
import Navbar from "../Components/Pages/Shared/Navbar/Navbar";
import Footer from "../Components/Pages/Shared/Footer/Footer";


const Routes = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Routes;