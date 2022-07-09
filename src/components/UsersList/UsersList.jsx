import { Typography } from "@mui/joy";
import * as React from "react";
import { environment } from "../../environment/environment";
import UserButton from "../UserButton/UserButton";
import { Toolbar } from "@material-ui/core";
import { Grid } from "@mui/material";

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
                    style={{ minHeight: "10vh" }}
                >
                    <Typography>User List</Typography>
                    <Toolbar>
                        {users.map((user) => (
                            <UserButton user={user} key={user.email} />
                        ))}
                    </Toolbar>
                </Grid>
            )}
        </>
    );
};

export default UsersList;
