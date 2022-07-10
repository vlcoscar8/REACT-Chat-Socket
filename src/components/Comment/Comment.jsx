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
                    <Typography
                        sx={{
                            marginBottom: "-0.5rem",
                            padding: "0.3rem",
                            backgroundColor: "#F0A370",
                            color: "white",
                        }}
                    >
                        {(
                            comment.from[0].username[0] +
                            comment.from[0].username[1]
                        ).toUpperCase()}
                    </Typography>
                    <Typography
                        sx={{
                            width: "50%",
                            padding: "0.5rem 1rem",
                            borderRadius: "0.5rem",
                            backgroundColor:
                                comment.from[0].username === userData.username
                                    ? "#B5EF8A"
                                    : "#B6CCA1",
                            color: "black",
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
