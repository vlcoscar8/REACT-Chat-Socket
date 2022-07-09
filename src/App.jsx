import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Home from "./pages/Home/Home";
import LoginView from "./pages/LoginView/LoginView";
import { AuthProvider } from "./state/context/authContext";
import { CssVarsProvider } from "@mui/joy/styles";
import RegisterView from "./pages/RegisterView/RegisterView";
import Header from "./components/Header/Header";
import { createTheme, ThemeProvider } from "@mui/material";
import { Container } from "@material-ui/core";

const theme = createTheme();

theme.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
        fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "2.4rem",
    },
};
function App() {
    return (
        <>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    <CssVarsProvider>
                        <Header />
                        <Container>
                            <Router>
                                <main>
                                    <Routes>
                                        <Route
                                            exact
                                            path="/"
                                            element={<LoginView />}
                                        />
                                        <Route
                                            exact
                                            path="/register"
                                            element={<RegisterView />}
                                        />
                                        <Route
                                            exact
                                            path="/home"
                                            element={
                                                <RequireAuth>
                                                    <Home />
                                                </RequireAuth>
                                            }
                                        />
                                    </Routes>
                                </main>
                            </Router>
                        </Container>
                    </CssVarsProvider>
                </ThemeProvider>
            </AuthProvider>
        </>
    );
}

export default App;
