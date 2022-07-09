import React, { useContext, useEffect, useState } from "react";
import { loginUserFunction } from "../../state/context/authAction";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../state/context/authContext";
import { Button, Typography, TextField } from "@mui/joy";
import { Link } from "@mui/material";

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
            <Typography level="h4" component="h1" sx={{ fontSize: 30 }}>
                <b>Welcome!</b>
            </Typography>
            <Typography level="body2" sx={{ fontSize: 20 }}>
                Sign up to continue
            </Typography>
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
                name="email"
                type="email"
                placeholder="johndoe@email.com"
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
                    fontSize: 18,
                }}
            />

            <Button
                sx={{
                    m: "1rem 0",
                    p: "1rem 3rem 1rem 3rem",
                    fontSize: 18,
                }}
                onClick={submitUserForm}
            >
                Sign up
            </Button>
            <Typography
                endDecorator={<Link href="/">Back to logIn view</Link>}
                fontSize="18px"
                sx={{ alignSelf: "center" }}
            ></Typography>
        </div>
    );
};

export default Register;
