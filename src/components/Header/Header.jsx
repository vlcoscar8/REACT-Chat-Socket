import { Button } from "@mui/joy";
import React, { useContext } from "react";
import { logoutUserFunction } from "../../state/context/authAction";
import { AuthContext } from "../../state/context/authContext";

const Header = () => {
    const { dispatch, userLogged } = useContext(AuthContext);

    const logout = () => {
        dispatch(logoutUserFunction(dispatch));
    };
    return (
        <>
            {userLogged.loggedIn && (
                <header className="header">
                    <h1>React Chat app</h1>
                    <Button onClick={logout} className="button">
                        Logout
                    </Button>
                </header>
            )}
        </>
    );
};

export default Header;
