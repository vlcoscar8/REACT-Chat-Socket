import React from "react";
import CreateChatButton from "../../components/CreateChatButton/CreateChatButton";
import { Grid } from "@mui/material";
import ChatList from "../../components/ChatList/ChatList";

const Home = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="start"
            gap="1rem"
            style={{ minHeight: "100vh" }}
        >
            <ChatList />
            <CreateChatButton />
        </Grid>
    );
};

export default Home;
