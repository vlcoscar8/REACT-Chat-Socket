import React, { useEffect, useState } from "react";
import { environment } from "../../environment/environment";
import UserButton from "../UserButton/UserButton";
import { Grid } from "@mui/material";
import { Typography } from "@mui/joy";

const UsersList = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        fetch(`${environment.API_URL}/user/list`)
            .then((res) => res.json())
            .then((res) => setUsers(res));
    }, []);

    return (
        <>
            {users && (
                <Grid
                    container
                    spacing={0}
                    direction={{ xs: "row", md: "column" }}
                    alignItems="center"
                    justifyContent={{ xs: "center", md: "start" }}
                    gap="1rem"
                    sx={{
                        width: { xs: "100vw", md: "10%" },
                        marginTop: "1rem",
                    }}
                >
                    <Typography
                        sx={{
                            textAlign: "center",
                        }}
                    >
                        Users List
                    </Typography>

                    {users.map((user) => (
                        <UserButton user={user} key={user.email} />
                    ))}
                </Grid>
            )}
        </>
    );
};

export default UsersList;
