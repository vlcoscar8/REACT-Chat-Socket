import React, { useEffect, useReducer, useState } from "react";
import { authReducer } from "./authReducer";
import { INITIAL_STATE } from "./authReducer";
import { environment } from "../../environment/environment";

// Create context
export const AuthContext = React.createContext();

// Context
export const AuthProvider = ({ children }) => {
    const [userLogged, dispatch] = useReducer(authReducer, INITIAL_STATE);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        userLogged.loggedIn &&
            fetch(`${environment.API_URL}/user/${userLogged.userId}`)
                .then((res) => res.json())
                .then((data) => setUserData(data));
    }, [userLogged]);

    return (
        <AuthContext.Provider value={{ userLogged, dispatch, userData }}>
            {children}
        </AuthContext.Provider>
    );
};
