import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import CarouselForm from "./CarouselForm";
import DomainForm from "./DomainForm";
import "../../styles/AdminPage.css";
import NewsForm from "./NewsForm";
import UpcomingEventForm from "./UpcomingEventForm";
import Officials from "./Officials";
import ContactForum from "./ContactForum";
import CompletedEventForum from "./CompletedEventForum";
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
                <ListItemText primary="Projects Page" />
              </AccordionSummary>
              <AccordionDetails>
                <ListItemButton
                  selected={selectedIndex === 7}
                  onClick={(event) => handleListItemClick(event, 7)}
                >
                  <ListItemText primary="Projects" />
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
          <div className="dashboard-nav">
            <Box
              sx={{
                maxWidth: { xs: "100%", sm: 500 },
                bgcolor: "background.paper",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChangeNav}
                variant="scrollable"
                scrollButtons={false}
              >
                <Tab
                  label={
                    <div>
                      <Button
                        id="home-button"
                        aria-controls={homeAnchorEl ? "home-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={homeAnchorEl ? "true" : undefined}
                        onClick={handleMenuClick(setHomeAnchorEl)}
                        sx={{ color: "black !important" }}
                      >
                        Home Page
                      </Button>
                      <Menu
                        id="home-menu"
                        anchorEl={homeAnchorEl}
                        open={Boolean(homeAnchorEl)}
                        onClose={handleMenuClose(setHomeAnchorEl)}
                        MenuListProps={{
                          "aria-labelledby": "home-button",
                        }}
                      >
                        <MenuItem
                          onClick={handleMenuClose(setHomeAnchorEl)}
                          id="1"
                        >
                          Carousel
                        </MenuItem>
                        <MenuItem
                          onClick={handleMenuClose(setHomeAnchorEl)}
                          id="2"
                        >
                          Domain
                        </MenuItem>
                        <MenuItem
                          onClick={handleMenuClose(setHomeAnchorEl)}
                          id="4"
                        >
                          Events
                        </MenuItem>
                        <MenuItem
                          onClick={handleMenuClose(setHomeAnchorEl)}
                          id="3"
                        >
                          News
                        </MenuItem>
                      </Menu>
                    </div>
                  }
                />
                <Tab
                  label={
                    <div>
                      <Button
                        id="about-button"
                        aria-controls={aboutAnchorEl ? "about-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={aboutAnchorEl ? "true" : undefined}
                        onClick={handleMenuClick(setAboutAnchorEl)}
                        sx={{ color: "black !important" }}
                      >
                        About Us Page
                      </Button>
                      <Menu
                        id="about-menu"
                        anchorEl={aboutAnchorEl}
                        open={Boolean(aboutAnchorEl)}
                        onClose={handleMenuClose(setAboutAnchorEl)}
                        MenuListProps={{
                          "aria-labelledby": "about-button",
                        }}
                      >
                        <MenuItem onClick={handleMenuClose(setAboutAnchorEl)}>
                          Officials Details
                        </MenuItem>
                      </Menu>
                    </div>
                  }
                />
                <Tab
                  label={
                    <div>
                      <Button
                        id="events-button"
                        aria-controls={
                          eventsAnchorEl ? "events-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={eventsAnchorEl ? "true" : undefined}
                        onClick={handleMenuClick(setEventsAnchorEl)}
                        sx={{ color: "black !important" }}
                      >
                        Events Page
                      </Button>
                      <Menu
                        id="events-menu"
                        anchorEl={eventsAnchorEl}
                        open={Boolean(eventsAnchorEl)}
                        onClose={handleMenuClose(setEventsAnchorEl)}
                        MenuListProps={{
                          "aria-labelledby": "events-button",
                        }}
                      >
                        <MenuItem onClick={handleMenuClose(setEventsAnchorEl)}>
                          Upcoming Events
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose(setEventsAnchorEl)}>
                          Completed Events
                        </MenuItem>
                      </Menu>
                    </div>
                  }
                />
                <Tab
                  label={
                    <div>
                      <Button
                        id="projects-button"
                        aria-controls={
                          projectsAnchorEl ? "projects-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={projectsAnchorEl ? "true" : undefined}
                        onClick={handleMenuClick(setProjectsAnchorEl)}
                        sx={{ color: "black !important" }}
                      >
                        Projects Page
                      </Button>
                      <Menu
                        id="projects-menu"
                        anchorEl={projectsAnchorEl}
                        open={Boolean(projectsAnchorEl)}
                        onClose={handleMenuClose(setProjectsAnchorEl)}
                        MenuListProps={{
                          "aria-labelledby": "projects-button",
                        }}
                      >
                        <MenuItem
                          onClick={handleMenuClose(setProjectsAnchorEl)}
                        >
                          Projects
                        </MenuItem>
                      </Menu>
                    </div>
                  }
                />
              </Tabs>
            </Box>
          </div>
        </div>
        <div>
          {selectedIndex === 1 ? (
            <CarouselForm />
          ) : selectedIndex === 2 ? (
            <DomainForm />
          ) : selectedIndex === 3 ? (
            <NewsForm />
          ) : selectedIndex === 6 ? (
            <UpcomingEventForm />
          ) : selectedIndex === 9 ? (
            <ContactForum />
          ) : (
            <NewsForm />
          )}
        </div>
      </div>
    </>
  );
}
