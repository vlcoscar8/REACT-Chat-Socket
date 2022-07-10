import { Button } from "@mui/joy";
import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setReduxStateDeleteUserFromChat } from "../../state/redux/actions/usersActions";

const User = ({ user }) => {
    const dispatch = useDispatch();

    const removeUser = async () => {
        dispatch(setReduxStateDeleteUserFromChat(user));
    };
    return <Button onClick={removeUser}>{user.username}</Button>;
};

export default User;
