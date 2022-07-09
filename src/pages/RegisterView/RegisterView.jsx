import React from "react";
import Sheet from "@mui/joy/Sheet";
import Register from "../../components/Register/Register";

export const styles = {
    maxWidth: 400,
    mx: "auto", // margin left & right
    my: 4, // margin top & botom
    py: 3, // padding top & bottom
    px: 2, // padding left & right
    display: "flex",
    flexDirection: "column",
    gap: 2,
    borderRadius: "sm",
    boxShadow: "md",
};

const RegisterView = () => {
    return (
        <Sheet sx={styles} variant="outlined">
            <Register />
        </Sheet>
    );
};

export default RegisterView;
