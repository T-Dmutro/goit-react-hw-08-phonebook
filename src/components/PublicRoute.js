import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from '../redux/auth/authSelectors';

const PublicRoute = ({children, restricted=false, redirectTo}) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shoildRedirect = isLoggedIn && restricted;
    return (shoildRedirect ? <Navigate to={redirectTo} /> : children);
};


export default PublicRoute;