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
                padding: "0 1rem 1rem 1rem",
                height: "84%",
                backgroundColor: "#EFF0BD",
            }}
        >
            <Comments />
            <CommentForm />
        </Grid>
    );
};

export default CommentsBox;
