import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useChatDetail } from "../../customHooks/useChatDetail";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setReduxStateActiveChat } from "../../state/redux/actions/chatActiveActions";
import {
    setReduxStateChatUsers,
    setReduxStateDefaultUser,
    setReduxStatePushUserToChat,
} from "../../state/redux/actions/usersActions";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ChatCard = ({ chat }) => {
    const chatDetail = useChatDetail(chat);
    const { chatActive } = useSelector((state) => state.chatActive);
    const [active, setActive] = useState();
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

    useEffect(() => {
        chatActive && chatActive.id === chat.id
            ? setActive(true)
            : setActive(false);
    }, [chatActive]);

    return (
        <>
            {chatDetail && (
                <Grid
                    onClick={changeActiveChat}
                    container
                    spacing={0}
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    gap="1rem"
                    sx={{
                        minHeight: "8vh",
                        marginTop: "2rem",
                        padding: "1rem 0.5rem",
                        borderRadius: "0.2rem",
                        cursor: "pointer",
                        backgroundColor: active ? " #FC9E4F" : " #475B6A",
                        "&:hover": {
                            backgroundColor: "#455D90",
                            transition: "all 0.5s ease",
                        },
                    }}
                >
                    <Typography sx={{ color: "white" }}>
                        {chatDetail.owner[0].username.toUpperCase()}
                    </Typography>
                    <Typography sx={{ color: "white" }}>
                        Users: {chatDetail.users.length}
                    </Typography>
                </Grid>
            )}
        </>
    );
};

export default ChatCard;
