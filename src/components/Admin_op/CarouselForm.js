import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useRef } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { Accordion } from "@mui/material";
import { AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSnackBar } from "../../features/snackbar/snackbar";

export default function Testimonals() {
  const carousalFormik = useFormik({
    initialValues: {
      title: "",
      description: "",
      domainId: "",
      image: null,
    },
  });

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [edit, setEdit] = useState({ check: false, carousal: "" });
  const [copen, setCOpen] = React.useState(false);
  const handleCClose = () => setCOpen(false);
  const [expanded, setExpanded] = React.useState(false);
  const [carousal, setCarousal] = useState(null);
  const [visible, setVisible] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [loader, setLoader] = useState(false);
  const [domain, setDomain] = useState();

  const getDomainsApi = process.env.REACT_APP_GET_DOMAINS;
  const getCarouselsApi = process.env.REACT_APP_GET_ALL_CAROUSEL;
  const addCarouselApi = process.env.REACT_APP_ADD_CAROUSEL;
  const updateCarouselApi = process.env.REACT_APP_UPDATE_CAROUSEL;
  const deleteCarouselApi = process.env.REACT_APP_DELETE_CAROUSEL;

  const fileRef = useRef(null);
  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    carousalFormik.setFieldValue("image", file);
  };
  const dispatch = useDispatch();
  const handleEdit = () => {
    handleCClose();
    setCancel(true);
    carousalFormik.setFieldValue("title", edit.carousal.title);
    carousalFormik.setFieldValue("description", edit.carousal.description);
    carousalFormik.setFieldValue("domainId", edit.carousal.domainId);
    setVisible(true);
  };
  const handleDomain = async () => {
    try {
      const res = await axios.get(getDomainsApi, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("authToken")
            .slice(1, localStorage.getItem("authToken").length - 1)}`,
        },
      });
      setDomain(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  const handleDelete = async () => {
    try {
      const res = await axios.delete(deleteCarouselApi + edit.carousal._id);
      getAllCarousals();
      handleCClose();
      dispatch(
        setSnackBar({
          message: "Deleted Carousel Successfully",
          variant: "success",
        })
      );
    } catch (e) {
      console.log(e);
      dispatch(
        setSnackBar({
          message: "Error in deleting Carousel",
          variant: "error",
        })
      );
    }
  };
  const handleAddCarousal = (e) => {
    e.preventDefault();
    postCarousal(carousalFormik.values);
  };

  useEffect(() => {
    getAllCarousals();
    handleDomain();
  }, []);

  const getAllCarousals = async () => {
    try {
      const res = await axios.get(getCarouselsApi);
      setCarousal(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const editCarousal = async (e) => {
    e.preventDefault();

    let carouselData = {
      title: "",
      description: "",
      domainId: "",
      image: null,
    };

    // Conditionally append domainId
    if (carousalFormik.values.domainId === "home") {
      carouselData = {
        $unset: {
          domainId: "",
        },
        title: carousalFormik.values.title,
        description: carousalFormik.values.description,

        image: carousalFormik.values.image
          ? carousalFormik.values.image
          : edit.carousal.image,
      };
    } else {
      carouselData = {
        title: carousalFormik.values.title,
        description: carousalFormik.values.description,
        domainId: carousalFormik.values.domainId,
        image: carousalFormik.values.image
          ? carousalFormik.values.image
          : edit.carousal.image,
      };
    }

    try {
      setLoader(true);
      const res = await axios.put(
        updateCarouselApi + edit.carousal._id,
        carouselData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch(
        setSnackBar({
          message: "successfully updated Carousel",
          variant: "success",
        })
      );
      carousalFormik.resetForm();
      setEdit({ check: false, carousal: "" });
      getAllCarousals();
      setVisible(false);
      setCancel(false);
      setLoader(false);
    } catch (e) {
      setCancel(false);
      setLoader(false);
      dispatch(
        setSnackBar({
          message: "Error in deleting Carousel",
          variant: "error",
        })
      );
      setVisible(false);
      setCancel(false);
      setEdit({ check: false, carousal: "" });
    }
  };

  const postCarousal = async (e) => {
    let carouselData = {
      title: "",
      description: "",
      domainId: "",
      image: null,
    };
    if (carousalFormik.values.domainId === "home") {
      carouselData = {
        $unset: {
          domainId: "",
        },
        title: carousalFormik.values.title,
        description: carousalFormik.values.description,

        image: carousalFormik.values.image,
      };
    }
    try {
      setLoader(true);
      const res = await axios.post(
        addCarouselApi,
        carousalFormik.values.domainId === "home" ? carouselData : e,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      carousalFormik.resetForm();
      getAllCarousals();
      dispatch(
        setSnackBar({
          message: "Successfully added Carousel",
          variant: "success",
        })
      );
      setLoader(false);
    } catch (e) {
      setLoader(false);
      console.log(e);
      dispatch(
        setSnackBar({
          message: "Error in adding Carousel",
          variant: "error",
        })
      );
    }
  };

  return (
    <>
      <div>
        <React.Fragment>
          <Dialog
            open={copen}
            onClose={handleCClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {edit.check ? "Edit Carousel" : "Delete Carousel"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {edit.check
                  ? "You are about to edit this Carousel.Modify the details in following form"
                  : "You are about to delete this Carousel. This action is irreversible. Do you wish to proceed?"}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  setEdit({ check: false, carousal: "" });
                  setCOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button onClick={edit.check ? handleEdit : handleDelete}>
                {edit.check ? "Edit" : "Delete"}
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </div>

      <div style={{ marginTop: "1.1rem" }}>
        <Typography
          sx={{ color: "white", marginBottom: "1rem" }}
          variant="h5"
          component="div"
        >
          Carousels
        </Typography>
        {carousal &&
          carousal.map((ele) => {
            return (
              <Accordion
                expanded={expanded === ele._id}
                style={{ borderRadius: "0.5rem", marginTop: "0.5rem" }}
                onChange={handleChange(ele._id)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${ele._id}`}
                  id={`${ele._id}`}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ width: 75, height: 75, marginRight: "10px" }}>
                      <img
                        src={"data:image/jpeg;base64," + ele.image}
                        alt=""
                        height={"75px"}
                        width={"75px"}
                        srcSet=""
                      />
                    </Avatar>
                  </ListItemAvatar>

                  <Typography>
                    <span style={{ fontSize: "20px", fontWeight: "600" }}>
                      {ele.title}
                    </span>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ListItem>
                    <div style={{ color: "black" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                        }}
                      >
                        <div style={{ textAlign: "justify" }}>
                          <span
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              margin: "0px 5px",
                            }}
                          >
                            Description :{" "}
                          </span>
                          <span>{ele.description}</span>
                        </div>
                        <div style={{ textAlign: "justify" }}>
                          <span
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              margin: "0px 5px",
                            }}
                          >
                            Place :{" "}
                          </span>
                          <span>
                            {domain &&
                              domain.map((item) => {
                                if (item._id === ele.domainId) {
                                  return item.name;
                                }
                              })}
                            {!ele.domainId ? "Home" : ""}
                          </span>
                        </div>
                        <div>
                          <IconButton
                            edge="end"
                            aria-label="edit"
                            sx={{ marginRight: "0.5rem" }}
                            onClick={() => {
                              setEdit({ check: true, carousal: ele });
                              setCOpen(true);
                            }}
                          >
                            <EditNoteRoundedIcon />
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => {
                              setEdit({ check: false, carousal: ele });
                              setCOpen(true);
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </ListItem>
                </AccordionDetails>
              </Accordion>
            );
          })}
      </div>
      <div className="sub-contact-container" style={{ marginTop: "1.1rem" }}>
        <div className="contact-head">
          <div>
            <h2>{visible ? "Edit Carousel" : "Add Carousel"}</h2>
            {cancel && (
              <button
                onClick={() => {
                  setEdit({ check: false, carousal: "" });
                  setCancel(false);
                  setVisible(false);
                  carousalFormik.resetForm();
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
        <div className="contact-fields add-carousel-item">
          <form onSubmit={visible ? editCarousal : handleAddCarousal}>
            <input
              type="text"
              id="domain-name"
              required
              name="title"
              onChange={carousalFormik.handleChange}
              value={carousalFormik.values.title}
              placeholder="Name"
            />
            <textarea
              style={{ resize: "none" }}
              placeholder="Description "
              name="description"
              id="domain-desc"
              required
              onChange={carousalFormik.handleChange}
              cols={30}
              rows={7}
              value={carousalFormik.values.description}
            ></textarea>
            <select
              name="domainId"
              id=""
              style={{
                height: "3rem",
                border: "0.5px solid rgb(222,222,222)",
                outline: "none",
              }}
              onChange={carousalFormik.handleChange}
              value={carousalFormik.values.domainId}
            >
              <option hidden value="">
                Select Domain
              </option>
              <option value="home"> {"Home"}</option>
              {domain &&
                domain.map((item) => {
                  return <option value={item._id}> {item.name}</option>;
                })}
            </select>
            <input
              type="file"
              name="image"
              accept="image/*"
              value={carousalFormik.values.file}
              onChange={handleFileChange}
              ref={fileRef}
            />
            {edit.check ? (
              <button
                className="submit-message"
                type="submit"
                disabled={loader}
              >
                {loader ? (
                  <CircularProgress size={27} sx={{ color: "#022368" }} />
                ) : (
                  "Edit Carousel"
                )}
              </button>
            ) : (
              <button
                className="submit-message"
                type="submit"
                disabled={loader}
              >
                {loader ? (
                  <CircularProgress size={27} sx={{ color: "#022368" }} />
                ) : (
                  "Add Carousel"
                )}
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
