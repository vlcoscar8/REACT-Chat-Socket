import React, { useContext, useEffect, useState } from "react";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { loginUserFunction } from "../../state/context/authAction";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../state/context/authContext";

const INITIAL_STATE = {
    username: "",
    email: "",
    password: "",
};

const Register = () => {
    const [form, setForm] = useState(INITIAL_STATE);
    const { dispatch, userLogged } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        userLogged.register && navigate("/");
    }, [userLogged, navigate]);

    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const submitUserForm = (e) => {
        e.preventDefault();
        dispatch(loginUserFunction(form, dispatch));
    };
    return (
        <div>
            <Typography level="h4" component="h1">
                <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign up to continue</Typography>
            <TextField
                name="username"
                type="text"
                placeholder="johndoe"
                label="Username"
                onChange={handleChangeForm}
                sx={{
                    mt: 2,
                    mb: 2,
                }}
            />
            <TextField
                // html input attribute
                name="email"
                type="email"
                placeholder="johndoe@email.com"
                // pass down to FormLabel as children
                label="Email"
                onChange={handleChangeForm}
                sx={{
                    mt: 2,
                    mb: 2,
                }}
            />
            <TextField
                name="password"
                type="password"
                placeholder="password"
                label="Password"
                onChange={handleChangeForm}
                sx={{
                    mt: 2,
                    mb: 2,
                }}
            />

            <Button
                sx={{
                    mt: 2,
                    mb: 2,
                    pl: 6,
                    pr: 6,
                }}
                onClick={submitUserForm}
            >
                Sign up
            </Button>
            <Typography
                endDecorator={<Link href="/">Back to logIn view</Link>}
                fontSize="sm"
                sx={{ alignSelf: "center" }}
            ></Typography>
        </div>
    );
};

export default Register;
