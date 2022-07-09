import { Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../state/context/authContext";
import ChatCard from "../ChatCard/ChatCard";

const ChatList = () => {
    const [chats, setChats] = useState();
    const { userData } = useContext(AuthContext);

    useEffect(() => {
        setChats(userData.chats);
    }, [userData]);

    return (
        <Grid
            container
            spacing={0}
            direction="flex"
            alignItems="center"
            justifyContent="center"
            gap="1rem"
            style={{ minHeight: "8vh" }}
        >
            {chats.length > 0 ? (
                chats.map((chat) => <ChatCard chat={chat} />)
            ) : (
                <p>Not chats created yet</p>
            )}
        </Grid>
    );
};

export default ChatList;
