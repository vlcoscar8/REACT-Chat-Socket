import React from "react";
import Button from "@mui/joy/Button";

const CreateChatButton = () => {
    return (
        <Button
            sx={{
                backgroundColor: "white",
                color: "#054DA7",
                border: "2px solid blue",
                mt: "2rem",
                p: "0.3rem 5rem",
                "&:hover": {
                    color: "white",
                    backgroundColor: "#054DA7",
                },
            }}
        >
            Create Chat
        </Button>
    );
};

export default CreateChatButton;
