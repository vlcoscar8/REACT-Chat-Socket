import React from "react";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";

const Register = () => {
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
            />
            <TextField
                // html input attribute
                name="email"
                type="email"
                placeholder="johndoe@email.com"
                // pass down to FormLabel as children
                label="Email"
            />
            <TextField
                name="password"
                type="password"
                placeholder="password"
                label="Password"
            />

            <Button
                sx={{
                    mt: 1, // margin top
                }}
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
