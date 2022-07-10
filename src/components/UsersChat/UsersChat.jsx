import React, { useContext, useEffect } from "react";
import { setReduxStateChatUsers } from "../../state/redux/actions/usersActions";
import User from "../User/User";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { AuthContext } from "../../state/context/authContext";
import shortid from "shortid";

const UsersChat = ({ chat }) => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users);
    const { userData } = useContext(AuthContext);

    useEffect(() => {
        dispatch(setReduxStateChatUsers(chat.users));
    }, [userData]);

    return (
        <>
            {users.length > 0 &&
                users.map((user) => (
                    <User user={user} key={shortid.generate()} />
                ))}
        </>
    );
};

export default UsersChat;
