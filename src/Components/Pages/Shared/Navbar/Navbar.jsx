import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../Hook/useAuth";
import swal from 'sweetalert'
import { Pane, Popover, Text, Position, Button, UserIcon, LogOutIcon, LogInIcon } from 'evergreen-ui';
import { MdOutlinePayment } from "react-icons/md";


const Navbar = () => {

    const { user, loginOut } = useAuth();
    const navigate = useNavigate()

    const handleLogOut = () => {
        loginOut()
            .then(() => {
                swal('Sign-out successful')
                navigate('/')
            }).catch((error) => {
                swal(error)
            })
    }

    const links = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/avaliableFood">Avaliable Food</Link></li>
        <li><Link to="/addFood">Add Food</Link></li>
        <li><Link to="/manageMyfood">Manage My Food</Link></li>
        <li><Link to="/myFoodRequest"> My Food Request</Link></li>
    </>

    return (
        <div className="navbar max-w-7xl bg-base-100 fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <h2 className="text-xl font-bold">
                    <Link to='/'>MEAL for HEAL</Link>
                </h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>

            </div>
            <div className="navbar-end">
                <div>
                    {
                        user ? <div className="flex gap-3">
                            <Popover
                                content={
                                    <Pane
                                        width={240}
                                        height={240}
                                        display="flex"
                                        marginLeft='15px'
                                        justifyContent="center"
                                        flexDirection="column"
                                    >
                                        <Text>
                                            <>
                                                <Link to={'/userProfile'}> <Button marginY={8} marginRight={12} iconBefore={UserIcon}>
                                                    MY PROFILE
                                                </Button></Link>

                                                <Link to='/payment'>
                                                    <Button marginY={8} marginRight={12} >
                                                        <MdOutlinePayment className="text-xl mr-2" /> PAYMENT METHOD </Button></Link>
                                                <Button onClick={handleLogOut} marginY={8} marginRight={12} iconBefore={LogOutIcon}>LOG OUT </Button> </>
                                        </Text>
                                    </Pane>
                                }
                                position={Position.BOTTOM}
                            >
                                <div className="avatar relative">
                                    <div className="w-12 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                            </Popover>
                            <div>
                                <Link to="/payment">
                                    <Button
                                        marginY={8} marginRight={12} >
                                        <MdOutlinePayment className="text-xl mr-2" /> DONATE
                                    </Button>
                                </Link>
                            </div>
                        </div>
                            :
                            <>
                                <Link to="/login">
                                    <Button
                                        marginY={8} marginRight={12} iconBefore={LogInIcon}>LOGIN
                                    </Button>
                                </Link>

                            </>
                    }
                </div>
            </div>
        </div>

    );
};

export default Navbar;