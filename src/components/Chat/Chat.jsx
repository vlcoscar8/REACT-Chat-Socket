import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../state/context/authContext";
import ChatTitle from "../ChatTitle/ChatTitle";
import UsersChat from "../UsersChat/UsersChat";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setReduxStateActiveChat } from "../../state/redux/actions/chatActiveActions";
import { setReduxStateChatUsers } from "../../state/redux/actions/usersActions";
import CommentsBox from "../CommentsBox/CommentsBox";

const Chat = () => {
    const { userData } = useContext(AuthContext);
    const dispatch = useDispatch();
    const { chatActive } = useSelector((state) => state.chatActive);

    useEffect(() => {
        if (userData) {
            dispatch(setReduxStateActiveChat(userData.chats[0]));

            userData.chats.length > 0 &&
                dispatch(setReduxStateChatUsers(userData.chats[0].users));
        }
    }, [userData]);

    return (
        <>
            {chatActive && (
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="start"
                    gap="1rem"
                    sx={{
                        width: { md: "75%" },
                        height: "95vh",
                        padding: { xs: "2rem 0.3rem", md: "2rem" },
                        backgroundColor: "#F3F4B3",
                    }}
                >
                    <ChatTitle chat={chatActive} />
                    <UsersChat />
                    <CommentsBox />
                </Grid>
            )}
        </>
    );
};

export default Chat;
