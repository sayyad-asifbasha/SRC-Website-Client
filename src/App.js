import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Events from "./components/Events";
import EventInfo from "./components/EventInfo";
import DomainInfo from "./components/DomainInfo";
import About from "./components/About";
import Projects from "./components/Projects";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Login />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Events/:eventName" element={<EventInfo />} />
        <Route path="/Domain/:domainName" element={<DomainInfo />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
