import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ChatCard from "../ChatCard/ChatCard";
import { useSelector } from "react-redux/es/exports";

const ChatList = () => {
    const [chatList, setChatList] = useState();
    const { chats } = useSelector((state) => state.chats);

    useEffect(() => {
        setChatList(chats);
    }, [chats]);

    return (
        <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap="1rem"
            style={{ minHeight: "8vh" }}
        >
            {chatList && chatList.length > 0 ? (
                chatList.map((chat) => <ChatCard chat={chat} key={chat.id} />)
            ) : (
                <p>Not chats created yet</p>
            )}
        </Grid>
    );
};

export default ChatList;
