import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions(props) {
  const { list } = props;
  const [expanded, setExpanded] = React.useState(false);
  console.log(list);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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
                <Typography sx={{ color: "text.secondary" }}>
                  {ele.name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{ele.message}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
    </div>
  );
}
