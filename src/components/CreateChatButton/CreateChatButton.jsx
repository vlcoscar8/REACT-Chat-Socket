import { Button } from "@mui/joy";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { environment } from "../../environment/environment";
import { AuthContext } from "../../state/context/authContext";
import { useSelector } from "react-redux/es/exports";
import { setReduxStatePushChat } from "../../state/redux/actions/chatActions";

const CreateChatButton = () => {
    const { userLogged, userData } = useContext(AuthContext);
    const { chats } = useSelector((state) => state.chats);
    const [error, setError] = useState(false);
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

        checkLength();
    };

    const checkLength = () => {
        const chatList =
            chats && chats.length > 0
                ? userData.chats.concat(chats)
                : userData.chats;

        chatList && chatList.length >= 2 && setError(true);
    };

    useEffect(() => {
        userData && checkLength();
    }, [userData]);

    return (
        <>
            {!error ? (
                <Button
                    onClick={createChat}
                    sx={{
                        backgroundColor: "white",
                        color: "#054DA7",
                        border: "2px solid #054DA7",
                        mt: "2rem",
                        width: "100%",
                        "&:hover": {
                            color: "white",
                            backgroundColor: "#054DA7",
                        },
                    }}
                >
                    Create Chat
                </Button>
            ) : (
                <Button
                    sx={{
                        backgroundColor: "white",
                        color: "#054DA7",
                        border: "2px solid #054DA7",
                        mt: "2rem",
                        width: "100%",
                    }}
                    disabled
                >
                    Maximum 3 chats
                </Button>
            )}
        </>
    );
};

export default CreateChatButton;
