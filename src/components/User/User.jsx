import { Button } from "@mui/joy";
import React, { useContext } from "react";
import { environment } from "../../environment/environment";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { setReduxStateDeleteUserFromChat } from "../../state/redux/actions/usersActions";
import { useChatDetail } from "../../customHooks/useChatDetail";
import { AuthContext } from "../../state/context/authContext";

const User = ({ user }) => {
    const dispatch = useDispatch();
    const { chatActive } = useSelector((state) => state.chatActive);
    const { userData } = useContext(AuthContext);
    const chatDetail = useChatDetail(chatActive);

    const removeUser = async () => {
        if (chatDetail.owner[0].username === userData.username) {
            const bodyRequest = {
                username: user.username,
            };
            const requestOptions = {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bodyRequest),
            };
            await fetch(
                `${environment.API_URL}/chat/remove/user/${chatDetail.id}`,
                requestOptions
            );
            dispatch(setReduxStateDeleteUserFromChat(user));
        }
    };
    return (
        <Button
            sx={{
                backgroundColor: "#EF5E41",
                borderRadius: "2px",
                "&:hover": {
                    backgroundColor: "#F0A370",
                },
            }}
            onClick={removeUser}
        >
            {(user.username[0] + user.username[1]).toUpperCase()}
        </Button>
    );
};

export default User;
