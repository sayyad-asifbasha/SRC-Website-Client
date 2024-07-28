import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
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

export default function Officials() {
  const dispatch = useDispatch();
  const fileRef = useRef(null);

  // env variables

  const getAllOfficialsApi = process.env.REACT_APP_GET_ALL_oFFICIALS;
  const addOfficialApi = process.env.REACT_APP_ADD_OFFICIAL;
  const updateOfficialApi = process.env.REACT_APP_UPDATE_OFFICIAL;
  const deleteOfficialApi = process.env.REACT_APP_DELETE_OFFICIAL;

  useEffect(() => {
    getAllOfficials();
  }, []);
  const officialFormik = useFormik({
    initialValues: {
      name: "",
      photo: "",
      email: "",
      designation: "",
      phoneNumber: "",
      department: "",
      bio: "",
      qualifications: "",
      linkedin: "",
    },
  });

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [edit, setEdit] = useState({ check: false, official: "" });
  const [copen, setCOpen] = React.useState(false);
  const handleCClose = () => setCOpen(false);
  const [expanded, setExpanded] = React.useState(false);
  const [officials, setOfficials] = useState(null);
  const [visible, setVisible] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    officialFormik.setFieldValue("photo", file);
  };

  const handleEdit = () => {
    handleCClose();
    setCancel(true);
    officialFormik.setFieldValue("name", edit.official.name);
    officialFormik.setFieldValue("email", edit.official.email);
    officialFormik.setFieldValue("phoneNumber", edit.official.phoneNumber);
    officialFormik.setFieldValue("designation", edit.official.designation);
    officialFormik.setFieldValue("department", edit.official.department);
    officialFormik.setFieldValue("bio", edit.official.bio);
    officialFormik.setFieldValue(
      "qualifications",
      edit.official.qualifications
    );
    officialFormik.setFieldValue("photo", edit.official.photo);
    officialFormik.setFieldValue("linkedin", edit.official.linkedin);
    setVisible(true);
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(deleteOfficialApi + edit.official._id);
      getAllOfficials();
      handleCClose();
      dispatch(
        setSnackBar({
          message: "Deleted Official Successfully",
          variant: "success",
        })
      );
    } catch (e) {
      console.log(e);
      dispatch(
        setSnackBar({
          message: "Error in deleting Official",
          variant: "error",
        })
      );
    }
  };
  const handleAddOfficial = (e) => {
    e.preventDefault();
    addOfficial(officialFormik.values);
  };

  const getAllOfficials = async () => {
    try {
      const res = await axios.get(getAllOfficialsApi);
      setOfficials(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const editOfficial = async (e) => {
    e.preventDefault();

    officialFormik.setFieldValue(
      "photo",
      officialFormik.values.photo
        ? officialFormik.values.photo
        : edit.official.photo
    );
    try {
      setLoader(true);
      const res = await axios.put(
        updateOfficialApi + edit.official._id,
        officialFormik.values,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch(
        setSnackBar({
          message: "successfully updated Official",
          variant: "success",
        })
      );
      officialFormik.resetForm();
      setEdit({ check: false, official: "" });
      getAllOfficials();
      setVisible(false);
      setCancel(false);
      setLoader(false);
    } catch (e) {
      setCancel(false);
      setLoader(false);
      dispatch(
        setSnackBar({
          message: "Error in deleting Official",
          variant: "error",
        })
      );
      setVisible(false);
      setCancel(false);
      setEdit({ check: false, official: "" });
    }
  };

  const addOfficial = async (e) => {
    try {
      setLoader(true);
      const res = await axios.post(addOfficialApi, e, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      officialFormik.resetForm();
      getAllOfficials();
      dispatch(
        setSnackBar({
          message: "Successfully added Official",
          variant: "success",
        })
      );
      setLoader(false);
    } catch (e) {
      setLoader(false);
      console.log(e);
      if (
        e.response.data.error &&
        e.response.data.error === "Email already exists"
      ) {
        dispatch(
          setSnackBar({
            message: "Email Already exists",
            variant: "error",
          })
        );
      } else {
        dispatch(
          setSnackBar({
            message: "Error in adding Official",
            variant: "error",
          })
        );
      }
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
          Officials
        </Typography>
        {officials &&
          officials.map((ele) => {
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
                            Name :{" "}
                          </span>
                          <span>{ele.name}</span>
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
                        </div>
                        <div style={{ textAlign: "justify" }}>
                          <span
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              margin: "0px 5px",
                            }}
                          >
                            Department :{" "}
                          </span>
                          <span>{ele.department}</span>
                        </div>
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
                            phone number :{" "}
                          </span>
                          <span>{ele.phoneNumber}</span>
                        </div>
                        <div style={{ textAlign: "justify" }}>
                          <span
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              margin: "0px 5px",
                            }}
                          >
                            Bio :{" "}
                          </span>
                          <span>{ele.bio}</span>
                        </div>
                        <div style={{ textAlign: "justify" }}>
                          <span
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              margin: "0px 5px",
                            }}
                          >
                            Qualification :{" "}
                          </span>
                          <span>{ele.qualifications}</span>
                        </div>
                        <div style={{ textAlign: "justify" }}>
                          <span
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              margin: "0px 5px",
                            }}
                          >
                            Linkedin :{" "}
                          </span>
                          <span>{ele.linkedin}</span>
                        </div>
                        <div>
                          <IconButton
                            edge="end"
                            aria-label="edit"
                            sx={{ marginRight: "0.5rem" }}
                            onClick={() => {
                              setEdit({ check: true, official: ele });
                              setCOpen(true);
                            }}
                          >
                            <EditNoteRoundedIcon />
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => {
                              setEdit({ check: false, official: ele });
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
            <h2>{visible ? "Edit Official" : "Add Official"}</h2>
            {cancel && (
              <button
                onClick={() => {
                  setEdit({ check: false, official: "" });
                  setCancel(false);
                  setVisible(false);
                  officialFormik.resetForm();
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
        <div className="contact-fields add-carousel-item">
          <form onSubmit={visible ? editOfficial : handleAddOfficial}>
            <input
              type="text"
              required
              name="name"
              onChange={officialFormik.handleChange}
              value={officialFormik.values.name}
              placeholder="Name"
            />
            <input
              type="text"
              required
              name="email"
              onChange={officialFormik.handleChange}
              value={officialFormik.values.email}
              placeholder="Email"
            />
            <input
              type="text"
              required
              name="designation"
              onChange={officialFormik.handleChange}
              value={officialFormik.values.designation}
              placeholder="Designation"
            />
            <input
              type="tel"
              name="phoneNumber"
              onChange={officialFormik.handleChange}
              value={officialFormik.values.phoneNumber}
              placeholder="Phone Number"
            />
            <input
              type="text"
              name="department"
              onChange={officialFormik.handleChange}
              value={officialFormik.values.department}
              placeholder="Department"
            />
            <textarea
              style={{ resize: "none" }}
              placeholder="Bio"
              name="bio"
              required
              onChange={officialFormik.handleChange}
              cols={30}
              rows={7}
              value={officialFormik.values.bio}
            ></textarea>
            <textarea
              style={{ resize: "none" }}
              placeholder="Qualifications "
              name="qualifications"
              required
              onChange={officialFormik.handleChange}
              cols={30}
              rows={7}
              value={officialFormik.values.qualifications}
            ></textarea>
            <input
              type="text"
              name="linkedin"
              onChange={officialFormik.handleChange}
              value={officialFormik.values.linkedin}
              placeholder="LinkedIn"
            />
            <input
              type="file"
              name="photo"
              accept="image/*"
              value={officialFormik.values.file}
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
                  "Add Official"
                )}
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
