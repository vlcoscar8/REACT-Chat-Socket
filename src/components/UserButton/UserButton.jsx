import React from "react";
import Button from "@mui/joy/Button";

const UserButton = ({ user }) => {
    return (
        <Button
            size="medium"
            sx={{
                color: "white",
                fontSize: "0.8rem",
                m: "0 1rem",
                p: "1rem 1.5rem 1rem 1.5rem",
            }}
        >
            {user.username}
        </Button>
    );
};

export default UserButton;
