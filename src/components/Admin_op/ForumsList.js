import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Icon, IconButton } from "@mui/material";
import axios from "axios";
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
    <div>
      {list &&
        list.map((ele) => {
          return (
            <Accordion
              expanded={expanded === ele._id}
              onChange={handleChange(ele._id)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${ele._id}-content`}
                id={`${ele._id}-header`}
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  {ele.email}
                </Typography>
                <Typography sx={{ color: "text.secondary", width: "30rem" }}>
                  {ele.name}
                </Typography>
                <IconButton
                  sx={{ marginLeft: "5rem" }}
                  onClick={() => {
                    deleteContactForumHandle(ele._id);
                  }}
                >
                  <Button id="domain-edit-btn" size="small">
                    Delete
                  </Button>
                </IconButton>
              </AccordionSummary>{" "}
              <AccordionDetails>
                <Typography>{ele.message}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
    </div>
  );
}
