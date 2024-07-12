import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Events from "./components/Events";
import EventInfo from "./components/EventInfo";
import About from "./components/About";
import Projects from "./components/Projects";
import { Route, Routes } from "react-router-dom";
import Domains from "./components/Domains";
import UserProfile from "./components/UserProfile";
import UserDetails from "./components/UserDetails";
import Signin from "./components/SignIn";
import ForgotPassword from "./components/ForgotPassword";
import AdminPage from "./components/Admin_op/AdminPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Details" element={<UserDetails />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="/forgot/password" element={<ForgotPassword />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Events/:eventName" element={<EventInfo />} />
        <Route path="/Domain/:domainName" element={<Domains />} />
        <Route path="/Profile/:username" element={<UserProfile />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
