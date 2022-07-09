import * as React from "react";
import { environment } from "../../environment/environment";
import UserButton from "../UserButton/UserButton";
import { Grid } from "@mui/material";
import { Typography } from "@mui/joy";

const UsersList = () => {
    const [users, setUsers] = React.useState();

    React.useEffect(() => {
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
                    style={{ width: "10%" }}
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
