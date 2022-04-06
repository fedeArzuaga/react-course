import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext"

export const PrivateRoute = ({ children }) => {

    const { user } = useContext( AuthContext );
    const location = useLocation();
    const queryParams = location.search || '';

    localStorage.setItem('lastPath', location.pathname + queryParams);

    return user.logged
        ? children
        : <Navigate to="/login" />

}
