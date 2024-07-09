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
import { Button, CardActions } from "@mui/material";

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
  const [open, setOpen] = React.useState(false);
  const [carItem, setCarItem] = React.useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
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
                <Typography gutterBottom variant="h5" component="div">
                  {carItem && carItem.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  scroll="paper"
                >
                  {carItem && carItem.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Box>
          </Fade>
        </Modal>
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
                        <DeleteIcon />
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
    </>
  );
}
