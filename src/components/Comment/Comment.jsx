import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../../state/context/authContext";

const Comment = ({ comment }) => {
    const { userData } = useContext(AuthContext);

    return (
        <>
            {userData && (
                <Grid
                    container
                    spacing={0}
                    direction="row"
                    alignItems="center"
                    justifyContent={
                        comment.from[0].username === userData.username
                            ? "right"
                            : "left"
                    }
                    gap="1rem"
                >
                    {comment.content}
                </Grid>
            )}
        </>
    );
};

export default Comment;
