import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../state/context/authContext";
import ChatTitle from "../ChatTitle/ChatTitle";
import UsersChat from "../UsersChat/UsersChat";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setReduxStateActiveChat } from "../../state/redux/actions/chatActions";

const Chat = () => {
    const { userData } = useContext(AuthContext);
    const dispatch = useDispatch();
    const { chatActive } = useSelector((state) => state.chats);

    useEffect(() => {
        userData && dispatch(setReduxStateActiveChat(userData.chats[0]));
    }, [userData]);

    return (
        <>
            {chatActive && (
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
                    <ChatTitle chat={chatActive} />
                    <UsersChat chat={chatActive} />
                </Grid>
            )}
        </>
    );
};

export default Chat;
