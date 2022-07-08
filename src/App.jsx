import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Home from "./pages/Home/Home";
import LoginView from "./pages/LoginView/LoginView";
import { AuthProvider } from "./state/context/authContext";
import { CssVarsProvider } from "@mui/joy/styles";
import RegisterView from "./pages/RegisterView/RegisterView";
import Header from "./components/Header/Header";

function App() {
    return (
        <>
            <AuthProvider>
                <CssVarsProvider>
                    <Header />
                    <Router>
                        <main>
                            <Routes>
                                <Route exact path="/" element={<LoginView />} />
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
                </CssVarsProvider>
            </AuthProvider>
        </>
    );
}

export default App;
