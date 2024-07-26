import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Userprofile.css";
import axios from "axios";
export default function UsersProfile() {
  // Hooks

  const { email } = useParams();
  const [profile, setProfile] = useState();

  // env variables

  const getUserProfileApi = process.env.REACT_APP_GET_USER_PROFILE_BY_EMAIL;

  // local varaibles

  const excludeKeys = [
    "_id",
    "createdAt",
    "updatedAt",
    "userId",
    "eventsParticipated",
    "contributions",
    "role",
    "__v",
    "projects",
  ];

  useEffect(() => {
    getUserProfile();
  }, []);

  const getUserProfile = async () => {
    try {
      const res = await axios.get(getUserProfileApi + email);
      console.log(res.data);
      setProfile(res.data);
    } catch (e) {
      console.log(e);
    }
  };

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

            <div className="profile-name">{profile && profile.name}</div>
          </div>
        </div>
        <form>
          <div className="profile-details-container">
            <div className="profile-details">
              {profile &&
                Object.entries(profile)
                  .filter(([key]) => !excludeKeys.includes(key))
                  .map(([key, value]) => {
                    return (
                      <div className="profile-details-item">
                        <div className="profile-input-field">
                          <label htmlFor="Name">{key}</label>
                          <div className="edit-inputs">{value}</div>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
