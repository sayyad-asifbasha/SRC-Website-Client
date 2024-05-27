import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Events from "./components/Events";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Members from "./components/Members";
function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Admin" element={<Login />} />
                <Route path="/Events/:EventName" element={<Events />} />
                <Route path="/About" element={<About />} />
                <Route path="/Members" element={<Members />} />
                {/* <Route path="/Projects/:projectName" element={<Home />} /> */}
            </Routes>
            <Footer />
        </>
    );
}

export default App;
