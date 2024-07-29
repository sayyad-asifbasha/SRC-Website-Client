import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setSnackBar } from "../features/snackbar/snackbar";
export default function UserVerify() {
  const dispatch = useDispatch();
  // Env variables
  const userVerifyApi = process.env.REACT_APP_USER_VERIFICATION;
  let { authToken } = useParams();
  const handleUserVerification = async () => {
    try {
      const res = await axios.get(`${userVerifyApi + authToken}`);
      dispatch(
        setSnackBar({
          message: "Verification success. Please login",
          variant: "success",
        })
      );
    } catch (e) {
      console.log(e);
      dispatch(
        setSnackBar({
          message: "Verification failed. Try Again",
          variant: "error",
        })
      );
    }
  };
  return (
    <React.Fragment>
      <div className="user-verify-container">
        <button className="user-verify-button" onClick={handleUserVerification}>
          Verify User
        </button>
      </div>
    </React.Fragment>
  );
}
