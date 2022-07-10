import { Button } from "@mui/joy";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { environment } from "../../environment/environment";
import { AuthContext } from "../../state/context/authContext";
import { useSelector } from "react-redux/es/exports";
import { setReduxStatePushChat } from "../../state/redux/actions/chatActions";
import { setReduxStateActiveChat } from "../../state/redux/actions/chatActiveActions";

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

        if (chats < 1) {
            dispatch(setReduxStateActiveChat(data));
        }

        checkLength();
    };

    const checkLength = () => {
        const chatList =
            chats && chats.length > 0
                ? userData.chats.concat(chats)
                : userData.chats;

        chatList && chatList.length >= 3 && setError(true);
    };

    useEffect(() => {
        userData && checkLength();
    }, [userData]);

    return (
        <>
            <Button
                onClick={createChat}
                sx={{
                    backgroundColor: "white",
                    color: "#054DA7",
                    mt: "2rem",
                    width: "100%",
                    "&:hover": {
                        color: "white",
                        backgroundColor: "#054DA7",
                    },

                    "&:disabled": {
                        backgroundColor: "#EED588",
                        color: "white",
                    },
                }}
                disabled={error ? true : false}
            >
                {error ? "Maximum 3 Groups" : "Create Group"}
            </Button>
        </>
    );
};

export default CreateChatButton;
