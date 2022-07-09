import { Grid } from "@mui/material";
import React from "react";
import ChatList from "../ChatList/ChatList";
import CreateChatButton from "../CreateChatButton/CreateChatButton";

const Chats = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="start"
            justifyContent="space-between"
            gap="1rem"
            style={{ width: "15vw" }}
        >
            <CreateChatButton />
            <ChatList />
        </Grid>
    );
};

export default Chats;
