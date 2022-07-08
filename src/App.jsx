import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Home from "./pages/Home/Home";
import LoginView from "./pages/LoginView/LoginView";
import { AuthProvider } from "./state/context/authContext";

function App() {
    return (
        <>
            <AuthProvider>
                <Router>
                    <main>
                        <Routes>
                            <Route exact path="/" element={<LoginView />} />
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
            </AuthProvider>
        </>
    );
}

export default App;
