import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Grid, Icon, IconButton } from "@mui/material";
import axios from "axios";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { setSnackBar } from "../../features/snackbar/snackbar";

export default function ControlledAccordions(props) {
  const dispatch = useDispatch();
  const { list, deleteContactForum } = props;
  const [expanded, setExpanded] = React.useState(false);
  console.log(list);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const deleteContactForumHandle = (e) => {
    deleteContactForum(e);
  };

  return (
    <div style={{ padding: "0rem" }}>
      {list &&
        list.map((ele) => {
          return (
            <Accordion
              expanded={expanded === ele._id}
              style={{ borderRadius: "0.5rem", marginTop: "0.5rem" }}
              onChange={handleChange(ele._id)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${ele._id}-content`}
                id={`${ele._id}-header`}
              >
                <Typography>
                  <span style={{ fontSize: "20px", fontWeight: "600" }}>
                    {ele.email}
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
                      <div style={{ textAlign: "left" }}>
                        <span
                          style={{
                            fontSize: "1.1rem",
                            fontWeight: "bold",
                            margin: "0px 5px",
                          }}
                        >
                          Name :
                        </span>
                        <span>{ele.name}</span>
                      </div>
                      <div style={{ textAlign: "justify" }}>
                        <span
                          style={{
                            fontSize: "1.1rem",
                            fontWeight: "bold",
                            margin: "0px 5px",
                          }}
                        >
                          Message :
                        </span>
                        <span>{ele.message}</span>
                      </div>
                      <div>
                        <IconButton
                          onClick={() => {
                            deleteContactForumHandle(ele._id);
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
  );
}
