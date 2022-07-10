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
                padding: "2rem",
                border: "1px solid blue",
            }}
        >
            <Comments />
            <CommentForm />
        </Grid>
    );
};

export default CommentsBox;
