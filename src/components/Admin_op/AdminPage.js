import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../styles/AdminPage.css";
import { Link, Outlet } from "react-router-dom";
export default function AdminPage() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className="admin-container">
        <div className="admin-dashboard">
          <List
            sx={{
              width: "100%",
              bgcolor: "back.paper",
              borderRadius: "0.3rem",
            }}
            className="dashboard-list"
          >
            {/* Home Page Dashboard */}
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              sx={{ borderRadius: "0.3rem !important", marginBottom: "4px" }}
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
                  component={Link}
                  to="carousel"
                >
                  <ListItemText primary="Carousel" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 2}
                  onClick={(event) => handleListItemClick(event, 2)}
                  component={Link}
                  to="domain"
                >
                  <ListItemText primary="Domain" />
                </ListItemButton>

                <ListItemButton
                  selected={selectedIndex === 3}
                  onClick={(event) => handleListItemClick(event, 3)}
                  component={Link}
                  to="news"
                >
                  <ListItemText primary="News" />
                </ListItemButton>
              </AccordionDetails>
            </Accordion>

            {/* About Us Page Dashboard */}

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              sx={{ borderRadius: "0.3rem !important", marginBottom: "4px" }}
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
                  selected={selectedIndex === 12}
                  onClick={(event) => handleListItemClick(event, 12)}
                  component={Link}
                  to="officials"
                >
                  <ListItemText primary="Official Details" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 4}
                  onClick={(event) => handleListItemClick(event, 4)}
                  component={Link}
                  to="coordinators"
                >
                  <ListItemText primary="Coordinator Details" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 11}
                  onClick={(event) => handleListItemClick(event, 11)}
                  component={Link}
                  to="testimonials"
                >
                  <ListItemText primary="Testimonals" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 13}
                  onClick={(event) => handleListItemClick(event, 13)}
                  component={Link}
                  to="cr"
                >
                  <ListItemText primary="Make CR" />
                </ListItemButton>
              </AccordionDetails>
            </Accordion>

            {/* Events Page  Dashboard */}

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              sx={{ borderRadius: "0.3rem !important", marginBottom: "4px" }}
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
                  component={Link}
                  to="completed-events"
                >
                  <ListItemText primary="Completed Events" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 6}
                  onClick={(event) => handleListItemClick(event, 6)}
                  component={Link}
                  to="upcoming-events"
                >
                  <ListItemText primary="Upcoming Events" />
                </ListItemButton>
              </AccordionDetails>
            </Accordion>

            {/* Project page Dashboard */}

            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              sx={{ borderRadius: "0.3rem !important", marginBottom: "4px" }}
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
                  component={Link}
                  to="projects"
                >
                  <ListItemText primary="Projects" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 8}
                  onClick={(event) => handleListItemClick(event, 8)}
                  component={Link}
                  to="resources"
                >
                  <ListItemText primary="Resources" />
                </ListItemButton>
              </AccordionDetails>
            </Accordion>

            {/* Contact Forum Dashboard */}
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
              sx={{ borderRadius: "0.3rem !important", marginBottom: "4px" }}
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
                  component={Link}
                  to="contact-forum"
                >
                  <ListItemText primary="Contact Forum" />
                </ListItemButton>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
              sx={{ borderRadius: "0.3rem !important", marginBottom: "4px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <ListItemText primary="Feedback" />
              </AccordionSummary>
              <AccordionDetails>
                <ListItemButton
                  selected={selectedIndex === 14}
                  onClick={(event) => handleListItemClick(event, 14)}
                  component={Link}
                  to="feedback"
                >
                  <ListItemText primary="Feedback" />
                </ListItemButton>
              </AccordionDetails>
            </Accordion>
          </List>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
