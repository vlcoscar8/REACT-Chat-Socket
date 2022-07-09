import { Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ChatCard from "../ChatCard/ChatCard";
import { useSelector } from "react-redux/es/exports";
import { AuthContext } from "../../state/context/authContext";

const ChatList = () => {
    const [chatList, setChatList] = useState();
    const { userData } = useContext(AuthContext);
    const { chats } = useSelector((state) => state.chats);

    useEffect(() => {
        if (userData) {
            const chatList =
                chats.length > 0
                    ? userData.chats.concat(chats)
                    : userData.chats;
            setChatList(chatList);
        }
    }, [chats, userData]);

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap="1rem"
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
