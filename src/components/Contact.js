import React, { useRef } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSnackBar } from "../features/snackbar/snackbar";
// import contactImage from "../assets/images/contact-image-4.jpg";
export default function Contact() {
  // Getting Environment Variables
  const psotContactForum = process.env.REACT_APP_CONTACT_FORUM;
  // Creating Hooks

  const name = useRef();
  const email = useRef();
  const message = useRef();
  const dispatch = useDispatch();

  //  Function to show Toast

  // Function to clear inputs

  const clearInputFields = () => {
    name.current.value = "";
    email.current.value = "";
    message.current.value = "";
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validateOnMount: true,

    validate: (values) => {
      let errors = {};

      if (
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          values.email
        )
      ) {
        errors.email = "Please enter valid email";
      }

      if (values.name === "") {
        errors.name = "Please enter name";
      }

      if (values.message === "") {
        errors.message = "Message requried";
      }
      return errors;
    },
  });
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formik.values);
    console.log(formik.errors);
    if (formik.errors.email) {
      dispatch(setSnackBar({ message: "Enter valid main", variant: "error" }));
    }
    if (formik.errors.message) {
      dispatch(
        setSnackBar({ message: "Enter valid message", variant: "error" })
      );
    }
    if (formik.errors.name) {
      dispatch(setSnackBar({ message: "Enter valid name", variant: "error" }));
    }
    if (!formik.errors.email && !formik.errors.message && !formik.errors.name) {
      clearInputFields();
      postContactForum(formik.values);
    }
  };

  // Function to create contact  forum

  const postContactForum = async (e) => {
    try {
      const res = await axios.post(psotContactForum, formik.values);
      console.log(res);
      dispatch(
        setSnackBar({
          message: "Successfully sent Message",
          variant: "success",
        })
      );

      clearInputFields();
    } catch (e) {
      dispatch(
        setSnackBar({ message: "Error in sending message", variant: "error" })
      );
    }
  };

  return (
    <>
      <section id="contact">
        <div className="contact-container">
          <div className="contact-visit-info">
            <div>
              <div className="visit-info">
                <h3>Visit Us</h3>
                <div className="addr-info">
                  <div className="addr"> RGKUT, RK VALLEY</div>
                  <div className="addr">IDUPULAPAYA AP</div>
                </div>
              </div>
              <div className="contact-info">
                <h3>Contact Us</h3>
                <div className="addr-info">
                  <div className="addr">+91 0123456789</div>
                  <div className="addr">+91 0123456789</div>
                  <div className="addr">lorem@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-contact-container">
            <div className="contact-head">
              <h3>Contact us</h3>
              <h4>We want to hear from you</h4>
            </div>
            <div className="contact-fields">
              <form onSubmit={handelSubmit}>
                <input
                  type="text"
                  ref={name}
                  name="name"
                  placeholder="Name"
                  onChange={formik.handleChange}
                  required
                />
                <input
                  type="email"
                  ref={email}
                  name="email"
                  placeholder="Email"
                  required
                  onChange={formik.handleChange}
                />
                <textarea
                  style={{ resize: "none" }}
                  placeholder="Enter message"
                  name="message"
                  ref={message}
                  id="desc"
                  cols={30}
                  rows={7}
                  required
                  onChange={formik.handleChange}
                ></textarea>
                <button type="submit" className="submit-message">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
