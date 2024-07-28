import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import { useRef } from "react";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import CarousalImg1 from "../../assets/images/carousal-1.jpg";
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
  // env variables

  const getAllTestimonialsApi = process.env.REACT_APP_GET_ALL_TESTIMONIALS;
  const addTestimonialApi = process.env.REACT_APP_ADD_TESTIMONIAL;
  const updateTestimonialApi = process.env.REACT_APP_UPDATE_TESTIMONIAL;
  const deleteTestimonialApi = process.env.REACT_APP_DELETE_TESTIMONIAL;

  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  const testimonalFormik = useFormik({
    initialValues: {
      name: "",
      designation: "",
      message: "",
      email: "",
      photo: null,
      approved: false,
    },
  });

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [edit, setEdit] = useState({ check: false, testimonal: "" });
  const [copen, setCOpen] = React.useState(false);
  const handleCClose = () => setCOpen(false);
  const [expanded, setExpanded] = React.useState(false);
  const [testimonals, setTestimonals] = useState(null);
  const [visible, setVisible] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [loader, setLoader] = useState(false);

  const fileRef = useRef(null);
  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    testimonalFormik.setFieldValue("photo", file);
  };
  const dispatch = useDispatch();
  const handleEdit = () => {
    handleCClose();
    setCancel(true);
    testimonalFormik.setFieldValue("name", edit.testimonal.name);
    testimonalFormik.setFieldValue("email", edit.testimonal.email);
    testimonalFormik.setFieldValue("message", edit.testimonal.message);
    testimonalFormik.setFieldValue("designation", edit.testimonal.designation);
    testimonalFormik.setFieldValue("approved", edit.testimonal.approved);
    setVisible(true);
  };
  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        deleteTestimonialApi + edit.testimonal._id
      );
      getAllTestimonals();
      handleCClose();
      dispatch(
        setSnackBar({
          message: "Deleted Testimonal Successfully",
          variant: "success",
        })
      );
    } catch (e) {
      console.log(e);
      dispatch(
        setSnackBar({
          message: "Error in deleting Testimonal",
          variant: "error",
        })
      );
    }
  };
  const handleAddTestimonal = (e) => {
    e.preventDefault();
    postTestimoanls(testimonalFormik.values);
  };

  useEffect(() => {
    getAllTestimonals();
  }, []);

  const getAllTestimonals = async () => {
    try {
      const res = await axios.get(getAllTestimonialsApi);
      setTestimonals(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const editTestimonal = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const res = await axios.put(
        updateTestimonialApi + edit.testimonal._id,
        testimonalFormik.values,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch(
        setSnackBar({
          message: "successfully updated Testimonal",
          variant: "success",
        })
      );
      testimonalFormik.resetForm();
      setEdit({ check: false, testimonal: "" });
      getAllTestimonals();
      setVisible(false);
      setCancel(false);
      setLoader(false);
    } catch (e) {
      setCancel(false);
      setLoader(false);
      dispatch(
        setSnackBar({
          message: "Error in deleting Testimonal",
          variant: "error",
        })
      );
      setVisible(false);
      setCancel(false);
      setEdit({ check: false, testimonal: "" });
    }
  };

  const postTestimoanls = async (e) => {
    try {
      setLoader(true);
      const res = await axios.post(addTestimonialApi, e, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      testimonalFormik.resetForm();
      getAllTestimonals();
      dispatch(
        setSnackBar({
          message: "Successfully added Testimonal",
          variant: "success",
        })
      );
      setLoader(false);
    } catch (e) {
      setLoader(false);
      console.log(e);
      dispatch(
        setSnackBar({
          message: "Error in adding Testimonal",
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
              {edit.check ? "Edit Event" : "Delete Event"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {edit.check
                  ? "You are about to edit this event.Modify the details in following form"
                  : "You are about to delete this event. This action is irreversible. Do you wish to proceed?"}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  setEdit({ check: false, event: "" });
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
          Testimonals
        </Typography>
        {testimonals &&
          testimonals.map((ele) => {
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
                        src={"data:image/jpeg;base64," + ele.photo}
                        alt=""
                        height={"75px"}
                        width={"75px"}
                        srcSet=""
                      />
                    </Avatar>
                  </ListItemAvatar>

                  <Typography>
                    <span style={{ fontSize: "20px", fontWeight: "600" }}>
                      {ele.name}
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
                            Designation :{" "}
                          </span>
                          <span>{ele.designation}</span>
                        </div>
                        <div style={{ textAlign: "justify" }}>
                          <span
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              margin: "0px 5px",
                            }}
                          >
                            Message :{" "}
                          </span>
                          <span>{ele.message}</span>
                        </div>
                        <div style={{ textAlign: "justify" }}>
                          <span
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              margin: "0px 5px",
                            }}
                          >
                            Email :{" "}
                          </span>
                          <span>{ele.email}</span>
                        </div>{" "}
                        <div>
                          <IconButton
                            edge="end"
                            aria-label="edit"
                            sx={{ marginRight: "0.5rem" }}
                            onClick={() => {
                              setEdit({ check: true, testimonal: ele });
                              setCOpen(true);
                            }}
                          >
                            <EditNoteRoundedIcon />
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => {
                              setEdit({ check: false, testimonal: ele });
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
            <h2>{visible ? "Edit Tesitmonal" : "Add Testimonal"}</h2>
            {cancel && (
              <button
                onClick={() => {
                  setEdit({ check: false, testimonal: "" });
                  setCancel(false);
                  setVisible(false);
                  testimonalFormik.resetForm();
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
        <div className="contact-fields add-carousel-item">
          <form onSubmit={visible ? editTestimonal : handleAddTestimonal}>
            <input
              type="text"
              id="domain-name"
              required
              name="name"
              onChange={testimonalFormik.handleChange}
              value={testimonalFormik.values.name}
              placeholder="Name"
            />
            <input
              type="text"
              id="domain-name"
              required
              name="designation"
              onChange={testimonalFormik.handleChange}
              value={testimonalFormik.values.designation}
              placeholder="Designation"
            />
            <input
              type="email"
              id="domain-name"
              required
              name="email"
              onChange={testimonalFormik.handleChange}
              value={testimonalFormik.values.email}
              placeholder="Email"
            />
            <textarea
              style={{ resize: "none" }}
              placeholder="Message "
              name="message"
              id="domain-desc"
              required
              onChange={testimonalFormik.handleChange}
              cols={30}
              rows={7}
              value={testimonalFormik.values.message}
            ></textarea>
            <input
              type="file"
              name="photo"
              accept="image/*"
              value={testimonalFormik.values.file}
              onChange={handleFileChange}
              ref={fileRef}
            />
            <FormControlLabel
              name="approved"
              onChange={testimonalFormik.handleChange}
              control={<Checkbox />}
              value={testimonalFormik.values.approved}
              label={
                testimonalFormik.values.approved
                  ? "Label it as not approved"
                  : "Label it as approved"
              }
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
                  "Edit Testimonal"
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
                  "Add Testimonal"
                )}
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
