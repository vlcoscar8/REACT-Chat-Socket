import { Button } from "@mui/joy";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { environment } from "../../environment/environment";
import { AuthContext } from "../../state/context/authContext";
import { setReduxStatePushChat } from "../../state/redux/actions/chatActions";

const CreateChatButton = () => {
    const { userLogged } = useContext(AuthContext);
    const dispatch = useDispatch();

    const createChat = async () => {
        const response = await fetch(
            `${environment.API_URL}/chat/create/${userLogged.userId}`,
            {
                method: "POST",
            }
        );

        const data = await response.json();

        dispatch(setReduxStatePushChat(data));
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
