import { Grid, Typography } from "@mui/material";
import React from "react";
import { useChatDetail } from "../../customHooks/useChatDetail";

const ChatCard = ({ chat }) => {
    const chatDetail = useChatDetail(chat);

    return (
        <>
            {chatDetail && (
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    gap="1rem"
                    style={{
                        minHeight: "8vh",
                        border: "1px solid blue",
                        marginTop: "2rem",
                        padding: "1rem 0",
                        borderRadius: "6px",
                        cursor: "pointer",
                    }}
                >
                    <Typography>Chat</Typography>
                    <Typography>
                        Owner: {chatDetail.owner[0].username}
                    </Typography>
                    <Typography>Users: {chatDetail.users.length}</Typography>
                </Grid>
            )}
        </>
    );
};

export default ChatCard;
