import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hook/useAuth";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return <span className="loading loading-ring loading-lg"></span>

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={location.pathname} replace={true}></Navigate>
};

export default PrivateRoute;