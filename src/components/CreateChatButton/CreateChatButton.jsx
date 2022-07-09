import { Button } from "@mui/joy";
import React, { useContext } from "react";
import { environment } from "../../environment/environment";
import { AuthContext } from "../../state/context/authContext";

const CreateChatButton = () => {
    const { userLogged } = useContext(AuthContext);

    const createChat = async () => {
        await fetch(`${environment.API_URL}/chat/create/${userLogged.userId}`)
            .then((res) => res.json())
            .then((res) => console.log(res));
    };

    return (
        <Button
            onClick={createChat}
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
