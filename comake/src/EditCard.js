import React, { useState, useEffect, useParams } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";

export default function EditCard() {
  const [post, setPost] = useState();
  const id = useParams();

  useEffect(() => {
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

    axiosWithAuth()
      .get(`https://comakedatabase.herokuapp.com/api/posts/${id}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return null;
}
