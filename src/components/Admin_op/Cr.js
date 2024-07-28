import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import "../../styles/Login.css";
import axios from "axios";
import { setSnackBar } from "../../features/snackbar/snackbar";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
export default function Cr() {
  // Getting Environment Variables
  const getUserProfile = process.env.REACT_APP_GET_USER_BY_EMAIL;
  const getUsers = process.env.REACT_APP_GET_USER_PROFILE_BY_EMAIL;
  const udpateRole = process.env.REACT_APP_UPDATE_ROLE_BY_EMAIL;
  const updateUserProfile =
    process.env.REACT_APP_UPDATE_USER_DETAILS_BY_ID_DONE_BY_USER;

  const [user, setUser] = useState(null);
  const [cancel, setCancel] = useState(false);
  const [loader, setLoader] = useState(false);

  const userFormik = useFormik({
    initialValues: {
      email: "",
      isCr: false,
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
      userFormik.setFieldValue("isCr", res.data.isCr);
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
    try {
      const role = {
        isCr: userFormik.values.isCr,
      };
      const used = await axios.get(getUsers + userFormik.values.email, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("authToken")
            .slice(1, localStorage.getItem("authToken").length - 1)}`,
        },
      });
      const res1 = await axios.put(updateUserProfile + used.data._id, role, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("authToken")
            .slice(1, localStorage.getItem("authToken").length - 1)}`,
        },
      });
      const res2 = await axios.put(udpateRole + user._id, role, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("authToken")
            .slice(1, localStorage.getItem("authToken").length - 1)}`,
        },
      });

      dispatch(
        setSnackBar({
          message: "successfully Updated CR",
          variant: "success",
        })
      );

      setUser(null);
      setCancel(false);
      userFormik.resetForm();

      setLoader(false);
    } catch (e) {
      console.log(e);
      setLoader(false);
      dispatch(
        setSnackBar({
          message: "Error in Updating CR",
          variant: "error",
        })
      );
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
        <div className="sub-contact-container" style={{ marginTop: "1.1rem" }}>
          <div className="contact-head">
            <div>
              <h3>Users</h3>
              {cancel && (
                <button
                  onClick={() => {
                    setUser(null);
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
            <form onSubmit={user ? handleUpdate : handleSubmit}>
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
                    placeholder="Enter user email"
                    defaultValue={user.email + "   ( " + user.role + " )"}
                  />
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox checked={userFormik.values.isCr} />}
                      label={user.isCr ? "Remove CR" : "Appoint CR"}
                      value={user.isCr}
                      name="isCr"
                      onChange={(e) =>
                        userFormik.setFieldValue("isCr", e.target.checked)
                      }
                    />
                  </FormGroup>
                </>
              )}

              {loader ? (
                <button className="submit-message" disabled={loader}>
                  <CircularProgress size={27} sx={{ color: "#022368" }} />
                </button>
              ) : (
                <button className="submit-message">
                  {user ? "Update CR" : "Get User"}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
