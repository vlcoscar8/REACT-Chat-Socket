import React from "react";
import Sheet from "@mui/joy/Sheet";
import Login from "../../components/Login/Login";
import { styles } from "../RegisterView/RegisterView";

const LoginView = () => {
    return (
        <Sheet sx={styles} variant="outlined">
            <Login />
        </Sheet>
    );
};

export default LoginView;
