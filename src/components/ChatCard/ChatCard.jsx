import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useChatDetail } from "../../customHooks/useChatDetail";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setReduxStateActiveChat } from "../../state/redux/actions/chatActiveActions";
import {
    setReduxStateChatUsers,
    setReduxStateDefaultUser,
    setReduxStatePushUserToChat,
} from "../../state/redux/actions/usersActions";

const ChatCard = ({ chat }) => {
    const chatDetail = useChatDetail(chat);
    const dispatch = useDispatch();

    const changeActiveChat = () => {
        dispatch(setReduxStateActiveChat(chat));

        if (chat.users.length > 0) {
            dispatch(setReduxStateChatUsers(chat.users));
        } else {
            dispatch(setReduxStateDefaultUser());
            chatDetail.users.forEach((el) =>
                dispatch(setReduxStatePushUserToChat(el))
            );
        }
    };

    return (
        <>
            {chatDetail && (
                <Grid
                    onClick={changeActiveChat}
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
