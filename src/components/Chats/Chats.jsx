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
            alignItems={{ xs: "center", md: "start" }}
            justifyContent="space-between"
            gap="1rem"
            sx={{
                width: { xs: "92vw", md: "15vw" },
                marginLeft: { md: "-7rem" },
            }}
        >
            <ChatList />
            <CreateChatButton />
        </Grid>
    );
};

export default Chats;
