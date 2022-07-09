import React, { useContext } from "react";
import { logoutUserFunction } from "../../state/context/authAction";
import { AuthContext } from "../../state/context/authContext";
import { Box, Grid } from "@mui/material";
import { Button, Typography } from "@mui/joy";

const Header = () => {
    const { dispatch, userLogged } = useContext(AuthContext);

    const logout = () => {
        dispatch(logoutUserFunction(dispatch));
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
                            minHeight: "5vh",
                            backgroundColor: "blue",
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
                                    color: "white",
                                    fontSize: "1rem",
                                    m: "1rem 0",
                                    p: "1rem 3rem 1rem 3rem",
                                    backgroundColor: "#3a3b50",
                                    "&:hover": {
                                        color: "black",
                                        backgroundColor: "white",
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
