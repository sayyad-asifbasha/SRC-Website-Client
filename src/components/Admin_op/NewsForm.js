import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CircularProgress from "@mui/material/CircularProgress";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
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
  const [copen, setCOpen] = React.useState(false);
  const [carItem, setCarItem] = React.useState({});
  const [cancel, setCancel] = useState(false);
  const [update, setUpdate] = useState({ check: false, news: "" });
  const [loader, setLoader] = useState(false);
  const handleCClose = () => setCOpen(false);

  const dispatch = useDispatch();

  // Function to clear input fields

  // Function for setting input fields

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
      setLoader(true);
      const res = await axios.put(
        updateNewsApi + update.news._id,
        formik.values,
        {
          headers: {
            Authorization: `Bearer ${localStorage
              .getItem("authToken")
              .slice(1, localStorage.getItem("authToken").length - 1)}`,
          },
        }
      );
      getNews();
      setUpdate({ check: false, news: "" });
      setCancel(false);
      formik.resetForm();
      dispatch(
        setSnackBar({ message: "Update News successfully", variant: "success" })
      );
      setLoader(false);
    } catch (e) {
      setLoader(false);
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
      setLoader(true);
      const res = await axios.post(createNewsApi, e, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("authToken")
            .slice(1, localStorage.getItem("authToken").length - 1)}`,
        },
      });
      getNews();
      dispatch(
        setSnackBar({ message: "News Added Successsfully", variant: "success" })
      );
      setLoader(false);
    } catch (e) {
      setLoader(false);
      console.log(e);
      dispatch(
        setSnackBar({ message: "Error adding in news", variant: "error" })
      );
    }
  };

  const deleteNews = async () => {
    try {
      const res = await axios.delete(deleteNewsApi + update.news._id, {
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
      handleCClose();
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

  const editNews = () => {
    setCancel(true);
    formik.setFieldValue("title", update.news.title);
    formik.setFieldValue("image", update.news.image);
    formik.setFieldValue("content", update.news.content);
    handleCClose();
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
          <div>
            <React.Fragment>
              <Dialog
                open={copen}
                onClose={handleCClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {update.check ? "Edit News" : "Delete News"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {update.check
                      ? "You are about to edit this news.Modify the details in following form"
                      : "You are about to delete this news. This action is irreversible. Do you wish to proceed?"}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => {
                      setUpdate({ check: false, news: "" });
                      setCOpen(false);
                      setCancel(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button onClick={update.check ? editNews : deleteNews}>
                    {update.check ? "Edit" : "Delete"}
                  </Button>
                </DialogActions>
              </Dialog>
            </React.Fragment>
          </div>
          <Grid>
            <Typography
              sx={{ color: "white", mx: 1, my: 1 }}
              variant="h5"
              component="div"
            >
              Current News Items
            </Typography>
            <Demo sx={{ borderRadius: "0.5rem", marginTop: "1.5rem" }}>
              <List sx={{ padding: "0px" }}>
                {Object.entries(news).map((item) => {
                  return (
                    <ListItem
                      key={item[1].domainnName}
                      sx={{ borderBottom: "1px solid grey" }}
                    >
                      <div
                        style={{
                          color: "black",
                        }}
                      >
                        <div
                          style={{
                            fontWeight: "bold",
                            marginBottom: "1rem",
                            fontSize: "1.3rem",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div>{item[1].title}</div>
                          <div>
                            <IconButton
                              edge="end"
                              aria-label="edit"
                              sx={{ marginRight: "0.5rem" }}
                              onClick={() => {
                                setCOpen(true);
                                setUpdate({ check: true, news: item[1] });
                              }}
                            >
                              <EditNoteRoundedIcon />
                            </IconButton>
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              onClick={() => {
                                setCOpen(true);
                                setUpdate({ check: false, news: item[1] });
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </div>
                        </div>
                        <div
                          style={{ fontSize: "1.15rem", textAlign: "justify" }}
                        >
                          {item[1].content}
                        </div>
                      </div>
                    </ListItem>
                  );
                })}
              </List>
            </Demo>
          </Grid>
        </div>

        <div className="sub-contact-container" style={{ marginTop: "1.5rem" }}>
          <div className="contact-head">
            <div>
              <h3>{update ? "Update News" : "Add News"}</h3>
              {cancel ? (
                <button
                  onClick={() => {
                    setUpdate({ check: "false", news: "" });
                    setCancel(false);
                    formik.resetForm();
                  }}
                >
                  Cancel
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="contact-fields">
            <form onSubmit={update.check ? upodateNews : handleSubmit}>
              <input
                type="text"
                id="news-heading"
                name="title"
                value={formik.values.title}
                required
                placeholder="News Heading"
                onChange={formik.handleChange}
              />
              <input
                type="text"
                id="news-links"
                name="image"
                value={formik.values.image}
                placeholder="Any Links"
                onChange={formik.handleChange}
              />

              <textarea
                style={{ resize: "none" }}
                placeholder="Description about News"
                value={formik.values.content}
                name="content"
                id="news-desc"
                cols={30}
                rows={7}
                required
                onChange={formik.handleChange}
              ></textarea>
              {/* <button className="submit-message">
                {update ? "Update News" : "Add News"}
              </button> */}
              {loader ? (
                <button className="submit-message" disabled={loader}>
                  <CircularProgress size={27} sx={{ color: "#022368" }} />
                </button>
              ) : (
                <button className="submit-message">
                  {update.check ? "update News" : "Add News"}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
