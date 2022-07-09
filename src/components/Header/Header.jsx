import React, { useContext } from "react";
import { logoutUserFunction } from "../../state/context/authAction";
import { AuthContext } from "../../state/context/authContext";
import { AppBar, Toolbar } from "@material-ui/core";
import { Typography } from "@mui/joy";
import Button from "@mui/joy/Button";

const Header = () => {
    const { dispatch, userLogged } = useContext(AuthContext);

    const logout = () => {
        dispatch(logoutUserFunction(dispatch));
    };

    return (
        <>
            {userLogged.loggedIn && (
                <AppBar position="relative">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                color: "white",
                                fontSize: "1rem",
                            }}
                        >
                            React Chat App
                        </Typography>
                        <div>
                            <Button
                                onClick={logout}
                                variant="contained"
                                size="large"
                                sx={{
                                    color: "white",
                                    fontSize: "1rem",
                                    m: "1rem 0",
                                    p: "1rem 3rem 1rem 3rem",
                                    color: "white",
                                    backgroundColor: "#3a3b50",
                                    "&:hover": {
                                        color: "black",
                                        backgroundColor: "white",
                                    },
                                }}
                            >
                                Logout
                            </Button>
                        </div>
                    </Toolbar>
                </AppBar>
            )}
        </>
    );
};

export default Header;
