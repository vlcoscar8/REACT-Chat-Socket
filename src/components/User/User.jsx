import { Button } from "@mui/joy";
import React from "react";
import { environment } from "../../environment/environment";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { setReduxStateDeleteUserFromChat } from "../../state/redux/actions/usersActions";

const User = ({ user }) => {
    const dispatch = useDispatch();
    const { chatActive } = useSelector((state) => state.chatActive);

    const removeUser = async () => {
        const bodyRequest = {
            username: user.username,
        };
        const requestOptions = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyRequest),
        };
        await fetch(
            `${environment.API_URL}/chat/remove/user/${chatActive.id}`,
            requestOptions
        );
        dispatch(setReduxStateDeleteUserFromChat(user));
    };
    return <Button onClick={removeUser}>{user.username}</Button>;
};

export default User;
