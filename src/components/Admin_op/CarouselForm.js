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
import CarousalImg2 from "../../assets/images/carousal-2.jpg";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from "formik";
import { useRef } from "react";
import {  ToastContainer, toast, Bounce } from "react-toastify";
import "../../styles/AdminPage.css";

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

export default function CarouselForm() {
  const carousalDetails = {
    0: {
      image: CarousalImg1,
      title: "Title of Image 1",
      description:
        "Main Page Component, sit amet consectetur adipisicing elit. Quasi reiciendis veritatis iure, aperiam vitae obcaecati consequatur at.Praesentium, asperiores facere ad repellendus voluptatibusconsequatur nisi commodi a? Incidunt odio magnam veritatis! Temporaconsectetur excepturi ipsam in! Nisi exercitationem, vel autemratione iusto fugiat esse labore! Enim earum vel accusamus hic ipsumdebitis aperiam praesentium eos necessitatibus facilis laudantiumquasi odit, deserunt cumque quas quae exercitationem soluta, cumdoloremque id! Dignissimos animi, id maxime autem provident quo consequatur rerum fugiat qui repellendus quam aliquid sequi doloressed placeat ea distinctio quasi?......",
    },
    1: {
      image: CarousalImg1,
      title: "Title of Image 2",
      description:
        "Main Page Component, sit amet consectetur adipisicing elit. Quasi reiciendis veritatis iure, aperiam vitae obcaecati consequatur at.Praesentium, asperiores facere ad repellendus voluptatibusconsequatur nisi commodi a? Incidunt odio magnam veritatis! Temporaconsectetur excepturi ipsam in! Nisi exercitationem, vel autemratione iusto fugiat esse labore! Enim earum vel accusamus hic ipsumdebitis aperiam praesentium eos necessitatibus facilis laudantiumquasi odit, deserunt cumque quas quae exercitationem soluta, cumdoloremque id! Dignissimos animi, id maxime autem provident quo consequatur rerum fugiat qui repellendus quam aliquid sequi doloressed placeat ea distinctio quasi?......",
    },
    2: {
      image: CarousalImg2,
      title: "Title of Image 3",
      description:
        "Main Page Component, sit amet consectetur adipisicing elit. Quasi reiciendis veritatis iure, aperiam vitae obcaecati consequatur at.Praesentium, asperiores facere ad repellendus voluptatibusconsequatur nisi commodi a? Incidunt odio magnam veritatis! Temporaconsectetur excepturi ipsam in! Nisi exercitationem, vel autemratione iusto fugiat esse labore! Enim earum vel accusamus hic ipsumdebitis aperiam praesentium eos necessitatibus facilis laudantiumquasi odit, deserunt cumque quas quae exercitationem soluta, cumdoloremque id! Dignissimos animi, id maxime autem provident quo consequatur rerum fugiat qui repellendus quam aliquid sequi doloressed placeat ea distinctio quasi?......",
    },
  };
  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  const editCarousal = (item) => {
    setCarItem(item);
    handleOpen();
  };
  const deleteCarousal = (item) => {
    setDeleteItem(item);
    setCOpen(true);
  };
  const [open, setOpen] = React.useState(false);
  const [copen, setCOpen] = React.useState(false);
  const [carItem, setCarItem] = React.useState({});
  const [deleteItem, setDeleteItem] = React.useState({});

  const [edit, setEdit] = React.useState(true);
  const fileRef = useRef(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCClose = () => setCOpen(false);


  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };
  const handleEditSubmission = (e) => {
    e.preventDefault();
    console.log(editCarousalFormik.values);
    setEdit(!edit);
    toast.success("Updated Carousel Successfully", {
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

  const handleAddCarousel = (e) => {
    e.preventDefault();
    console.log(addCarousalFormik.values);
    toast.success("Added Carousel Successfully", {
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
    addCarousalFormik.values = { title: "", description: "" };
    addCarousalFormik.resetForm();
    fileRef.current.value = "";
  }

  const handleDeleteCarousel=()=>
  {
      handleCClose();
      console.log(deleteItem);
      toast.success("Deleted Carousel Successfully", {
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
  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    addCarousalFormik.setFieldValue("file", file);
  };

  const editCarousalFormik = useFormik(
    {
      initialValues: {
        title: carItem && carItem.title,
        description: carItem && carItem.description,
      }
    }
  )
  const addCarousalFormik = useFormik(
    {
      initialValues: {
        title: "",
        description: "",
        file: null
      }
    }
  )
  return (
    <>
      <ToastContainer />
      <div>
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
              <CardMedia
                component="img"
                image={carItem && carItem.image}
                sx={{ height: "20rem" }}
              />
              <CardContent>
                <Typography>
                  <div className="contact-fields carousel-fields" onSubmit={handleEditSubmission}>
                    <form >
                      <input
                        type="text"
                        id="carousel-title"
                        required
                        name="title"
                        defaultValue={carItem && carItem.title}
                        disabled={edit}
                        onChange={editCarousalFormik.handleChange}
                        style={!edit?{border:"0.5px solid black",backgroundColor:"white"}:{}}
                      />

                      <textarea
                        style={{ resize: "none" }}
                        placeholder="Description about Domain"
                        name="description"
                        id="carousel-desc"
                        required
                        cols={30}
                        rows={7}
                        spellCheck={false}
                        disabled={edit}
                        defaultValue={carItem && carItem.description}
                        onChange={editCarousalFormik.handleChange}
                        // eslint-disable-next-line
                        style={!edit?{border:"0.5px solid black",backgroundColor:"white"}:{}}
                      ></textarea>
                      {edit ? (
                        <button className="submit-message" onClick={handleEdit}>
                          Edit
                        </button>
                      ) : (
                        <button className="submit-message" type="submit">
                          Save
                        </button>
                      )}

                    </form>
                  </div>
                </Typography>
              </CardContent>

            </Box>
          </Fade>
        </Modal>
      </div>
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
              You are about to delete this carousel. This action is irreversible. Do you wish to proceed?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCClose}>Cancel</Button>
              <Button onClick={handleDeleteCarousel} >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </div>
      <Grid>
        <Typography sx={{ color: "white", mx: 3 }} variant="h5" component="div">
          Current Carousel Items
        </Typography>
        <Demo sx={{ borderRadius: "0.5rem", margin: "10px" }}>
          <List sx={{ padding: "0px" }}>
            {Object.entries(carousalDetails).map((item) => {
              return (
                <ListItem
                  key={item[1].title}
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
                        <DeleteIcon onClick={() => {
                          deleteCarousal(item[1]);
                        }} />
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
                  <ListItemText primary={item[1].title} />
                </ListItem>
              );
            })}
          </List>
        </Demo>
      </Grid>
      <div className="sub-contact-container" style={{ margin: ".9rem" }}>
        <div className="contact-head">
          <div>
            <h2>Add Carousel</h2>
          </div>
        </div>
        <div className="contact-fields add-carousel-item" >
          <form onSubmit={handleAddCarousel} >
            <input
              type="text"
              id="domain-name"
              required
              name="title"
              onChange={addCarousalFormik.handleChange}
              value={addCarousalFormik.values.title}
              placeholder="Title of carousel"
            />

            <textarea
              style={{ resize: "none" }}
              placeholder="Description about Carousel Item"
              name="description"
              id="domain-desc"
              required
              onChange={addCarousalFormik.handleChange}
              cols={30}
              rows={7}
              value={addCarousalFormik.values.description}
            ></textarea>
            <input type="file" name="file" accept="image/*" onChange={handleFileChange} ref={fileRef} />
            <button className="submit-message" type="submit">
              Add Carousel
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
