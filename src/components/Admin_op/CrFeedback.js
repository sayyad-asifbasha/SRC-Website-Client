import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import { FormControlLabel, Checkbox } from "@mui/material";
import { setSnackBar } from "../../features/snackbar/snackbar";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
export default function CrFeedback() {
  // Getting Environment Variables

  // Creating Hooks
  const dispatch = useDispatch();
  const [copen, setCOpen] = React.useState(false);
  const [edit, setEdit] = useState({ check: false, event: "" });
  const [cancel, setCancel] = useState(false);
  const handleCClose = () => setCOpen(false);

  // Function to clear inputs

  const formik = useFormik({
    initialValues: {
      id: "",
      batch: "",
      section: "",
      //   periodDetails: [
      //     { subject: "", teacher: "", period: "", isTaken: "" },
      //     { subject: "", teacher: "", period: "", isTaken: "" },
      //     { subject: "", teacher: "", period: "", isTaken: "" },
      //     { subject: "", teacher: "", period: "", isTaken: "" },
      //     { subject: "", teacher: "", period: "", isTaken: "" },
      //   ],
      period: "",
      subject: "",
      faculty: "",
      isTaken: false,
      remarks: "",
      date: dayjs(),
    },
    validateOnMount: true,
  });
  const [periodDetails, setPeriodDetails] = useState([
    { subject: "", teacher: "", period: "", isTaken: "" },
  ]);
  const handlePeriodChange = (index, event) => {
    const updatedPeriodDetails = [...periodDetails];
    updatedPeriodDetails[index][event.target.name] = event.target.value;
    formik.setFieldValue("periodDetails", updatedPeriodDetails);
  };
  const addPeriodDetail = () => {
    setPeriodDetails([
      ...periodDetails,
      { subject: "", teacher: "", period: "", isTaken: "" },
    ]);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    setCOpen(true);
    console.log(formik.values);
    console.log(formik.errors);
    // postFeedback(formik.values);
  };

  // Function to create contact  forum

  const postFeedback = async (e) => {
    try {
      const feedbackData = {
        ...formik.values,
        date: formik.values.date.format("DD/MM/YYYY"), // Format the date
      };
      const res = await axios.post("/feedback/", formik.values);
      console.log(res);
      //   console.log(feedbackData);
      dispatch(
        setSnackBar({
          message: "Successfully sent Feedback",
          variant: "success",
        })
      );

      formik.resetForm();
    } catch (e) {
      dispatch(
        setSnackBar({ message: "Error in sending Feedback", variant: "error" })
      );
    }
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
              {formik.values.taken
                ? "Are you sure class is taken"
                : "Are you sure class is not taken"}
            </DialogTitle>
            <DialogContent></DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  setCOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  postFeedback(formik.values);
                  setCOpen(false);
                }}
              >
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </div>
      <section id="contact" className="cr-feedback-container">
        <div className="sub-contact-container">
          <div className="contact-head">
            <h3>Class Feedback</h3>
            <h4>We want to hear from you</h4>
          </div>
          <div className="contact-fields">
            <form onSubmit={handelSubmit}>
              <input
                type="text"
                name="id"
                placeholder="ID"
                required
                onChange={formik.handleChange}
                value={formik.values.id}
              />

              <select
                name="batch"
                value={formik.values.batch}
                style={{
                  height: "3rem",
                  border: "0.5px solid rgb(222,222,222)",
                  outline: "none",
                }}
                onChange={formik.handleChange}
                required
              >
                <option hidden value="">
                  Select Year
                </option>
                <option value="E1">E1</option>
                <option value="E2">E2</option>
                <option value="E3">E3</option>
                <option value="E4">E4</option>
              </select>
              <select
                name="section"
                value={formik.values.section}
                style={{
                  height: "3rem",
                  border: "0.5px solid rgb(222,222,222)",
                  outline: "none",
                }}
                onChange={formik.handleChange}
                required
              >
                <option hidden value="">
                  Select Section
                </option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
              </select>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                onChange={formik.handleChange}
                value={formik.values.subject}
              />
              <input
                type="text"
                name="faculty"
                placeholder="Faculty name"
                required
                onChange={formik.handleChange}
                value={formik.values.faculty}
              />
              <input
                type="text"
                name="period"
                placeholder="EG: p1,p2,p3"
                required
                onChange={formik.handleChange}
                value={formik.values.period}
              />
              {/* {formik.values.periodDetails.map((detail, index) => (
                <div key={index}>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    onChange={(e) => handlePeriodChange(index, e)}
                    value={detail.subject}
                  />
                  <input
                    type="text"
                    name="teacher"
                    placeholder="Teacher"
                    required
                    onChange={(e) => handlePeriodChange(index, e)}
                    value={detail.teacher}
                  />
                  <input
                    type="text"
                    name="period"
                    placeholder="Period"
                    required
                    onChange={(e) => handlePeriodChange(index, e)}
                    value={detail.period}
                  />
                </div>
              ))} */}

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  name="date"
                  value={dayjs()}
                  disabled
                  renderInput={(params) => <input {...params} />}
                  format="DD MM YYYY"
                />
              </LocalizationProvider>
              <FormControlLabel
                name="taken"
                onChange={formik.handleChange}
                control={<Checkbox />}
                label="class taken"
                required
                checked={formik.values.taken}
              />
              <textarea
                style={{ resize: "none" }}
                placeholder="Remarks"
                name="remarks"
                cols={30}
                rows={7}
                onChange={formik.handleChange}
                value={formik.values.remarks}
              ></textarea>
              <button type="submit" className="submit-message">
                Send Feedback
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
