import PropTypes from 'prop-types';
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className='text-center h-[70vh] flex justify-center items-center'><span className="loading loading-infinity loading-lg"></span></div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};
PrivateRoutes.propTypes = {
    children: PropTypes.object
}
export default PrivateRoutes;