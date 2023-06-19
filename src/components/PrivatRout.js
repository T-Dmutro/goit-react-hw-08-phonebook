import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from '../redux/auth/authSelectors';


export default function PrivatRoute({children, redirectTo}){
    const iLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (iLoggedIn ? children : <Navigate to={redirectTo} />);
};

