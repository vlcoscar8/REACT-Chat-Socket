import React from "react";
import User from "../User/User";
import { useSelector } from "react-redux/es/hooks/useSelector";
import shortid from "shortid";
import { Grid } from "@mui/material";

const UsersChat = () => {
    const { users } = useSelector((state) => state.users);

    return (
        <>
            <Grid
                container
                spacing={0}
                direction="row"
                alignItems="center"
                justifyContent="start"
                gap="1rem"
            >
                {users.length > 0 &&
                    users.map((user) => (
                        <User user={user} key={shortid.generate()} />
                    ))}
            </Grid>
        </>
    );
};

export default UsersChat;
