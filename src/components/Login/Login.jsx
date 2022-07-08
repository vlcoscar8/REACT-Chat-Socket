import React, { useContext, useEffect, useState } from "react";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { loginUserFunction } from "../../state/context/authAction";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../state/context/authContext";

const INITIAL_STATE = {
    email: "",
    password: "",
};

const Login = () => {
    const [form, setForm] = useState(INITIAL_STATE);
    const { dispatch, userLogged } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    useEffect(() => {
        userLogged.loggedIn && navigate("/home");
        userLogged.error && setError(userLogged.error);
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
            <Typography level="body2">Sign in to continue</Typography>
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
                Log in
            </Button>
            <Typography
                endDecorator={<Link href="/register">Sign up</Link>}
                fontSize="sm"
                sx={{ alignSelf: "center" }}
            >
                Don't have an account?
            </Typography>
            {error && <h6>{error}</h6>}
        </div>
    );
};

export default Login;
