import { Grid } from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";
import Comment from "../Comment/Comment";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useChatDetail } from "../../customHooks/useChatDetail";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import {
    setReduxStateGetComments,
    setReduxStatePushComment,
} from "../../state/redux/actions/commentsActions";
import shortid from "shortid";
import { useSocket } from "../../customHooks/useSocket";
import { AuthContext } from "../../state/context/authContext";

const Comments = () => {
    const { chatActive } = useSelector((state) => state.chatActive);
    const { comments } = useSelector((state) => state.comments);
    const chatDetail = useChatDetail(chatActive);
    const { userData } = useContext(AuthContext);
    const dispatch = useDispatch();
    const socketData = useSocket();
    const scrollWindow = useRef(null);

    useEffect(() => {
        chatDetail && dispatch(setReduxStateGetComments(chatDetail.comments));
    }, [chatDetail]);

    useEffect(() => {
        scrollWindow.current.scrollTop = scrollWindow.current.scrollHeight;
    }, [comments]);

    useEffect(() => {
        socketData &&
            socketData.chatId === chatActive.id &&
            dispatch(
                setReduxStatePushComment(socketData.body, socketData.chatId)
            );
    }, [socketData]);

    return (
        <Grid
            ref={scrollWindow}
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="start"
            gap="2rem"
            sx={{
                width: "100%",
                height: "57vh",
                padding: { xs: "0 0.8rem", md: "0 2rem" },
                overflowY: "scroll",
                flexWrap: "nowrap",
            }}
        >
            {comments.length > 0 &&
                comments.map((comment) => (
                    <Comment comment={comment} key={shortid.generate()} />
                ))}
        </Grid>
    );
};

export default Comments;
