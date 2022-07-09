import { Button } from "@mui/joy";
import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setReduxStatePushUserToChat } from "../../state/redux/actions/usersActions";
import { environment } from "../../environment/environment";
import { useSelector } from "react-redux/es/hooks/useSelector";

const UserButton = ({ user }) => {
    const dispatch = useDispatch();
    const { chatActive } = useSelector((state) => state.chats);

    const addUserToChat = () => {
        const bodyRequest = {
            username: user.username,
        };
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyRequest),
        };
        fetch(
            `${environment.API_URL}/chat/add/user/${chatActive.id}`,
            requestOptions
        ).then(() => dispatch(setReduxStatePushUserToChat(user)));
    };

    return (
        <Button
            onClick={addUserToChat}
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
