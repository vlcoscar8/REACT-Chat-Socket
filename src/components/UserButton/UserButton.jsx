import { Button } from "@mui/joy";
import React from "react";

const UserButton = ({ user }) => {
    return (
        <Button
            size="medium"
            sx={{
                color: "white",
                fontSize: "0.8rem",
                width: "100%",
                m: "0 1rem",
                p: "1rem 1.5rem 1rem 1.5rem",
            }}
        >
            {user.username}
        </Button>
    );
};

export default UserButton;
