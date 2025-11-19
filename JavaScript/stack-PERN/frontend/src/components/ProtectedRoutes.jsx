import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = ({ redirectTo, children, isAllowed }) => {
    if (!isAllowed) {
        return <Navigate to={redirectTo} replace />;
    }

    return children ? children : <Outlet />;
};
