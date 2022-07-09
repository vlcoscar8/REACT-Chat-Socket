import React, { useEffect } from "react";
import { setReduxStateChatUsers } from "../../state/redux/actions/usersActions";
import User from "../User/User";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

const UsersChat = ({ chat }) => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(setReduxStateChatUsers(chat.users));
    }, [chat]);

    return (
        <>
            {users.length > 0 &&
                users.map((user) => <User user={user} key={user.id} />)}
        </>
    );
};

export default UsersChat;
