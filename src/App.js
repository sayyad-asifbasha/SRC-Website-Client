import { useEffect } from "react";
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
import UserVerify from "./components/UserVerify";
import SnackbarListener from "./components/SnackBarListener";
import { SnackbarProvider } from "notistack";
import Error from "./components/Utils/Error";
import UsersProfile from "./components/UsersProfile";
import { useDispatch, useSelector } from "react-redux";
import ResetPassword from "./components/Utils/ResetPassword";
import { isTokenExpired } from "./components/Utils/Auth";
import { loggedStatus } from "./features/user/user";
function App() {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.logStatus.role);
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      if (isTokenExpired(localStorage.getItem("authToken"))) {
        dispatch(
          loggedStatus({
            logged: false,
            token: "",
            name: "",
            role: "",
            email: "",
          })
        );
        localStorage.removeItem("authToken");
        localStorage.removeItem("username");
      }
    }
  }, [role]);

  return (
    <>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
      >
        <SnackbarListener />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Details" element={<UserDetails />} />
          <Route path="/Login" element={<Login />} />
          <Route
            path="/Admin"
            element={
              useSelector((state) => state.logStatus.logged) &&
              role === "admin" ? (
                <AdminPage />
              ) : (
                <Error />
              )
            }
          />
          <Route path="/forgot/password" element={<ForgotPassword />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Events/:eventName" element={<EventInfo />} />
          <Route path="/Domain/:domainName" element={<Domains />} />
          <Route
            path="/Profile/:username"
            element={
              useSelector((state) => state.logStatus.logged) ? (
                <UserProfile />
              ) : (
                <Error />
              )
            }
          />
          <Route
            path="/user/Profile/:email"
            element={
              useSelector((state) => state.logStatus.logged) ? (
                <UsersProfile />
              ) : (
                <Error />
              )
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="/user/verify/:authToken" element={<UserVerify />} />
          <Route
            path="/reset/password"
            element={
              useSelector((state) => state.logStatus.logged) ? (
                <ResetPassword />
              ) : (
                <Error />
              )
            }
          />
          <Route
            path="/reset/password/:authToken"
            element={<ResetPassword />}
          />
        </Routes>
        <Footer />
      </SnackbarProvider>
    </>
  );
}

export default App;
