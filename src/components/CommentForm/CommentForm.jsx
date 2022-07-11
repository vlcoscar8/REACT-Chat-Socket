import { TextField, Button } from "@mui/joy";
import { Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../state/context/authContext";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { environment } from "../../environment/environment";
import { io } from "socket.io-client";

const INITIAL_STATE = {
    content: "",
};

const socket = io(`${environment.API_URL}`);

const CommentForm = () => {
    const [form, setForm] = useState(INITIAL_STATE);
    const { userData } = useContext(AuthContext);
    const { chatActive } = useSelector((state) => state.chatActive);
    const { users } = useSelector((state) => state.users);

    const [disabled, setDisabled] = useState(false);

    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const submitUserForm = (e) => {
        e.preventDefault();

        const body = { ...form, username: userData.username };
        const chatId = chatActive.id;
        const socketData = {
            body: body,
            chatId: chatId,
        };

        setForm(INITIAL_STATE);

        socket.emit("new message", socketData);
    };

    useEffect(() => {
        const user = users.find((user) => user.username === userData.username);

        !user ? setDisabled(true) : setDisabled(false);
    }, [chatActive, users]);

    return (
        <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap="1rem"
            sx={{
                backgroundColor: "#E7D196",
                width: { md: "100%" },
                padding: "1rem",
                boxSizing: "border-box",
            }}
        >
            <TextField
                name="content"
                type="text"
                placeholder="Your message"
                value={form.content}
                onChange={handleChangeForm}
                sx={{
                    width: { md: "82%" },
                    borderRadius: "7px",

                    "&:focus": {
                        outline: "none",
                    },
                }}
            />
            <Button
                sx={{
                    backgroundColor: "#EF5E41",
                    borderRadius: "7px",
                    width: { xs: "17vw", md: "15%" },

                    "&:hover": {
                        backgroundColor: "#FF5825",
                    },

                    "&:disabled": {
                        backgroundColor: "#EFF0BD",
                        color: "#F0A370",
                    },
                }}
                onClick={submitUserForm}
                disabled={disabled}
            >
                Send
            </Button>
        </Grid>
    );
};

export default CommentForm;
