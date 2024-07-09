import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import "../styles/Userprofile.css";
import userImg from "../assets/images/contact-image-3.jpg";
export default function UserProfile() {
  const { username } = useParams();
  const [icon, setIcon] = useState(true);
  const edit = (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll(".edit-inputs");
    const editBtn = document.getElementById("edit-btn");
    inputs.forEach((element) => {
      if (element.disabled) {
        element.disabled = false;
        element.style.cursor = "text";
        setIcon(false);
        element.style.border = "1px solid rgb(192, 191, 191";
      } else {
        element.disabled = true;
        element.style.border = "none";
        element.style.cursor = "not-allowed";
        setIcon(true);
      }
    });
  };

  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const upload = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      <div className="profile-container">
        <div className="profile-name-img">
          <div>
            <img src={image} alt="" srcset="" />
            <div className="edit-profile-pic" onClick={upload}>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="profile-edit-camera"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.586 3a2 2 0 0 1 2.828 0L21 5.586a2 2 0 0 1 0 2.828L19.414 10 14 4.586 15.586 3zm-3 3-9 9A2 2 0 0 0 3 16.414V19a2 2 0 0 0 2 2h2.586A2 2 0 0 0 9 20.414l9-9L12.586 6z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="profile-name">{username}</div>
          <div className="profile-score">
            <div>Score</div>
            <div>992</div>
          </div>
        </div>
        <form>
          <div className="profile-details-container">
            <div className="profile-details">
              <div className="edit-icon">
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  accept="image/*"
                />
                <button onClick={edit} id="edit-btn">
                  {icon ? (
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      id="edit-icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15.586 3a2 2 0 0 1 2.828 0L21 5.586a2 2 0 0 1 0 2.828L19.414 10 14 4.586 15.586 3zm-3 3-9 9A2 2 0 0 0 3 16.414V19a2 2 0 0 0 2 2h2.586A2 2 0 0 0 9 20.414l9-9L12.586 6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  ) : (
                    "Save"
                  )}
                </button>
              </div>

              <div className="profile-details-item">
                <div className="profile-input-field">
                  <label htmlFor="Name">Name</label>
                  <input type="text" className="edit-inputs" />
                </div>
              </div>
              <div className="profile-details-item">
                <div className="profile-input-field">
                  <label htmlFor="ID">ID</label>
                  <input type="text" className="edit-inputs" />
                </div>
              </div>

              <div className="profile-details-item">
                <div className="profile-input-field">
                  <label htmlFor="Gender">Gender</label>
                  <input type="text" className="edit-inputs" />
                </div>
              </div>

              <div className="profile-details-item">
                <div className="profile-input-field">
                  <label htmlFor="Leetcode">Leetcode</label>
                  <input type="text" className="edit-inputs" />
                </div>
              </div>

              <div className="profile-details-item">
                <div className="profile-input-field">
                  <label htmlFor="Github">Github</label>
                  <input type="text" className="edit-inputs" />
                </div>
              </div>

              <div className="profile-details-item">
                <div className="profile-input-field">
                  <label htmlFor="Geeks for geeks">Geeks for Geeks</label>
                  <input type="text" className="edit-inputs" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
