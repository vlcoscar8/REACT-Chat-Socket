import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home/Home";

import LoginView from "./components/login/LoginView";

function App() {
    return (
        <>
            <Router>
                <main>
                    <Routes>
                        <Route exact path="/" element={<LoginView />} />
                        <Route exact path="/home" element={<Home />} />
                    </Routes>
                </main>
            </Router>
        </>
    );
}

export default App;
