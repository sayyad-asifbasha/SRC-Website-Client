import React, { useEffect, useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CardContent from "@mui/material/CardContent";
import { Button, CardActions } from "@mui/material";
import { useFormik } from "formik";
import "../../styles/Login.css";
import { toast, Bounce } from "react-toastify";
import axios from "axios";

export default function DomainForm() {
  // Calling getAllDomains in useEffect

  useEffect(() => {
    try {
      getAllDomains();
    } catch (e) {
      console.log(e);
    }
  }, []);

  // Getting Environment Variables

  //  Function to show Toast

  const showToast = (msg, msgType) => {
    if (msgType === "warn") {
      toast.warn(msg, {
        position: "top-right",
        autoClose: 3000,
        height: 100,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
    }
    if (msgType === "success") {
      toast.success(msg, {
        position: "top-right",
        autoClose: 3000,
        height: 100,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  // init of React Hooks

  const emailRef = useRef("");
  const [carItem, setCarItem] = React.useState({});
  const [officials, setOfficials] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validateOnMount: true,

    validate: (values) => {
      let errors = {};

      if (values.email === "") {
        errors.name = "Please enter the valid Domain Name";
      }

      return errors;
    },
  });

  //  Functions for CRUD

  // Function to get All Domains

  const getAllDomains = () => {
    try {
    } catch (e) {
      console.log(e);
    }
  };

  // Function for Handling Form

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formik.errors);

    if (formik.errors.email) {
      document.getElementById("user-email").style.border = "1px solid red";
    }

    if (!formik.errors.email) {
      document.getElementById("user-email").style.border = "none";

      addOfficial(formik.values);
    }
  };

  // Function for Adding Domain

  const addOfficial = async (e) => {
    console.log(e);
    try {
      showToast("user", "success");
      clearInputFields();

      formik.resetForm();
      getAllDomains();
    } catch (e) {
      console.log(e);
      showToast("Error in creating Domain", "warn");
    }
  };

  // Function for Deleting Official

  const removeOfficial = (e) => {
    console.log(e);
  };

  // Function for setting text in input fields

  // Function to clear Input Fields

  const clearInputFields = () => {
    emailRef.current.value = "";
  };

  // Function for Handlnig Modal

  // Custom Styles

  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  const editCarousal = (item) => {
    setCarItem(item);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ color: "white" }}>
          <Fade>
            <Box sx={style}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {carItem && carItem.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  scroll="paper"
                >
                  {carItem && carItem.description}
                </Typography>
              </CardContent>
            </Box>
          </Fade>
          <Grid>
            <Typography
              sx={{ color: "white", mx: 3 }}
              variant="h5"
              component="div"
            >
              Current Coordinators
            </Typography>
            <Demo sx={{ borderRadius: "0.5rem", margin: "10px" }}>
              <List sx={{ padding: "0px" }}>
                {officials &&
                  officials.map((item) => {
                    return (
                      <ListItem
                        key={item._id}
                        sx={{ borderBottom: "1px solid grey", padding: "14px" }}
                        secondaryAction={
                          <>
                            <IconButton edge="end" aria-label="delete">
                              <DeleteIcon
                                onClick={() => {
                                  removeOfficial(item);
                                }}
                              />
                            </IconButton>
                          </>
                        }
                      >
                        <div style={{ color: "black" }}>
                          <div
                            style={{ fontWeight: "bold", marginBottom: "1rem" }}
                          >
                            {item.name}
                          </div>
                          <div>{item.description}</div>
                        </div>
                      </ListItem>
                    );
                  })}
              </List>
            </Demo>
          </Grid>
        </div>

        <div className="sub-contact-container" style={{ margin: ".5rem" }}>
          <div className="contact-head">
            <div>
              <h3>Uesrs</h3>
            </div>
          </div>
          <div className="contact-fields">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="user-email"
                required
                ref={emailRef}
                name="name"
                placeholder="Enter user email"
                onChange={formik.handleChange}
              />

              <button className="submit-message">Get User</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
