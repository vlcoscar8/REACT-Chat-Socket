import { Button } from "@mui/joy";
import React from "react";

const User = ({ user }) => {
    const removeUser = () => {};
    return <Button onClick={removeUser}>{user.username}</Button>;
};

export default User;
