import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Userprofile.css";
export default function UsersProfile() {
  const { email } = useParams();

  const [image, setImage] = useState(null);

  return (
    <>
      <div className="profile-container">
        <div className="profile-name-img">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "3rem",
            }}
          >
            <img src={image} alt="" srcset="" />

            <div className="profile-name">{email}</div>
          </div>
        </div>
        <form>
          <div className="profile-details-container">
            <div className="profile-details">
              <div className="profile-details-item">
                <div className="profile-input-field">
                  <label htmlFor="Name">Name</label>
                  <div className="edit-inputs">Nagarjuna</div>
                </div>
              </div>
              <div className="profile-details-item">
                <div className="profile-input-field">
                  <label htmlFor="ID">ID</label>
                  <div className="edit-inputs">Nagarjuna</div>
                </div>
              </div>

              <div className="profile-details-item">
                <div className="profile-input-field">
                  <label htmlFor="Leetcode">Leetcode</label>
                  <div className="edit-inputs">Nagarjuna</div>
                </div>
              </div>

              <div className="profile-details-item">
                <div className="profile-input-field">
                  <label htmlFor="Github">Github</label>
                  <div className="edit-inputs">Nagarjuna</div>
                </div>
              </div>

              <div className="profile-details-item">
                <div className="profile-input-field">
                  <label htmlFor="Geeks for geeks">Geeks for Geeks</label>
                  <div className="edit-inputs">Nagarjuna</div>
                </div>
              </div>
              <div className="profile-details-item">
                <div className="profile-input-field">
                  <label htmlFor="Geeks for geeks">Score</label>
                  <div className="edit-inputs">Nagarjuna</div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
