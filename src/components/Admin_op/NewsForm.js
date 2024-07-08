import React, { useEffect } from "react";
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
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import "../../styles/Login.css";
export default function NewsForm() {
  const news = {
    0: {
      title: "Web Development",
      content:
        "this this this this this this this this thisthis this thisthis this this this this this this this this this this this this this thisthis this thisthis this this this this this this this this this this this this this thisthis this thisthis this this this this this this this this this this this this this thisthis this thisthis this this this this this",
      date: "12-12-2025",
      link: "link for this image",
      URL: "URL of image",
    },
    1: {
      title: "Web Development",
      content:
        "this this this this this this this this thisthis this thisthis this this this this this",
      date: "12-12-2025",
      link: "link for this image",
      URL: "URL of image",
    },
    2: {
      title: "Web Development",
      content:
        "this this this this this this this this thisthis this thisthis this this this this this",
      date: "12-12-2025",
      link: "link for this image",
      URL: "URL of image",
    },
    3: {
      title: "Web Development",
      content:
        "this this this this this this this this thisthis this thisthis this this this this this",
      date: "12-12-2025",
      link: "link for this image",
      URL: "URL of image",
    },
    4: {
      title: "Web Development",
      content:
        "this this this this this this this this thisthis this thisthis this this this this this",
      date: "12-12-2025",
      link: "link for this image",
      URL: "URL of image",
    },
    5: {
      title: "Web Development",
      content:
        "this this this this this this this this thisthis this thisthis this this this this this",
      date: "12-12-2025",
      link: "link for this image",
      URL: "URL of image",
    },
  };

  // Calling getNews from API

  // useEffect(() => {
  //   getNews();
  // });

  // variables init

  // const getNewsApi = process.env.

  // React hooks

  //  Function for CRUD operations

  // const getNews = (e) => {};

  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  const editCarousal = (item) => {
    setCarItem(item);
    handleOpen();
  };
  const [open, setOpen] = React.useState(false);
  const [carItem, setCarItem] = React.useState({});
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
      newsHeading: "",
      newsLinks: "",
      newsDescription: "",
    },
    validate: (values) => {
      let errors = {};

      if (values.newsHeading === "") {
        errors.newsHeading = "Heading Required";
      }

      if (values.newsDescription === "") {
        errors.newsDescription = "Description requried";
      }
      return errors;
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formik.errors.newsHeading) {
      document.getElementById("news-heading").style.border = "1px solid red";
    }
    if (formik.errors.newsDescription) {
      document.getElementById("news-desc").style.border = "1px solid red";
    }
    if (!formik.errors.newsHeading && !formik.errors.newsDescription) {
      document.getElementById("news-heading").style.border = "none";
      document.getElementById("news-desc").style.border = "none";
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
                          >
                            <EditNoteRoundedIcon
                              onClick={() => {
                                editCarousal(item[1]);
                              }}
                            />
                          </IconButton>
                          <IconButton edge="end" aria-label="delete">
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
            <h3>Add News</h3>
          </div>
          <div className="contact-fields">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="news-heading"
                name="newsHeading"
                placeholder="News Heading"
                onChange={formik.handleChange}
              />
              <input
                type="text"
                id="news-links"
                name="newsLinks"
                placeholder="Any Links"
                onChange={formik.handleChange}
              />

              <textarea
                style={{ resize: "none" }}
                placeholder="Description about News"
                name="newsDescription"
                id="news-desc"
                cols={30}
                rows={7}
                onChange={formik.handleChange}
              ></textarea>
              <button className="submit-message">Add News</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
