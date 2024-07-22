import React, {  useState } from "react";
import { useFormik } from "formik";
import "../../styles/Login.css";
import axios from "axios";
import { setSnackBar } from "../../features/snackbar/snackbar";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

export default function DomainForm() {
  // Getting Environment Variables
  const getUserProfile = process.env.REACT_APP_GET_USER_BY_EMAIL;
  const udpateRole = process.env.REACT_APP_UPDATE_ROLE_BY_EMAIL;
  const getUsers = process.env.REACT_APP_GET_USER_PROFILE_BY_EMAIL;

  const [user, setUser] = useState(null);
  const [cancel, setCancel] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loader,setLoader]=useState(false);

  const userFormik = useFormik({
    initialValues: {
      email: "",
      role: "",
      domainId: "",
    },
    validateOnMount: true,

    validate: (values) => {
      let errors = {};

      if (values.email === "") {
        errors.name = "Please enter the valid Email";
      }

      return errors;
    },
  });

  const dispatch = useDispatch();
  const getUser = async (e) => {
    try {
      setLoader(true);
      const res = await axios.get(getUserProfile + e.email, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("authToken")
            .slice(1, localStorage.getItem("authToken").length - 1)}`,
        },
      });
      console.log(res);
      setUser(res.data);
      setCancel(true);
      setLoader(false);
    } catch (e) {
      userFormik.resetForm();
      setLoader(false);
      setCancel(false);
      console.log(e);
      dispatch(setSnackBar({ message: "User not Found", variant: "error" }));
    }
  };

  // Function for Handling Form

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("getting details");
    if (userFormik.errors.email) {
      document.getElementById("user-email").style.border = "1px solid red";
    }

    if (!userFormik.errors.email) {
      document.getElementById("user-email").style.border = "none";

      getUser(userFormik.values);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoader(true);
    console.log("updating user");
    try {
      const role = {
        role: userFormik.values.role,
      };
      console.log(role);
      const res = await axios.put(udpateRole + user._id, role, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("authToken")
            .slice(1, localStorage.getItem("authToken").length - 1)}`,
        },
      });
      console.log(res);
      if (res.data.data.role === "Coordinator") {
        setSuccess(res.data.data);
        dispatch(
          setSnackBar({
            message: "successfully Updated Role. select Domain",
            variant: "success",
          })
        );
      } else {
        console.log("user if not coordinator");
        setUser(null);
        setCancel(false);
        handleRmoveDomain();
        userFormik.resetForm();
        dispatch(
          setSnackBar({
            message: "successfully Updated Role.",
            variant: "success",
          })
        );
      }
      setLoader(false);
    } catch (e) {
      console.log(e);
      setLoader(false);
    }
  };
  const handleRmoveDomain = async () => {
    try {
      console.log(userFormik.values.email);
      const used = await axios.get(getUsers + userFormik.values.email, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("authToken")
            .slice(1, localStorage.getItem("authToken").length - 1)}`,
        },
      });
      console.log(used)
      const domain = {
        $unset:{domain:""},
        role:userFormik.values.role
      };
      const res = await axios.put(
        "https://src-website-api.onrender.com/api/v1/profiles/update/" +
          used.data._id,
        domain
      );
      console.log(res);
      console.log("in domain");
    } catch (e) {
      console.log(e);
    }
  };
  const handleUpdateDomain = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const used = await axios.get(getUsers + success.email, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("authToken")
            .slice(1, localStorage.getItem("authToken").length - 1)}`,
        },
      });
      const domain = {
        domain: userFormik.values.domainId,
        role:userFormik.values.role
      };
      const res = await axios.put(
        " https://src-website-api.onrender.com/api/v1/profiles/update/" +
          used.data._id,
        domain
      );
      console.log(res);
      dispatch(setSnackBar(
        {
          message:"Successfully assigned a coordinator",
          variant:"success"
        }
      ))
      console.log("in domain");
      setSuccess(null);
      setCancel(false);
      setUser(null);
      userFormik.resetForm();
      setLoader(false);
    } catch (e) {
      dispatch(setSnackBar(
        {
          message:"Failed to  assigned a coordinator",
          variant:"error"
        }
      ))
      console.log(e);
      setLoader(false);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="sub-contact-container" style={{ margin: ".5rem" }}>
          <div className="contact-head">
            <div>
              <h3>Users</h3>
              {cancel && (
                <button
                  onClick={() => {
                    setUser(null);
                    setSuccess(null);
                    setCancel(false);
                    setLoader(false);
                    userFormik.resetForm();
                  }}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
          <div className="contact-fields">
            <form
              onSubmit={
                success && user
                  ? handleUpdateDomain
                  : user
                  ? handleUpdate
                  : handleSubmit
              }
            >
              <input
                type="text"
                id="user-email"
                disabled={!user ? false : true}
                required={user ? false : true}
                name="email"
                value={userFormik.values.email}
                placeholder="Enter user email"
                onChange={userFormik.handleChange}
              />
              {user && (
                <>
                  <input
                    type="text"
                    id="user-email"
                    disabled
                    name=""
                    placeholder="Enter user email"
                    defaultValue={user.email + "   ( " + user.role + " )"}
                  />
                  <select
                    name="role"
                    id="role"
                    style={{
                      height: "3rem",
                      border: "0.5px solid rgb(222,222,222)",
                      outline: "none",
                    }}
                    disabled={success ? true : false}
                    value={userFormik.values.role}
                    onChange={userFormik.handleChange}
                    required
                  >
                    <option value={""} disabled>
                      {" "}
                      select role
                    </option>
                    {user.role !== "admin" ? (
                      <option value={"admin"}>Admin</option>
                    ) : (
                      ""
                    )}
                    {user.role !== "Coordinator" ? (
                      <option value={"Coordinator"}>Coordinator</option>
                    ) : (
                      ""
                    )}
                    {user.role !== "user" ? (
                      <option value={"user"}>user</option>
                    ) : (
                      ""
                    )}
                  </select>
                </>
              )}
              {success && (
                <select
                  name="domainId"
                  id="role"
                  required
                  style={{
                    height: "3rem",
                    border: "0.5px solid rgb(222,222,222)",
                    outline: "none",
                    
                  }}
                  onChange={userFormik.handleChange}
                >
                  <option value={" "} disabled>Select Domain</option>
                  <option value={"66941ce2c02f158af0de725f"}>WEB</option>
                  <option value={"66941ce2c02f158af0de725f"}>APP</option>
                </select>
              )}
              {
                loader?
                (
                  <button className="submit-message" disabled={loader}>
                      <CircularProgress size={27} sx={{ color: "#022368" }} />
                  </button>
                ):
                (
                <button className="submit-message">
                      {user?"Update User":"Get User"}
                  </button>
                )
              }
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
