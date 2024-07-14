import React, { useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CardContent from "@mui/material/CardContent";
import { Formik, useFormik } from "formik";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../../styles/Login.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSnackBar } from "../../features/snackbar/snackbar";
export default function NewsForm() {
  // env variables

  // Calling getNews from API

  const getNewsApi = process.env.REACT_APP_GET_NEWS;
  const createNewsApi = process.env.REACT_APP_CREATE_NEWS;
  const deleteNewsApi = process.env.REACT_APP_DELETE_NEWS;
  const updateNewsApi = process.env.REACT_APP_UPDATE_NEWS;
  useEffect(() => {
    getNews();
  }, []);

  // React hooks

  const [news, setNews] = useState([]);
  const titleRef = useRef();
  const linkRef = useRef();
  const contentRef = useRef();
  const dispatch = useDispatch();

  // Function to clear input fields

  const clearInputFields = () => {
    titleRef.current.value = "";
    linkRef.current.value = "";
    contentRef.current.value = "";
  };

  // Function for setting input fields

  const setInputFields = () => {
    console.log(carItem.link);
    titleRef.current.value = carItem.title;
    linkRef.current.value =
      typeof carItem.image === "undefined" ? "" : carItem.image;
    contentRef.current.value = carItem.content;
  };

  //  Function for CRUD operations

  const getNews = async (e) => {
    try {
      const res = await axios.get(getNewsApi);
      setNews(res.data);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const upodateNews = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(updateNewsApi + carItem._id, formik.values, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("authToken")
            .slice(1, localStorage.getItem("authToken").length - 1)}`,
        },
      });
      clearInputFields();
      getNews();
      dispatch(
        setSnackBar({ message: "Update News successfully", variant: "success" })
      );
    } catch (e) {
      console.log(e);
      dispatch(
        setSnackBar({ message: "Error in updating news", variant: "error" })
      );
    }
  };

  const createNews = async (e) => {
    console.log(
      `Bearer ${localStorage
        .getItem("authToken")
        .slice(1, localStorage.getItem("authToken").length - 1)}`
    );
    try {
      const res = await axios.post(createNewsApi, e, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("authToken")
            .slice(1, localStorage.getItem("authToken").length - 1)}`,
        },
      });
      clearInputFields();
      getNews();
      dispatch(
        setSnackBar({ message: "News Added Successsfully", variant: "success" })
      );
    } catch (e) {
      console.log(e);
      dispatch(
        setSnackBar({ message: "Error adding in news", variant: "error" })
      );
    }
  };

  const deleteNews = async (e) => {
    try {
      const res = await axios.delete(deleteNewsApi + e._id, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("authToken")
            .slice(1, localStorage.getItem("authToken").length - 1)}`,
        },
      });
      dispatch(
        setSnackBar({
          message: "Deleted Domain successfully",
          variant: "success",
        })
      );
      getNews();
    } catch (e) {
      console.log(e);
      dispatch(
        setSnackBar({
          message: "Erorr in deleting domain",
          variant: "error",
        })
      );
    }
  };

  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  const editCarousal = (item) => {
    setCarItem(item);
    handleOpen();
  };
  const [open, setOpen] = React.useState(false);
  const [carItem, setCarItem] = React.useState({});
  const [update, setUpdate] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      content: "",
    },
    validate: (values) => {
      let errors = {};

      if (values.title === "") {
        errors.title = "Heading Required";
      }

      if (values.content === "") {
        errors.content = "Description requried";
      }
      return errors;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formik.errors.title) {
      document.getElementById("news-heading").style.border = "1px solid red";
    }
    if (formik.errors.content) {
      document.getElementById("news-desc").style.border = "1px solid red";
    }
    if (!formik.errors.title && !formik.errors.content) {
      document.getElementById("news-heading").style.border = "none";
      document.getElementById("news-desc").style.border = "none";
      createNews(formik.values);
    }
  };
  const ellipsisStyle = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "50rem",
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
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      gap: ".5rem",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                      {carItem.title}
                    </div>
                    <div>{carItem.date}</div>
                  </div>
                  <div style={{ marginTop: "1rem" }}>{carItem.content}</div>
                </CardContent>
                <Button
                  id="domain-edit-btn"
                  size="small"
                  onClick={() => {
                    setUpdate(true);
                    setInputFields();
                    handleClose(false);
                  }}
                >
                  Edit
                </Button>
              </Box>
            </Fade>
          </Modal>
          <Grid>
            <Typography
              sx={{ color: "white", mx: 3 }}
              variant="h5"
              component="div"
            >
              Current News Items
            </Typography>
            <Demo sx={{ borderRadius: "0.5rem", margin: "10px" }}>
              <List sx={{ padding: "0px" }}>
                {Object.entries(news).map((item) => {
                  return (
                    <ListItem
                      key={item[1].domainnName}
                      sx={{ borderBottom: "1px solid grey", padding: "14px" }}
                      secondaryAction={
                        <>
                          <IconButton
                            edge="end"
                            aria-label="edit"
                            sx={{ marginRight: "0.5rem" }}
                            onClick={() => {
                              editCarousal(item[1]);
                            }}
                          >
                            <EditNoteRoundedIcon />
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => {
                              deleteNews(item[1]);
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </>
                      }
                    >
                      <div
                        style={{
                          color: "black",
                          marginRight: "5rem",
                        }}
                      >
                        <div
                          style={{
                            fontWeight: "bold",
                            marginBottom: "1rem",
                            fontSize: "1.3rem",
                          }}
                        >
                          {item[1].title}
                        </div>
                        <div style={ellipsisStyle}>{item[1].content}</div>
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
              <h3>{update ? "Update News" : "Add News"}</h3>
              {update && (
                <button
                  onClick={() => {
                    setUpdate(false);
                    clearInputFields();
                  }}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
          <div className="contact-fields">
            <form onSubmit={update ? upodateNews : handleSubmit}>
              <input
                type="text"
                id="news-heading"
                ref={titleRef}
                name="title"
                required
                placeholder="News Heading"
                onChange={formik.handleChange}
              />
              <input
                type="text"
                id="news-links"
                name="image"
                ref={linkRef}
                placeholder="Any Links"
                onChange={formik.handleChange}
              />

              <textarea
                style={{ resize: "none" }}
                placeholder="Description about News"
                name="content"
                id="news-desc"
                cols={30}
                rows={7}
                required
                ref={contentRef}
                onChange={formik.handleChange}
              ></textarea>
              <button className="submit-message">
                {update ? "Update News" : "Add News"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
