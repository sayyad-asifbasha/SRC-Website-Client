import React, { useEffect, useState } from "react";

import Typography from "@mui/material/Typography";

import ListItem from "@mui/material/ListItem";
import { Accordion } from "@mui/material";
import { AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { useSelector } from "react-redux";
export default function Resources() {
  const [resources, setResources] = useState(null);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getResourcesApi = process.env.REACT_APP_GET_RESOURCE_BY_DOMAIN_ID;

  const domainId = useSelector((state) => state.introText.domainId);
  useEffect(() => {
    getResources(domainId);
  }, [domainId]);

  const getResources = async (e) => {
    try {
      const res = await axios.get(getResourcesApi + e);
      setResources(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div style={{ margin: "2.1rem" }}>
        <Typography
          sx={{ color: "white", marginBottom: "1rem" }}
          variant="h5"
          component="div"
        >
          Resources
        </Typography>

        {resources && resources.length > 0 ? (
          resources.map((ele) => {
            return (
              <Accordion
                expanded={expanded === ele._id}
                style={{ borderRadius: "0.5rem", marginTop: "0.5rem" }}
                onChange={handleChange(ele._id)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${ele._id}`}
                  id={`${ele._id}`}
                >
                  <Typography>
                    <span style={{ fontSize: "20px", fontWeight: "600" }}>
                      {ele.title}
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
                        <div style={{ textAlign: "justify" }}>
                          <span
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              margin: "0px 5px",
                            }}
                          >
                            Description :{" "}
                          </span>
                          <span>{ele.description}</span>
                        </div>

                        <div>
                          <span
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              margin: "0px 5px",
                            }}
                          >
                            Resource Type :
                          </span>
                          <span>
                            <span>{ele.type}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </ListItem>
                </AccordionDetails>
              </Accordion>
            );
          })
        ) : (
          <div
            style={{
              color: "white",
              fontSize: "2.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            No resource found
          </div>
        )}
      </div>
    </>
  );
}
