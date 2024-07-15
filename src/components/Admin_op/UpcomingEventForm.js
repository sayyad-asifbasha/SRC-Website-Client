import React from "react";
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

export default function UpcomingEventForm() {
  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

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
  const handleAddEvent = (e) => {
    e.preventDefault();
    console.log(formik.values);
    // console.log(formik.values.start.format('hh:mm A'))
    // console.log(formik.values.end.format('hh:mm A'))
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      from: dayjs(),
      to: dayjs(),
      start: dayjs("T15:30"),
      end: dayjs("T15:30"),
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
              {"Delete Carousel"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                You are about to delete this carousel. This action is
                irreversible. Do you wish to proceed?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCClose}>Cancel</Button>
              <Button onClick={handleDeleteEvent}>Delete</Button>
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
              placeholder="Domain Name"
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className="upcoming-event-time">
                <DemoItem label="Starts">
                  <TimePicker
                    name="start"
                    value={formik.values.start}
                    onChange={(time) => {
                      const parsedTime = dayjs(time);
                      formik.setFieldValue("to", parsedTime.format("hh:mm A"));
                    }}
                  />
                </DemoItem>
                <DemoItem label="Ends">
                  <TimePicker
                    name="end"
                    value={formik.values.end}
                    onChange={(time) =>
                      formik.setFieldValue("to", dayjs(time).format("hh:mm A"))
                    }
                  />
                </DemoItem>
              </div>
              <div className="upcoming-event-date">
                <DemoItem label="From">
                  <DatePicker
                    name="from"
                    value={formik.values.from}
                    onChange={(date) =>
                      formik.setFieldValue(
                        "from",
                        dayjs(date).format("DD MMM YYYY")
                      )
                    }
                  />
                </DemoItem>
                <DemoItem label="To">
                  <DatePicker
                    name="to"
                    value={formik.values.to}
                    onChange={(date) =>
                      formik.setFieldValue(
                        "to",
                        dayjs(date).format("DD MMM YYYY")
                      )
                    }
                  />
                </DemoItem>
              </div>
            </LocalizationProvider>
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
