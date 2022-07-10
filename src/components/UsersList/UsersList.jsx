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
                    direction="column"
                    alignItems="center"
                    justifyContent="start"
                    gap="1rem"
                    style={{ width: "10%", marginTop: "1rem" }}
                >
                    <Typography>Users List</Typography>

                    {users.map((user) => (
                        <UserButton user={user} key={user.email} />
                    ))}
                </Grid>
            )}
        </>
    );
};

export default UsersList;
