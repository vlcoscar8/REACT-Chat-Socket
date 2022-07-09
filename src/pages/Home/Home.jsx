import React from "react";
import { Grid } from "@mui/material";
import Chats from "../../components/Chats/Chats";
import Chat from "../../components/Chat/Chat";
import UsersList from "../../components/UsersList/UsersList";

const Home = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="row"
            alignItems="start"
            justifyContent="space-between"
            gap="1rem"
            style={{ minHeight: "85vh" }}
        >
            <Chats />
            <Chat />
            <UsersList />
        </Grid>
    );
};

export default Home;
