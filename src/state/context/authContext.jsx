import React, { useEffect, useReducer, useState } from "react";
import { authReducer } from "./authReducer";
import { INITIAL_STATE } from "./authReducer";
import { environment } from "../../environment/environment";
import { setReduxStateChatList } from "../redux/actions/chatActions";

// Create context
export const AuthContext = React.createContext();

// Context
export const AuthProvider = ({ children }) => {
    const [userLogged, dispatch] = useReducer(authReducer, INITIAL_STATE);
    const [userData, setUserData] = useState();

    useEffect(() => {
        setUserData(null);
        userLogged.loggedIn &&
            fetch(`${environment.API_URL}/user/detail/${userLogged.userId}`)
                .then((res) => res.json())
                .then((data) => {
                    setUserData(data);
                    setReduxStateChatList(data.chats);
                });
    }, [userLogged]);

    return (
        <AuthContext.Provider value={{ userLogged, dispatch, userData }}>
            {children}
        </AuthContext.Provider>
    );
};
