import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


import CarouselForm from "./CarouselForm";
import DomainForm from "./DomainForm";
import "../../styles/AdminPage.css";
import NewsForm from "./NewsForm";
import UpcomingEventForm from "./UpcomingEventForm";
import Officials from "./Officials";
import ContactForum from "./ContactForum";
import CompletedEventForum from "./CompletedEventForum";
import ProjectForm from "./ProjectForm";
import ResourceForm from "./ResourceForm";
export default function NestedList() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const [value, setValue] = React.useState(0);

  const handleChangeNav = (event, newValue) => {
    setValue(newValue);
  };

  const [homeAnchorEl, setHomeAnchorEl] = React.useState(null);
  const [aboutAnchorEl, setAboutAnchorEl] = React.useState(null);
  const [eventsAnchorEl, setEventsAnchorEl] = React.useState(null);
  const [projectsAnchorEl, setProjectsAnchorEl] = React.useState(null);

  const handleMenuClick = (setAnchorEl) => (event) => {
    setAnchorEl(event.currentTarget);
    // setSelectedIndex(event.target.id);
    console.log(event.target.id);
  };

  const handleMenuClose = (setAnchorEl) => (e) => {
    setAnchorEl(null);
    // console.log(e.target.id);
    setSelectedIndex(e.target.id);
    console.log(selectedIndex);
  };

  return (
    <>
      <div className="admin-container">
        <div className="admin-dashboard">
          <List
            sx={{
              width: "100%",
              maxWidth: 400,
              bgcolor: "back.paper",

              borderRadius: "0.5rem",
            }}
            className="dashboard-list"
          >
            {/* Home Page Dashboard */}
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              sx={{ borderRadius: "0.5rem !important", marginBottom: "4px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <ListItemText primary="Home Page" />
              </AccordionSummary>
              <AccordionDetails>
                <ListItemButton
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}
                >
                  <ListItemText primary="Carousel" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 2}
                  onClick={(event) => handleListItemClick(event, 2)}
                >
                  <ListItemText primary="Domain" />
                </ListItemButton>

                <ListItemButton
                  selected={selectedIndex === 3}
                  onClick={(event) => handleListItemClick(event, 3)}
                >
                  <ListItemText primary="News" />
                </ListItemButton>
              </AccordionDetails>
            </Accordion>

            {/* About Us Page Dashboard */}

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              sx={{ borderRadius: "0.5rem !important", marginBottom: "4px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <ListItemText primary="About Us   Page" />
              </AccordionSummary>
              <AccordionDetails>
                <ListItemButton
                  selected={selectedIndex === 4}
                  onClick={(event) => handleListItemClick(event, 4)}
                >
                  <ListItemText primary="Officals Details" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 10}
                  onClick={(event) => handleListItemClick(event, 10)}
                >
                  <ListItemText primary="Coordinators" />
                </ListItemButton>
              </AccordionDetails>
            </Accordion>

            {/* Events Page  Dashboard */}

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              sx={{ borderRadius: "0.5rem !important", marginBottom: "4px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <ListItemText primary="Events Page" />
              </AccordionSummary>
              <AccordionDetails>
                <ListItemButton
                  selected={selectedIndex === 5}
                  onClick={(event) => handleListItemClick(event, 5)}
                >
                  <ListItemText primary="Completed Events" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 6}
                  onClick={(event) => handleListItemClick(event, 6)}
                >
                  <ListItemText primary="Upcoming Events" />
                </ListItemButton>
              </AccordionDetails>
            </Accordion>

            {/* Project page Dashboard */}

            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              sx={{ borderRadius: "0.5rem !important", marginBottom: "4px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <ListItemText primary="Projects & Resources" />
              </AccordionSummary>
              <AccordionDetails>
                <ListItemButton
                  selected={selectedIndex === 7}
                  onClick={(event) => handleListItemClick(event, 7)}
                >
                  <ListItemText primary="Projects" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 8}
                  onClick={(event) => handleListItemClick(event, 8)}
                >
                  <ListItemText primary="Resources" />
                </ListItemButton>
              </AccordionDetails>
            </Accordion>

            {/* Contact Forum Dashboard */}
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
              sx={{ borderRadius: "0.5rem !important", marginBottom: "4px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <ListItemText primary="Contact Forum" />
              </AccordionSummary>
              <AccordionDetails>
                <ListItemButton
                  selected={selectedIndex === 9}
                  onClick={(event) => handleListItemClick(event, 9)}
                >
                  <ListItemText primary="Contact Forum" />
                </ListItemButton>
              </AccordionDetails>
            </Accordion>
          </List>
        </div>
        <div>
          {selectedIndex === 1 ? (
            <UpcomingEventForm />
          ) : selectedIndex === 2 ? (
            <DomainForm />
          ) : selectedIndex === 3 ? (
            <NewsForm />
          ): selectedIndex === 10 ? (
            <Officials />
          ) : selectedIndex === 6 ? (
            <UpcomingEventForm />
          ): selectedIndex === 7 ? (
            <ProjectForm />
          ): selectedIndex === 8 ? (
            <ResourceForm />
          ): selectedIndex === 9 ? (
            <ContactForum />
          ) : (
            <NewsForm />
          )}
        </div>
      </div>
    </>
  );
}
