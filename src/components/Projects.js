import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Badge } from "@mui/material";
import phone from "../assets/images/contact-image-3.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
export default function Projects() {
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const projects = [
    {
      domain: "1",
      name: "Nagarjuna",
      date: "01-01-2025",
      projectImg: "image link",
      tags: ["React", "JS", "PHP", "MongoDB", "MongoDB"],
      projectDescription:
        "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.   Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned,to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves,garlic tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.",
      Github: "Github link",
      liveDemo: "Live demo",
    },
    {
      domain: "1",
      name: "Nagarjuna",
      date: "01-01-2025",
      projectImg: "image link",
      tags: ["React", "JS", "PHP", "MongoDB", "MongoDB"],
      projectDescription:
        "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.   Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned,to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves,garlic tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.",
      Github: "Github link",
      liveDemo: "Live demo",
    },
    {
      domain: "1",
      name: "Nagarjuna",
      date: "01-01-2025",
      projectImg: "image link",
      tags: ["React", "JS", "PHP", "MongoDB", "MongoDB"],
      projectDescription:
        "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.   Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned,to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves,garlic tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.",
      Github: "Github link",
      liveDemo: "Live demo",
    },
    {
      domain: "1",
      name: "Nagarjuna",
      date: "01-01-2025",
      projectImg: "image link",
      tags: ["React", "JS", "PHP", "MongoDB", "MongoDB"],
      projectDescription:
        "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.   Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned,to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves,garlic tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.",
      Github: "Github link",
      liveDemo: "Live demo",
    },
    {
      domain: "1",
      name: "Nagarjuna",
      date: "01-01-2025",
      projectImg: "image link",
      tags: ["React", "JS", "PHP", "MongoDB", "MongoDB"],
      projectDescription:
        "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.   Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned,to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves,garlic tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.",
      Github: "Github link",
      liveDemo: "Live demo",
    },
    {
      domain: "1",
      name: "Nagarjuna",
      date: "01-01-2025",
      projectImg: "image link",
      tags: ["React", "JS", "PHP", "MongoDB", "MongoDB"],
      projectDescription:
        "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.   Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned,to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves,garlic tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.",
      Github: "Github link",
      liveDemo: "Live demo",
    },
  ];

  const badgeStyle = {
    "& .MuiBadge-badge": {
      alignContent: "center",
      fontSize: 17,
      height: 29,
      minWidth: 75,
      width: "5.5rem",
      backgroundColor: "var(--hover-color)",
      zIndex: 0,
    },
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        }}
      >
        {projects.map((e, i) => {
          return (
            <div style={{ margin: "2rem" }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      <img src={phone} alt="" />
                    </Avatar>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={phone}
                  alt="Paella dish"
                />
                <CardContent
                  sx={{
                    margin: "0rem",

                    fontSize: "3.5rem",
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    <div>
                      <ul
                        style={{
                          display: "gird",
                          marginLeft: "1rem",
                          gap: "3rem",
                          listStyle: "none",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(35px, 1fr))",
                        }}
                      >
                        {e.tags.map((ele) => {
                          return (
                            <li>
                              <Badge
                                badgeContent={ele}
                                color="primary"
                                sx={badgeStyle}
                              ></Badge>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </Typography>
                  <div
                    style={{
                      display: "grid",
                      margin: "0px",
                      placeItems: "center",
                      gridTemplateColumns:
                        "repeat(auto-fill, minmax(90px, 2fr))",
                      gap: "none !important",
                    }}
                  >
                    {e.tags.map((ele) => {
                      return (
                        <div style={{ margin: "10px !important" }}>
                          <Badge
                            badgeContent={ele}
                            color="primary"
                            sx={badgeStyle}
                          ></Badge>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
                <Accordion
                  expanded={expanded === `panel${i}`}
                  onChange={handleChange(`panel${i}`)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      sx={{
                        color: "text.primary",
                        fontSize: "20px !important",
                      }}
                    >
                      Description
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: "text.primary",
                        fontSize: "18px !important",
                        fontWeight: "500",
                      }}
                    >
                      {e.projectDescription}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}
