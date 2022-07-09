import { Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../state/context/authContext";
import ChatTitle from "../ChatTitle/ChatTitle";

const Chat = () => {
    const [chat, setChat] = useState();
    const { userData } = useContext(AuthContext);

    useEffect(() => {
        userData && setChat(userData.chats[0]);
    }, [userData]);

    return (
        <>
            {chat && (
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="space-between"
                    gap="1rem"
                    style={{
                        width: "60%",
                        height: "88vh",
                    }}
                >
                    <ChatTitle chat={chat} />
                </Grid>
            )}
        </>
    );
};

export default Chat;
