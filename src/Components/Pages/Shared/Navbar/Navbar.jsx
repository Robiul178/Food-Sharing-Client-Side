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
        <li><Link to="/shop">Shop</Link></li>
    </>

    return (
        <div className="navbar  bg-transparent z-10 fixed ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to="/">
                    <h2 className="text-2xl font-bold">KICKiFY</h2>
                </Link>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div className="tooltip tooltip-left mr-4" data-tip={user?.email}>
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleLogOut} className="btn mr-4">
                                <Link to="/registrstion">Log Out</Link>
                            </button>
                        </>
                        :
                        <>

                            <button className="btn ">
                                <Link to="/login">Login</Link>
                            </button>
                        </>
                }
            </div>
        </div>

    );
};

export default Navbar;