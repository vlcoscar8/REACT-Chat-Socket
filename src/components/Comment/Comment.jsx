import { Typography } from "@mui/joy";
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
                    direction="column"
                    alignItems={
                        comment.from[0].username === userData.username
                            ? "end"
                            : "start"
                    }
                    justifyContent="center"
                    gap="1rem"
                >
                    <Typography sx={{ marginBottom: "-0.5rem" }}>
                        {comment.from[0].username}
                    </Typography>
                    <Typography
                        sx={{
                            width: "50%",
                            padding: "0.5rem",
                            borderRadius: "0.5rem",
                            backgroundColor:
                                comment.from[0].username === userData.username
                                    ? "green"
                                    : "grey",
                            color: "white",
                        }}
                    >
                        {comment.content}
                    </Typography>
                </Grid>
            )}
        </>
    );
};

export default Comment;
