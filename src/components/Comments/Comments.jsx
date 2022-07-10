import { Grid } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Comment from "../Comment/Comment";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useChatDetail } from "../../customHooks/useChatDetail";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setReduxStateGetComments } from "../../state/redux/actions/commentsActions";
import shortid from "shortid";
import { CommentsDisabledTwoTone } from "@mui/icons-material";

const Comments = () => {
    const { chatActive } = useSelector((state) => state.chatActive);
    const { comments } = useSelector((state) => state.comments);
    const chatDetail = useChatDetail(chatActive);
    const dispatch = useDispatch();

    const scrollWindow = useRef(null);

    useEffect(() => {
        chatDetail && dispatch(setReduxStateGetComments(chatDetail.comments));
    }, [chatDetail]);

    useEffect(() => {
        scrollWindow.current.scrollTop = scrollWindow.current.scrollHeight;
    }, [comments]);

    return (
        <Grid
            ref={scrollWindow}
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="start"
            gap="2rem"
            style={{
                width: "100%",
                height: "55vh",
                padding: "2rem",
                border: "1px solid blue",
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
