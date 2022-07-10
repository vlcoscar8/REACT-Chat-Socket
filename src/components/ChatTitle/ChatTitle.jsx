import { Typography } from "@mui/material";
import React from "react";
import { useChatDetail } from "../../customHooks/useChatDetail";

const ChatTitle = ({ chat }) => {
    const chatDetail = useChatDetail(chat);

    return (
        <>
            {chatDetail && (
                <Typography
                    sx={{
                        width: "100%",
                        textAlign: "center",
                        padding: "1rem",
                        boxSizing: "border-box",
                        height: "3rem",
                        marginTop: "-2rem",
                        borderBottom: "2px solid #EDD382",
                    }}
                >
                    {chatDetail.owner[0].username.toUpperCase()}'S CHAT
                </Typography>
            )}
        </>
    );
};

export default ChatTitle;
