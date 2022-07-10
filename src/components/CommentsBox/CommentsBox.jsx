import { Grid } from "@mui/material";
import React from "react";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";

const CommentsBox = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            gap="1rem"
            style={{
                padding: "1rem",
                border: "1px solid blue",
                height: "84%",
            }}
        >
            <Comments />
            <CommentForm />
        </Grid>
    );
};

export default CommentsBox;
