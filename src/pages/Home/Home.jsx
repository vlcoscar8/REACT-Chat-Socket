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
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "center", md: "start" }}
            justifyContent="space-between"
            gap="1rem"
            style={{ minHeight: "85vh", width: { xs: "100vw", md: "80vw" } }}
        >
            <Chats />
            <Chat />
            <UsersList />
        </Grid>
    );
};

export default Home;
