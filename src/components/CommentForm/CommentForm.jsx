import { TextField, Button } from "@mui/joy";
import { Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../state/context/authContext";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setReduxStatePushComment } from "../../state/redux/actions/commentsActions";

const INITIAL_STATE = {
    content: "",
};

const CommentForm = () => {
    const [form, setForm] = useState(INITIAL_STATE);
    const { userData } = useContext(AuthContext);
    const { chatActive } = useSelector((state) => state.chatActive);
    const dispatch = useDispatch();

    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const submitUserForm = (e) => {
        e.preventDefault();

        const body = { ...form, username: userData.username };
        dispatch(setReduxStatePushComment(body, chatActive.id));

        setForm(INITIAL_STATE);
    };

    return (
        <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap="1rem"
        >
            <TextField
                name="content"
                type="text"
                placeholder="Your message"
                value={form.content}
                onChange={handleChangeForm}
                sx={{ width: "30vw" }}
            />
            <Button onClick={submitUserForm}>Send</Button>
        </Grid>
    );
};

export default CommentForm;
