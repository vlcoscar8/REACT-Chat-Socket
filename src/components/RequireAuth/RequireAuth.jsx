import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../state/context/authContext";

const RequireAuth = ({ children }) => {
    const { userLogged } = useContext(AuthContext);

    return userLogged.loggedIn ? children : <Navigate to="/" replace />;
};

export default RequireAuth;
