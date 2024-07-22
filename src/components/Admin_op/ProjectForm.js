import React, { useEffect, useState } from "react";
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
export default function ProjectForm() {
  // Getting Environment Variables
  const createProject = process.env.REACT_APP_CREATE_PROJECT;
  const getAllProject = process.env.REACT_APP_GET_ALL_PROJECTS;
  const updateProjects = process.env.REACT_APP_UPDATE_PROJECT;
  const deleteProjects = process.env.REACT_APP_DELETE_PROJECT;
  const getDomains = process.env.REACT_APP_GET_DOMAINS;

  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  const [loader, setLoader] = React.useState(false);
  const [copen, setCOpen] = React.useState(false);
  const [edit, setEdit] = React.useState({ check: false, project: {} });
  const [projects, setProjects] = React.useState();
  const [cancel, setCancel] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [domain, setDomain] = useState([]);

  const handleCClose = (type) => setCOpen(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const dispacth = useDispatch();
  useEffect(() => {
    getAllProjects();
    handleDomain();
  }, []);

  const getAllProjects = async () => {
    try {
      const data = await axios.get(getAllProject);
      setProjects(data.data);
      console.log(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const addProject = async (e) => {
    setLoader(true);
    try {
      const res = await axios.post(createProject, e, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("authToken")
            .slice(1, localStorage.getItem("authToken").length - 1)}`,
        },
      });
      dispacth(
        setSnackBar({
          message: "Project Added Successfully",
          variant: "success",
        })
      );
      getAllProjects();
      projectFormik.resetForm();
      setLoader(false);
    } catch (e) {
      console.log(e);
      dispacth(
        setSnackBar({
          message: "Error in adding in Project",
          variant: "error",
        })
      );
      setLoader(false);
    }
    setLoader(false);
  };
  const updateProject = async (e) => {
    setLoader(true);
    try {
      const res = await axios.put(updateProjects + edit.project._id, e, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("authToken")
            .slice(1, localStorage.getItem("authToken").length - 1)}`,
        },
      });
      dispacth(
        setSnackBar({
          message: "Project Updated Successfully",
          variant: "success",
        })
      );
      setLoader(false);
      getAllProjects();
    } catch (e) {
      console.log(e);
      dispacth(
        setSnackBar({
          message: "Error in updating project",
          variant: "error",
        })
      );
      setLoader(false);
    }

    projectFormik.resetForm();
    setEdit({ check: false, project: "" });
    setCancel(false);
    setLoader(false);
  };
  const deleteProject = async () => {
    try {
      const res = await axios.delete(deleteProjects + edit.project._id, {
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("authToken")
            .slice(1, localStorage.getItem("authToken").length - 1)}`,
        },
      });
      dispacth(
        setSnackBar({
          message: "Project deleted Successfully",
          variant: "success",
        })
      );
      getAllProjects();
    } catch (e) {
      dispacth(
        setSnackBar({
          message: "Error in deleting in project",
          variant: "error",
        })
      );
      console.log(e);
    }
    setCOpen(false);
  };
  const editProject = () => {
    setCOpen(false);
    console.log(edit.project);
    projectFormik.setFieldValue("name", edit.project.name);
    projectFormik.setFieldValue("description", edit.project.description);
    projectFormik.setFieldValue("domainId", edit.project.domainId);
    projectFormik.setFieldValue("githubLink", edit.project.githubLink);
    projectFormik.setFieldValue("demoLink", edit.project.demoLink);
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
  const projectFormik = useFormik({
    initialValues: {
      name: "",
      description: "",
      domainId:"",
      githubLink: "",
      demoLink: "",
      contributors: [],
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
    updateProject(projectFormik.values);
  };
  const handleSubmit = (e) => {
    setLoader(true);
    e.preventDefault();
    addProject(projectFormik.values);
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
              {edit.check ? "Edit Project" : "Delete Project"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {edit.check
                  ? "You are about to edit this project.Modify the details in following form"
                  : "You are about to delete this project. This action is irreversible. Do you wish to proceed?"}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  setEdit({ check: false, project: "" });
                  setCOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button onClick={edit.check ? editProject : deleteProject}>
                {edit.check ? "Edit" : "Delete"}
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </div>
      <div style={{ margin: ".9rem" }}>
        <Typography
          sx={{ color: "white", marginBottom: "1rem" }}
          variant="h5"
          component="div"
        >
          Current Projects
        </Typography>

        {projects &&
          projects.map((ele) => {
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
                      {ele.name}
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
                          <span>{ele.domainId}</span>
                        </div>
                        <div>
                          <span
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              margin: "0px 5px",
                            }}
                          >
                            Github Link :{" "}
                          </span>
                          <span style={{ textAlign: "justify" }}>
                            <a href={ele.githubLink}>{ele.githubLink}</a>
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
                            Demo Link :{" "}
                          </span>
                          <span style={{ textAlign: "justify" }}>
                            <a href={ele.demoLink}>{ele.demoLink}</a>
                          </span>
                        </div>
                        <div>
                          <IconButton
                            edge="end"
                            aria-label="edit"
                            sx={{ marginRight: "0.5rem" }}
                            onClick={() => {
                              setEdit({ check: true, project: ele });
                              setCOpen(true);
                            }}
                          >
                            <EditNoteRoundedIcon />
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => {
                              setEdit({ check: false, project: ele });
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
      <div className="sub-contact-container" style={{ margin: ".9rem" }}>
        <div className="contact-head">
          <div>
            <h2>{edit.check ? "Edit Project" : "Add Project"}</h2>
            {cancel && (
              <button
                onClick={() => {
                  setEdit(false);
                  setCancel(false);
                  projectFormik.resetForm();
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
              name="name"
              onChange={projectFormik.handleChange}
              value={projectFormik.values.name}
              placeholder="Title of Project"
            />
            <textarea
              style={{ resize: "none" }}
              placeholder="Description about project"
              name="description"
              id="project-desc"
              required
              onChange={projectFormik.handleChange}
              cols={30}
              rows={7}
              value={projectFormik.values.description}
            ></textarea>
            <select
              name="domainId"
              id=""
              style={{
                height: "3rem",
                border: "0.5px solid rgb(222,222,222)",
                outline: "none",
              }}
              onChange={projectFormik.handleChange}
              value={projectFormik.values.domainId}
              required
            >
              <option hidden value="">
                Select Domain
              </option>
              {
                  domain&&domain.map((item)=>
                  {
                    return(<option value={item._id}> {item.name}</option>)
                  })
                }
            </select>
            <input
              type="text"
              id="github-link"
              required
              name="githubLink"
              onChange={projectFormik.handleChange}
              value={projectFormik.values.githubLink}
              placeholder="Github Link"
            />
            <input
              type="text"
              id="demo-link"
              required
              name="demoLink"
              onChange={projectFormik.handleChange}
              value={projectFormik.values.demoLink}
              placeholder="Demo Link"
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
                  "Add Project"
                )}
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
