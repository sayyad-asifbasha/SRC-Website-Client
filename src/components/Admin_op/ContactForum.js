import React, { useEffect, useState } from "react";
import ForumsList from "./ForumsList";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSnackBar } from "../../features/snackbar/snackbar";
export default function ContactForum() {
  // Init Reat Hooks
  const [list, setList] = useState(null);

  // Getting env variables

  const getLists = process.env.REACT_APP_GET_CONTACT_FORUM;
  const deleteContactForumApi = process.env.REACT_APP_DELETE_CONTACT_FORUM;

  const dispatch = useDispatch();

  useEffect(() => {
    getForumLists();
  }, []);
  const getForumLists = async () => {
    try {
      const res = await axios.get(getLists);
      setList(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteContactForum = async (e) => {
    console.log(e);
    try {
      const res = await axios.delete(deleteContactForumApi + e);
      console.log(res);

      dispatch(
        setSnackBar({
          message: "Deleted forum successfully",
          variant: "success",
        })
      );
      getForumLists();
    } catch (e) {
      console.log(e);
      dispatch(
        setSnackBar({ message: "Error in deleting Forum", variant: "error" })
      );
    }
  };

  return (
    <>
      <ForumsList list={list} deleteContactForum={deleteContactForum} />
    </>
  );
}
