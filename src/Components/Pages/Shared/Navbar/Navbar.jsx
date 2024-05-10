import { Link } from "react-router-dom";
import useAuth from "../../../../Hook/useAuth";

const Navbar = () => {

    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(() => { }).catch(() => { });
    }

    const links = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/avaliableFood">Avaliable Food</Link></li>
        <li><Link to="/addFood">Add Food</Link></li>
        <li><Link to="/manageMyfood">Manage My Food</Link></li>
        <li><Link to="/myFoodRequest"> My Food Request</Link></li>
    </>

    return (
        <div>
            <div className="navbar  bg-transparent z-10 fixed">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu text-2xl menu-sm text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-4xl text-white">daisyUI</a>
                </div>
                <div className="navbar-end w-full">
                    <ul className="menu text-xl font-bold menu-horizontal px-1 text-white">
                        {links}
                    </ul>
                    <div>
                        {
                            user ?
                                <>
                                    <div className="tooltip tooltip-left mr-4" data-tip={user?.email}>
                                        <div className="avatar relative top-5">
                                            <div className="w-12 rounded-full">
                                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={handleLogOut} className="btn btn-outline mr-4">
                                        <Link to="/registrstion">Log Out</Link>
                                    </button>
                                </>
                                :
                                <>

                                    <button className="btn btn-outline">
                                        <Link to="/login">Login</Link>
                                    </button>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;