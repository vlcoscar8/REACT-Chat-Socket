import { Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ChatCard from "../ChatCard/ChatCard";
import { useSelector } from "react-redux/es/exports";
import { AuthContext } from "../../state/context/authContext";
import shortid from "shortid";

const ChatList = () => {
    const [chatList, setChatList] = useState();
    const { userData } = useContext(AuthContext);
    const { chats } = useSelector((state) => state.chats);

    useEffect(() => {
        if (userData && chats) {
            for (let i = 0; i < userData.length; i++) {
                if (userData[i].id === userData[i + 1].id) {
                    userData.splice(i + 1, 1);
                }
            }

            for (let i = 0; i < chats.length; i++) {
                if (chats[i + 1] && chats[i].id === chats[i + 1].id) {
                    chats.splice(i + 1, 1);
                }
            }

            const chatList = chats.length > 0 ? chats : userData.chats;
            setChatList(chatList);
        }
    }, [chats, userData]);

    return (
        <>
            {chatList && (
                <Grid
                    container
                    spacing={0}
                    direction={{ xs: "row", md: "column" }}
                    alignItems="center"
                    justifyContent="center"
                    gap="1rem"
                    sx={{
                        width: { md: "15rem" },
                    }}
                >
                    {chatList.length > 0 ? (
                        chatList.map((chat) => (
                            <ChatCard chat={chat} key={shortid.generate()} />
                        ))
                    ) : (
                        <p>Not chats created yet</p>
                    )}
                </Grid>
            )}
        </>
    );
};

export default ChatList;
