import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { setSnackBar } from "../../features/snackbar/snackbar";
import { Accordion } from "@mui/material";
import { AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import DeleteIcon from "@mui/icons-material/Delete";
export default function ResouceForm() {
  // Getting Environment Variables
  const createResource = process.env.REACT_APP_CREATE_RESOURCE;
  const getAllResource = process.env.REACT_APP_GET_RESOURCES;
  const updateResources = process.env.REACT_APP_UPDATE_RESOURCE_BY_ID;
  const deleteResources = process.env.REACT_APP_DELETE_RESOURCE_BY_ID;
  const getDomains = process.env.REACT_APP_GET_DOMAINS;

  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  const [loader, setLoader] = React.useState(false);
  const [copen, setCOpen] = React.useState(false);
  const [edit, setEdit] = React.useState({ check: false, resource: {} });
  const [resource, setresource] = React.useState();
  const [cancel, setCancel] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [domain, setDomain] = React.useState([]);

  const handleCClose = (type) => setCOpen(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const dispacth = useDispatch();
  useEffect(() => {
    getAllResources();
    handleDomain();
  }, []);

  const getAllResources = async () => {
    try {
      const data = await axios.get(getAllResource);
      setresource(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const addResource = async (e) => {
    setLoader(true);
    try {
      const res = await axios.post(createResource, e, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("authToken")
            .slice(1, localStorage.getItem("authToken").length - 1)}`,
        },
      });
      dispacth(
        setSnackBar({
          message: "Resource Added Successfully",
          variant: "success",
        })
      );
      getAllResources();
      resourceFormik.resetForm();
      setLoader(false);
    } catch (e) {
      console.log(e);
      dispacth(
        setSnackBar({
          message: "Error in adding in Resource",
          variant: "error",
        })
      );
      setLoader(false);
    }
    setLoader(false);
  };
  const updateResource = async (e) => {
    setLoader(true);
    try {
      const res = await axios.put(updateResources + edit.resource._id, e, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("authToken")
            .slice(1, localStorage.getItem("authToken").length - 1)}`,
        },
      });
      dispacth(
        setSnackBar({
          message: "Resource Updated Successfully",
          variant: "success",
        })
      );
      setLoader(false);
      getAllResources();
    } catch (e) {
      console.log(e);
      dispacth(
        setSnackBar({
          message: "Error in updating resource",
          variant: "error",
        })
      );
      setLoader(false);
    }

    resourceFormik.resetForm();
    setEdit({ check: false, resource: "" });
    setCancel(false);
    setLoader(false);
  };
  const deleteResource = async () => {
    try {
      const res = await axios.delete(deleteResources + edit.resource._id, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("authToken")
            .slice(1, localStorage.getItem("authToken").length - 1)}`,
        },
      });
      dispacth(
        setSnackBar({
          message: "Resource deleted Successfully",
          variant: "success",
        })
      );
      getAllResources();
    } catch (e) {
      dispacth(
        setSnackBar({
          message: "Error in deleting in resource",
          variant: "error",
        })
      );
      console.log(e);
    }
    setCOpen(false);
  };
  const editResource = () => {
    setCOpen(false);
    resourceFormik.setFieldValue("title", edit.resource.title);
    resourceFormik.setFieldValue("description", edit.resource.description);
    resourceFormik.setFieldValue("domainId", edit.resource.domainId);
    resourceFormik.setFieldValue("url", edit.resource.url);
    resourceFormik.setFieldValue("type", edit.resource.type);
    setCancel(true);
  };
  const handleDomain = async () => {
    try {
      const res = await axios.get(getDomains, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("authToken")
            .slice(1, localStorage.getItem("authToken").length - 1)}`,
        },
      });
      setDomain(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const resourceFormik = useFormik({
    initialValues: {
      title: "",
      description: "",
      domainId: "",
      url: "",
      type: "",
    },
    validateOnMount: true,

    validate: (values) => {
      let errors = {};

      if (values.name === "") {
        errors.name = "Please enter the valid Domain Name";
      }

      if (values.description === "") {
        errors.description = "Description requried";
      }
      if (values.githubLink === "") {
        errors.githubLink = "Github Link requried";
      }
      if (values.demoLink === "") {
        errors.demoLink = "Demo Link requried";
      }
      return errors;
    },
  });
  const handleEdit = (e) => {
    setLoader(true);
    e.preventDefault();
    updateResource(resourceFormik.values);
  };
  const handleSubmit = (e) => {
    setLoader(true);
    e.preventDefault();
    addResource(resourceFormik.values);
  };

  return (
    <>
      <div>
        <React.Fragment>
          <Dialog
            open={copen}
            onClose={handleCClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {edit.check ? "Edit Resource" : "Delete Resource"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {edit.check
                  ? "You are about to edit this resource.Modify the details in following form"
                  : "You are about to delete this resource. This action is irreversible. Do you wish to proceed?"}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  setEdit({ check: false, resource: "" });
                  setCOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button onClick={edit.check ? editResource : deleteResource}>
                {edit.check ? "Edit" : "Delete"}
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </div>
      <div style={{ marginTop: "1.1rem" }}>
        <Typography
          sx={{ color: "white", marginBottom: "1rem" }}
          variant="h5"
          component="div"
        >
          Current resource
        </Typography>

        {resource &&
          resource.map((ele) => {
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
                            Domain :{" "}
                          </span>
                          {domain &&
                            domain.map((item) => {
                              if (item._id === ele.domainId) {
                                return item.name;
                              }
                            })}
                        </div>
                        <div>
                          <span
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              margin: "0px 5px",
                            }}
                          >
                            URL :{" "}
                          </span>
                          <span style={{ textAlign: "justify" }}>
                            <a href={ele.url}>{ele.url}</a>
                          </span>
                        </div>
                        <div>
                          <span
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              margin: "0px 5px",
                            }}
                          >
                            Type :{" "}
                          </span>
                          <span style={{ textAlign: "justify" }}>
                            {ele.type}
                          </span>
                        </div>
                        <div>
                          <IconButton
                            edge="end"
                            aria-label="edit"
                            sx={{ marginRight: "0.5rem" }}
                            onClick={() => {
                              setEdit({ check: true, resource: ele });
                              setCOpen(true);
                            }}
                          >
                            <EditNoteRoundedIcon />
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => {
                              setEdit({ check: false, resource: ele });
                              setCOpen(true);
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
      <div className="sub-contact-container" style={{ marginTop: "1.1rem" }}>
        <div className="contact-head">
          <div>
            <h2>{edit.check ? "Edit Resource" : "Add Resource"}</h2>
            {cancel && (
              <button
                onClick={() => {
                  setEdit(false);
                  setCancel(false);
                  resourceFormik.resetForm();
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
        <div className="contact-fields add-carousel-item">
          <form onSubmit={edit.check ? handleEdit : handleSubmit}>
            <input
              type="text"
              id="project-name"
              required
              name="title"
              onChange={resourceFormik.handleChange}
              value={resourceFormik.values.title}
              placeholder="Title of Resource"
            />
            <textarea
              style={{ resize: "none" }}
              placeholder="Description about resource"
              name="description"
              id="project-desc"
              required
              onChange={resourceFormik.handleChange}
              cols={30}
              rows={7}
              value={resourceFormik.values.description}
            ></textarea>
            <select
              name="domainId"
              id=""
              style={{
                height: "3rem",
                border: "0.5px solid rgb(222,222,222)",
                outline: "none",
              }}
              onChange={resourceFormik.handleChange}
              value={resourceFormik.values.domainId}
              required
            >
              <option hidden value="">
                Select Domain
              </option>
              {domain &&
                domain.map((item) => {
                  return <option value={item._id}>{item.name}</option>;
                })}
            </select>
            <input
              type="text"
              id="github-link"
              required
              name="url"
              onChange={resourceFormik.handleChange}
              value={resourceFormik.values.url}
              placeholder="URL"
            />
            <input
              type="text"
              id="demo-link"
              required
              name="type"
              onChange={resourceFormik.handleChange}
              value={resourceFormik.values.type}
              placeholder="Type"
            />
            {edit.check ? (
              <button
                className="submit-message"
                type="submit"
                disabled={loader}
              >
                {loader ? (
                  <CircularProgress size={27} sx={{ color: "#022368" }} />
                ) : (
                  "Edit Project"
                )}
              </button>
            ) : (
              <button
                className="submit-message"
                type="submit"
                disabled={loader}
              >
                {loader ? (
                  <CircularProgress size={27} sx={{ color: "#022368" }} />
                ) : (
                  "Add Resource"
                )}
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
