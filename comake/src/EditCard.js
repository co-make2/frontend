import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import { useParams } from "react-router-dom";
import PostForm from "./PostForm";

const EditCard = (props) => {
  const [post, setPost] = useState();
  const { id } = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`https://comakedatabase.herokuapp.com/api/posts/${id}`)
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return null;
};

export default EditCard;
