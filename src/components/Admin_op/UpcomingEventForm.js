import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Accordion } from "@mui/material";
import { AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useFormik } from "formik";
import { setSnackBar } from "../../features/snackbar/snackbar";
import "../../styles/AdminPage.css";
import { useRef } from "react";
import axios from "axios";

export default function UpcomingEventForm() {
  const getUserByEmail = process.env.REACT_APP_GET_USER_BY_EMAIL;
  const getDomains = process.env.REACT_APP_GET_DOMAINS;
  const getEvents = process.env.REACT_APP_GET_EVENTS;
  const deleteEvent = process.env.REACT_APP_GET_DELETE_BY_ID;
  const updateEvent = process.env.REACT_APP_GET_UPDATE_BY_ID;
  const addEvent = process.env.REACT_APP_ADD_EVENT;

  const dispacth = useDispatch();
  const handleCClose = () => setCOpen(false);
  const [copen, setCOpen] = React.useState(false);
  const [edit, setEdit] = useState({ check: false, event: "" });
  const [cancel, setCancel] = useState(false);
  const [event, setEvent] = useState();
  const inputRef = useRef();
  const [coordinators, setCoordinators] = useState([]);
  const [expanded, setExpanded] = React.useState(false);
  const [loader, setLoader] = useState(false);
  const [visible, setVisible] = useState(false);
  const [domain, setDomain] = useState([]);
  const [image, setImage] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleDeleteEvent = async () => {
    try {
      const res = await axios.delete(deleteEvent + edit.event._id);
      dispacth(
        setSnackBar({
          message: "Delete Event Successfully",
          variant: "success",
        })
      );
      getAllEvents();
      handleCClose();
      setExpanded(false);
    } catch (e) {
      dispacth(
        setSnackBar({
          message: "Failed to delete event",
          variant: "error",
        })
      );
    }
  };

  const handleEdit = () => {
    setCancel(true);
    setVisible(true);
    formik.setFieldValue("name", edit.event.name);
    formik.setFieldValue("domain", edit.event.domain);
    formik.setFieldValue(
      "fromDate",
      dayjs(edit.event.fromDate).format("DD MMM YYYY")
    );
    formik.setFieldValue(
      "toDate",
      dayjs(edit.event.toDate).format("DD MMM YYYY")
    );
    formik.setFieldValue("startTime", edit.event.startTime);
    formik.setFieldValue("endTime", edit.event.endTime);
    formik.setFieldValue("location", edit.event.location);
    formik.setFieldValue("description", edit.event.description);
    formik.setFieldValue("registrationLink", edit.event.registrationLink);
    formik.setFieldValue("prizeDetails[0]", edit.event.prizeDetails[0]);
    formik.setFieldValue("prizeDetails[1]", edit.event.prizeDetails[1]);
    formik.setFieldValue("prizeDetails[2]", edit.event.prizeDetails[2]);
    formik.setFieldValue("coordinators", edit.event.coordinators);
    formik.setFieldValue("isUpcoming", edit.event.isUpcoming);
    setCoordinators(edit.event.coordinators);
    handleCClose();
    setExpanded(false);
  };
  const checkTime = () => {
    const dateFormat = "DD MMM YYYY";
    const timeFormat = "hh:mm A";
    const startDate = dayjs(formik.values.fromDate, dateFormat, true);
    const endDate = dayjs(formik.values.toDate, dateFormat, true);
    const startTime = dayjs(formik.values.startTime, timeFormat, true);
    const endTime = dayjs(formik.values.endTime, timeFormat, true);

    if (startDate.isAfter(endDate)) {
      dispacth(
        setSnackBar({
          message: "Start date must be before end date",
          variant: "error",
        })
      );
      return false;
    }
    if (startDate.isSame(endDate) && startTime.isAfter(endTime)) {
      dispacth(
        setSnackBar({
          message:
            "Start time must be before end time when the dates are the same",
          variant: "error",
        })
      );
      return false;
    }
    return true;
  };
  const handleUpdateEvent = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (checkTime()) {
      try {
        const formData = new FormData();

        Object.keys(formik.values).forEach((key) => {
          if (Array.isArray(formik.values[key])) {
            formik.values[key].forEach((item, index) => {
              Object.keys(item).forEach((subKey) => {
                formData.append(`${key}[${index}][${subKey}]`, item[subKey]);
              });
            });
          } else {
            formData.append(key, formik.values[key]);
          }
        });
        formik.values.images.forEach((file) => {
          formData.append("images", file);
        });
        const res = await axios.put(
          updateEvent + edit.event._id,
          formData
        );
        if (!formik.values.isUpcoming) {
          dispacth(
            setSnackBar({
              message:
                "Event updated successfully and Add other details in Completed Event page",
              variant: "success",
            })
          );
        } else {
          dispacth(
            setSnackBar({
              message: "Event updated successfully",
              variant: "success",
            })
          );
        }
        setEdit({ check: false, event: "" });
        formik.resetForm();
        setCoordinators(null);
        getAllEvents();
        setLoader(false);
        setCancel(false);
        setVisible(false);
      } catch (e) {
        setLoader(false);
        setVisible(false);
        formik.resetForm(); 
        setCancel(false);
        dispacth(
          setSnackBar({
            message: "Failed to updated event",
            variant: "error",
          })
        );
      }
      console.log(e);
    }
  };
  const handleAddEvent = async (e) => {
    e.preventDefault();
    if (checkTime()) {
      setLoader(true);
      try {
        const formData = new FormData();

        Object.keys(formik.values).forEach((key) => {
          if (Array.isArray(formik.values[key])) {
            formik.values[key].forEach((item, index) => {
              Object.keys(item).forEach((subKey) => {
                formData.append(`${key}[${index}][${subKey}]`, item[subKey]);
              });
            });
          } else {
            formData.append(key, formik.values[key]);
          }
        });
        formik.values.images.forEach((file) => {
          formData.append("images", file);
        });
        const res = await axios.post(addEvent, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        dispacth(
          setSnackBar({
            message: "Event created successfully",
            variant: "success",
          })
        );
        formik.resetForm();
        setCoordinators([]);
        getAllEvents();
        setCancel(false);
        setLoader(false);
      } catch (error) {
        setLoader(false);
        setCancel(false);
        dispacth(
          setSnackBar({
            message: "Error in creating event",
            variant: "error",
          })
        );
        console.log(error);
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      fromDate: "",
      toDate: "",
      startTime: "",
      endTime: "",
      isUpcoming: true,
      location: "",
      registrationLink: "",
      domain: "",
      prizeDetails: [{ position: "", description: "" }],
      coordinators: [{ id: "", email: "" }],
      images: [],
    },
    validateOnMount: true,

    validate: (values) => {
      let errors = {};

      if (values.name === "") {
        errors.name = "Please enter the valid Domain Name";
      }

      if (values.description === "") {
        errors.description = "Description requried";
      }
      return errors;
    },
  });



  const handleFileChange = async (event) => {
    const file = Array.from(event.currentTarget.files);
    formik.setFieldValue("images", file);
  };
  const handleDomain = async () => {
    try {
      const res = await axios.get(getDomains, {
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
  const handlePrizeDetailChange = (index, event) => {
    const newPrizeDetails = [...formik.values.prizeDetails];
    newPrizeDetails[index] = {
      position: index + 1,
      description: event.target.value,
    };
    formik.setFieldValue("prizeDetails", newPrizeDetails);
  };
  const checkCoordiantor = (id) => {
    for (let i = 0; i < coordinators.length; i++) {
      if (coordinators[i].id === id) {
        dispacth(
          setSnackBar({
            message: "Coordinator already added",
            variant: "warning",
          })
        );
        return false;
      }
    }
    return true;
  };
  const removeCoordinator = (id) => {
    setCoordinators((prevCoordinators) => {
      const updatedCoordinators = prevCoordinators.filter(
        (coordinator) => coordinator.id !== id
      );
      formik.setFieldValue("coordinators", updatedCoordinators);
      return updatedCoordinators;
    });
    dispacth(
      setSnackBar({
        message: "Coordinator removed ",
        variant: "success",
      })
    );
  };
  const addCoordinator = async () => {
    try {
      const email = inputRef.current.value;
      const res = await axios.get(getUserByEmail + email, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("authToken")
            .slice(1, localStorage.getItem("authToken").length - 1)}`,
        },
      });
      const check = checkCoordiantor(res.data._id);
      if (
        (res.data.role === "Coordinator" || res.data.role === "admin") &&
        check
      ) {
        const newCoordinator = { id: res.data._id, email: res.data.email };
        setCoordinators((prevCoordinators) => {
          const updatedCoordinators = [...prevCoordinators, newCoordinator];
          formik.setFieldValue("coordinators", updatedCoordinators);
          return updatedCoordinators;
        });
        dispacth(
          setSnackBar({
            message: "Coordinator added Successfully",
            variant: "success",
          })
        );
      } else if (res.data.role === "user") {
        dispacth(
          setSnackBar({
            message: "Given user is not Coordinator",
            variant: "info",
          })
        );
      }
      inputRef.current.value = "";
    } catch (e) {
      console.log(e);
      dispacth(
        setSnackBar({
          message: "Error in adding Coordinator",
          variant: "error",
        })
      );
    }
  };
  const getAllEvents = async () => {
    try {
      const res = await axios.get(getEvents);
      setEvent(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getAllEvents();
    handleDomain();
  }, []);
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
                  setVisible(false);
                }}
              >
                Cancel
              </Button>
              <Button onClick={edit.check ? handleEdit : handleDeleteEvent}>
                {edit.check ? "Edit" : "Delete"}
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </div>

      <div style={{ margin: ".9rem" }}>
        <Typography
          sx={{ color: "white", marginBottom: "1rem" }}
          variant="h5"
          component="div"
        >
          Upcoming Events
        </Typography>

        {event &&
          event.map((ele) => {
            if (ele.isUpcoming) {
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
                              Description :{" "}
                            </span>
                            <span>{ele.description}</span>
                          </div>
                          <div>
                            <span
                              style={{
                                fontSize: "18px",
                                fontWeight: "bold",
                                margin: "0px 5px",
                              }}
                            >
                              Domain :{" "}
                            </span>
                            <span>{ele.domain}</span>
                          </div>
                          <div>
                            <span
                              style={{
                                fontSize: "18px",
                                fontWeight: "bold",
                                margin: "0px 5px",
                              }}
                            >
                              {" "}
                              Location :{" "}
                            </span>
                            <span style={{ textAlign: "justify" }}>
                              <a href={ele.githubLink}>{ele.location}</a>
                            </span>
                          </div>
                          <div>
                            <span
                              style={{
                                fontSize: "18px",
                                fontWeight: "bold",
                                margin: "0px 5px",
                              }}
                            >
                              Date and Time :{" "}
                            </span>
                            <span style={{ textAlign: "justify" }}>
                              {ele.fromDate.slice(0, 10) +
                                " To " +
                                ele.toDate.slice(0, 10)}
                              {" -" + ele.startTime + " - " + ele.endTime}
                            </span>
                          </div>
                          <div>
                            <span
                              style={{
                                fontSize: "18px",
                                fontWeight: "bold",
                                margin: "0px 5px",
                              }}
                            >
                              Registration Link:{" "}
                            </span>
                            <span style={{ textAlign: "justify" }}>
                              <a href={ele.registrationLink}>
                                {ele.registrationLink}
                              </a>
                            </span>
                          </div>
                          <div>
                            <span
                              style={{
                                fontSize: "18px",
                                fontWeight: "bold",
                                margin: "0px 5px",
                                display: "block",
                              }}
                            >
                              Coordiantors :{" "}
                            </span>
                            {ele.coordinators.map((i) => {
                              return (
                                <span
                                  style={{
                                    textAlign: "justify",
                                    display: "block",
                                    margin: "0px 20px",
                                  }}
                                >
                                  {i.email}
                                </span>
                              );
                            })}
                          </div>
                          <div>
                            <span
                              style={{
                                fontSize: "18px",
                                fontWeight: "bold",
                                margin: "0px 5px",
                                display: "block",
                              }}
                            >
                              Prize Details:{" "}
                            </span>
                            {ele.prizeDetails.map((i) => {
                              return (
                                <span
                                  style={{
                                    textAlign: "justify",
                                    display: "block",
                                    margin: "0px 20px",
                                  }}
                                >
                                  {i.position} : {i.description}
                                </span>
                              );
                            })}
                          </div>
                          <div>
                            <IconButton
                              edge="end"
                              aria-label="edit"
                              sx={{ marginRight: "0.5rem" }}
                              onClick={() => {
                                setEdit({ check: true, event: ele });
                                setCOpen(true);
                              }}
                            >
                              <EditNoteRoundedIcon />
                            </IconButton>
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              onClick={() => {
                                setEdit({ check: false, event: ele });
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
            } else {
              return null;
            }
          })}
      </div>
      <div className="sub-contact-container" style={{ margin: ".9rem" }}>
        <div className="contact-head">
          <div>
            <h2>{visible && edit.check ? "Edit Event" : "Add Event"}</h2>
            {cancel && (
              <button
                onClick={() => {
                  setEdit({ check: false, event: "" });
                  setCancel(false);
                  setCoordinators(null);
                  formik.resetForm();
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
        <div className="contact-fields  add-carousel-item ">
          <form
            onSubmit={
              visible && edit.check ? handleUpdateEvent : handleAddEvent
            }
          >
            <input
              type="text"
              id="domain-name"
              required
              name="name"
              value={formik.values.name}
              placeholder="Event Name"
              onChange={formik.handleChange}
            />

            <textarea
              style={{ resize: "none" }}
              placeholder="Description about Event"
              name="description"
              id="domain-desc"
              value={formik.values.description}
              required
              cols={30}
              rows={7}
              onChange={formik.handleChange}
            ></textarea>
            <input
              type="text"
              id="domain-name"
              required
              value={formik.values.location}
              name="location"
              placeholder="Location "
              onChange={formik.handleChange}
            />
            <select
              name="domain"
              id="domain"
              value={formik.values.domain}
              style={{
                height: "3rem",
                border: "0.5px solid rgb(222,222,222)",
                outline: "none",
              }}
              onChange={formik.handleChange}
              required
            >
              <option hidden value="">
                Select Domain
              </option>
              {domain &&
                domain.map((item) => {
                  return <option value={item.name}>{item.name}</option>;
                })}
            </select>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className="upcoming-event-time">
                <DemoItem label="Starts">
                  <TimePicker
                    name="start"
                    value={
                      formik.values.startTime
                        ? dayjs(formik.values.startTime, "hh:mm A")
                        : null
                    }
                    // value={formik.values.start}
                    onChange={(time) => {
                      formik.setFieldValue("startTime", time.format("hh:mm A"));
                    }}
                  />
                </DemoItem>
                <DemoItem label="Ends">
                  <TimePicker
                    name="end"
                    value={
                      formik.values.endTime
                        ? dayjs(formik.values.endTime, "hh:mm A")
                        : null
                    }
                    // value={formik.values.end}
                    onChange={(time) =>
                      formik.setFieldValue("endTime", time.format("hh:mm A"))
                    }
                  />
                </DemoItem>
              </div>
              <div className="upcoming-event-date">
                <DemoItem label="From">
                  <DatePicker
                    name="from"
                    value={
                      formik.values.fromDate
                        ? dayjs(formik.values.fromDate, "DD MMM YYYY")
                        : null
                    }
                    onChange={(date) =>
                      formik.setFieldValue(
                        "fromDate",
                        date.format("DD MMM YYYY")
                      )
                    }
                  />
                </DemoItem>
                <DemoItem label="To">
                  <DatePicker
                    name="to"
                    value={
                      formik.values.toDate
                        ? dayjs(formik.values.toDate, "DD MMM YYYY")
                        : null
                    }
                    onChange={(date) =>
                      formik.setFieldValue("toDate", date.format("DD MMM YYYY"))
                    }
                  />
                </DemoItem>
              </div>
            </LocalizationProvider>
            <div
              id="coordianator-details"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                border: "1px solid rgb(222,222,222)",
                padding: "1rem",
              }}
            >
              <div id="coordinator-list">
                {coordinators &&
                  coordinators.map((item) => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-evenly",
                          gap: "1rem",
                          margin: "10px 0px",
                        }}
                      >
                        <span>{item.email}</span>
                        <span
                          style={{
                            fontWeight: "bold",
                            color: "grey",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            removeCoordinator(item.id);
                          }}
                        >
                          X
                        </span>
                      </div>
                    );
                  })}
              </div>
              <input
                type="email"
                id="domain-name"
                name="coordiantor"
                ref={inputRef}
                placeholder="Enter the Coordinator Email "
              />
              <div
                className="submit-message"
                style={{ textAlign: "center" }}
                onClick={addCoordinator}
              >
                Add Coordianator
              </div>
            </div>
            <input
              type="file"
              name="images"
              accept="image/*"
              value={formik.values.file}
              onChange={handleFileChange}
              multiple
              // ref={fileRef}
            />
            <input
              type="text"
              id="domain-name"
              required
              name="prizeDetails"
              placeholder="1st prize details "
              onChange={(event) => handlePrizeDetailChange(0, event)}
              value={formik.values.prizeDetails[0]?.description || ""}
            />
            <input
              type="text"
              id="domain-name"
              required
              name="prizeDetails"
              placeholder="2nd prize details "
              onChange={(event) => handlePrizeDetailChange(1, event)}
              value={formik.values.prizeDetails[1]?.description || ""}
            />
            <input
              type="text"
              id="domain-name"
              required
              name="prizeDetails"
              placeholder="3rd prize details "
              onChange={(event) => handlePrizeDetailChange(2, event)}
              value={formik.values.prizeDetails[2]?.description || ""}
            />
            <input
              type="text"
              id="domain-name"
              required
              name="registrationLink"
              value={formik.values.registrationLink}
              placeholder="Registration Link "
              onChange={formik.handleChange}
            />
            {visible && edit.check && (
              <FormControlLabel
                name="isUpcoming"
                onChange={(val) => formik.setFieldValue("isUpcoming", !val)}
                control={<Checkbox />}
                label="Mark Event as Completed"
              />
            )}
            {visible && edit.check ? (
              <button
                className="submit-message"
                type="submit"
                disabled={loader}
              >
                {loader ? (
                  <CircularProgress size={27} sx={{ color: "#022368" }} />
                ) : (
                  "Update Event"
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
                  "Add Event"
                )}
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
