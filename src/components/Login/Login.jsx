import React, { useState } from "react";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";

const INITIAL_STATE = {
    username: "",
    email: "",
    password: "",
};

const Login = () => {
    const [form, setForm] = useState(INITIAL_STATE);

    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const submitUserForm = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div>
            <Typography level="h4" component="h1">
                <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign in to continue</Typography>
            <TextField
                // html input attribute
                name="email"
                type="email"
                placeholder="johndoe@email.com"
                // pass down to FormLabel as children
                label="Email"
                onChange={handleChangeForm}
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
                    mt: 1, // margin top
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
        </div>
    );
};

export default Login;
