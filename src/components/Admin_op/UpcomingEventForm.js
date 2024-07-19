import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import CarousalImg1 from "../../assets/images/carousal-1.jpg";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useFormik } from "formik";
import "../../styles/AdminPage.css";
import { useRef } from "react";
import axios from "axios";

export default function UpcomingEventForm() {
  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  const getUserByEmail=process.env.REACT_APP_GET_USER_BY_EMAIL;
  const eventDetails = {
    0: {
      image: CarousalImg1,
      name: "Aadhya",
      date: "20,APR,2024",
      time: "10:00AM - 05:00PM",
      venue: "CSE Dept,RK Valley",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur unde ipsa sint ipsum facere ratione modi, qui autem mollitia sit explicabo laborum excepturi ea amet iure numquam quasi. Quisquam, sunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio numquam expedita soluta deleniti harum dicta quas quam aspernatur dolores ea, optio ab ratione sequi, error veritatis distinctio corrupti recusandae ex? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati unde enim",
    },
    1: {
      image: CarousalImg1,
      name: "Aadhya2",
      date: "20,APR,2024",
      time: "10:00AM - 05:00PM",
      venue: "CSE Dept,RK Valley",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur unde ipsa sint ipsum facere ratione modi, qui autem mollitia sit explicabo laborum excepturi ea amet iure numquam quasi. Quisquam, sunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio numquam expedita soluta deleniti harum dicta quas quam aspernatur dolores ea, optio ab ratione sequi, error veritatis distinctio corrupti recusandae ex? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati unde enim",
    },
    2: {
      image: CarousalImg1,
      name: "Aadhya3",
      date: "20,APR,2024",
      time: "10:00AM - 05:00PM",
      venue: "CSE Dept,RK Valley",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur unde ipsa sint ipsum facere ratione modi, qui autem mollitia sit explicabo laborum excepturi ea amet iure numquam quasi. Quisquam, sunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio numquam expedita soluta deleniti harum dicta quas quam aspernatur dolores ea, optio ab ratione sequi, error veritatis distinctio corrupti recusandae ex? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati unde enim",
    },
  };
  const [deleteItem, setDeleteItem] = React.useState({});
  const handleCClose = () => setCOpen(false);
  const [copen, setCOpen] = React.useState(false);
  const [edit, setEdit] = useState({ check: false, event: "" });
  const [event, setEvent] = useState();
  const inputRef=useRef();
  const[coordianators,setCoordinators]=useState([]);

  const deleteCompletedEvent = (item) => {
    setDeleteItem(item);
    setCOpen(true);
  };

  const handleDeleteEvent = () => {
    handleCClose();
    console.log(deleteItem);
    toast.success("Deleted Event Successfully", {
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
  };
  const handleAddEvent = async (e) => {
    e.preventDefault();
    formik.setFieldValue("coordinators",coordianators);
    console.log(formik.values.coordinators);
    try {
      console.log(formik.values);
      const res = await axios.post(
        "https://src-website-api.onrender.com/api/v1/events",
        formik.values
      );
      console.log(res);
    } catch (error) {
      console.log(error);
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
      isUpcoming: false,
      location: "",
      registrationLink: "",
      domain: "",
      prizeDetails: ["", "", ""],
      time:"10:00AM",
      coordinators:[""]
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
  const handlePrizeDetailChange = (index, event) => {
    const newPrizeDetails = [...formik.values.prizeDetails];
    newPrizeDetails[index] = {
      position: index + 1,
      description: event.target.value,
    };
    formik.setFieldValue("prizeDetails", newPrizeDetails);
  };
  const addCoordinator=async()=>
  {
      try
      {
          const email=inputRef.current.value;
          console.log(email);
          const res = await axios.get(getUserByEmail + email, {
            headers: {
              Authorization: `Bearer ${localStorage
                .getItem("authToken")
                .slice(1, localStorage.getItem("authToken").length - 1)}`,
            },
          });
          setCoordinators(coordianators.push(res._id));
          inputRef.current.value="";
      }catch(e)
      {
        console.log(e)
      }
  }
  const getAllEvents = async () => {
    try {
      const res = await axios.get(
        "https://src-website-api.onrender.com/api/v1/events"
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getAllEvents();
  }, []);
  return (
    <>
      <ToastContainer />
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
              {/* <Button onClick={edit.check ? editProject : deleteProject}>
                {edit.check ? "Edit" : "Delete"}
              </Button> */}
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </div>
      <Grid>
        <Typography sx={{ color: "white", mx: 3 }} variant="h5" component="div">
          Upcoming Events
        </Typography>
        <Demo sx={{ borderRadius: "0.5rem", margin: "10px" }}>
          <List sx={{ padding: "0px" }}>
            {Object.entries(eventDetails).map((item) => {
              return (
                <ListItem
                  key={item[1].name}
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
                            // editCarousal(item[1]);
                          }}
                        />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon
                          onClick={() => {
                            deleteCompletedEvent(item[1]);
                          }}
                        />
                      </IconButton>
                    </>
                  }
                >
                  <ListItemAvatar>
                    <Avatar sx={{ width: 75, height: 75, marginRight: "10px" }}>
                      <img
                        src={"" + item[1].image}
                        alt=""
                        height={"75px"}
                        width={"75px"}
                        srcSet=""
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item[1].name} />
                </ListItem>
              );
            })}
          </List>
        </Demo>
      </Grid>
      <div className="sub-contact-container" style={{ margin: ".9rem" }}>
        <div className="contact-fields  add-carousel-item ">
          <form onSubmit={handleAddEvent}>
            <input
              type="text"
              id="domain-name"
              required
              name="name"
              placeholder="Event Name"
              onChange={formik.handleChange}
            />

            <textarea
              style={{ resize: "none" }}
              placeholder="Description about Domain"
              name="description"
              id="domain-desc"
              required
              cols={30}
              rows={7}
              onChange={formik.handleChange}
            ></textarea>
            <input
              type="text"
              id="domain-name"
              required
              name="location"
              placeholder="Location "
              onChange={formik.handleChange}
            />
            <select
              name="domain"
              id="domain"
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
              <option value="Web development"> Web Development</option>
              <option value="DSA"> DSA</option>
              <option value="AI"> AI </option>
              <option value="Data Science"> Data Science</option>
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
            <div className="coordianator-details" style={{"display":"flex","flexDirection":"column",gap:"1rem","border":"1px solid rgb(222,222,222)","padding":"1rem"}}>
            <input
              type="email"
              id="domain-name"
              required
              name="coordiantor"
              ref={inputRef}
              placeholder="Enter the email id "
            />
            <div  className="submit-message" style={{"textAlign":"center"}} onClick={addCoordinator}>
              Add Coordianator
            </div>
            </div>
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
              placeholder="Registration Link "
              onChange={formik.handleChange}
            />
            <button className="submit-message">
              {/* {update ? "Update Domain" : "Add Domain"} */}
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
