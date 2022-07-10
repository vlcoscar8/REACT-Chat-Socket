import React, { useContext } from "react";
import { logoutUserFunction } from "../../state/context/authAction";
import { AuthContext } from "../../state/context/authContext";
import { Box, Grid } from "@mui/material";
import { Button, Typography } from "@mui/joy";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setReduxStateDefaultChat } from "../../state/redux/actions/chatActions";
import { setReduxStateDefaultUser } from "../../state/redux/actions/usersActions";
import { setReduxStateDefaultComments } from "../../state/redux/actions/commentsActions";

const Header = () => {
    const { dispatch, userLogged } = useContext(AuthContext);
    const reduxDispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUserFunction(dispatch));
        reduxDispatch(setReduxStateDefaultChat());
        reduxDispatch(setReduxStateDefaultUser());
        reduxDispatch(setReduxStateDefaultComments());
    };

    return (
        <>
            {userLogged.loggedIn && (
                <Box sx={{ flexGrow: 1 }}>
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        style={{
                            height: "5rem",
                            backgroundColor: "#020122",
                        }}
                    >
                        <Grid
                            item
                            xs
                            style={{ textAlign: "left", marginLeft: "2rem" }}
                        >
                            <Typography
                                component="div"
                                sx={{
                                    flexGrow: 1,
                                    color: "white",
                                    fontSize: "1rem",
                                }}
                            >
                                React Chat App
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs
                            style={{ textAlign: "right", marginRight: "2rem" }}
                        >
                            <Button
                                onClick={logout}
                                variant="contained"
                                size="large"
                                sx={{
                                    color: "#020122",
                                    fontSize: "1rem",
                                    m: "1rem 0",
                                    p: "0.5rem 3rem 0.5rem 3rem",
                                    backgroundColor: "#FC9E4F",
                                    "&:hover": {
                                        color: "#020122",
                                        backgroundColor: "#F0A370",
                                    },
                                }}
                            >
                                Logout
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </>
    );
};

export default Header;
