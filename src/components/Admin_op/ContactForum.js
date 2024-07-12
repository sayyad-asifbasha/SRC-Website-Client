import React, { useEffect, useState } from "react";
import ForumsList from "./ForumsList";
import axios from "axios";
export default function ContactForum() {
  // Init Reat Hooks
  const [list, setList] = useState(null);

  // Getting env variables

  const getLists = process.env.REACT_APP_GET_CONTACT_FORUM;

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
  return (
    <>
      <ForumsList list={list} />
    </>
  );
}
