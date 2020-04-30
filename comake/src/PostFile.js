import React, { useState, useEffect } from "react";
import "./App.css";
import PostForm from "./PostForm";
import * as yup from "yup";
import axios from "axios";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import { connect } from "react-redux";
// import {editAction} from "./actions/EditAction";


const initialForm = {
  post_title: "",
  post_text: "",
  post_zip: "",
  post_category: "",
};

const initialErrorForm = {
  post_title: "",
  post_text: "",
  post_zip: "",
  post_category: "",
};
//form validation
const formSchema = yup.object().shape({
  post_title: yup.string().required("Must have a title"),
  post_text: yup.string().required("Must insert a comment!"),
  post_zip: yup
    .string()
    .required("Must enter zip")
    .max(5, "Zip code can not exceed 5 digits")
    .min(5, "Must be 5 digits long"),
  post_category: yup.string().required("Please select a category"),
});

function PostFile(props) {
  console.log(props.banana)
  //setting state for form
  const [form, setForm] = useState(initialForm);
  //for comments that will be added
  const [post, setPost] = useState([]);
  //for erros
  const [errors, setErrors] = useState(initialErrorForm);
  //for state of button
  const [formDisabled, setFormDisabled] = useState(true);

  //making form disabled untill all requirments are done
  useEffect(() => {
    formSchema.isValid(form).then((valid) => {
      setFormDisabled(!valid);
    });
  }, [form]);

  //onChange Handeler
  const Changing = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });

    setForm({
      ...form,
      [name]: value,
    });
  };
  // setting up the axios post and submit handeler

  //dummy axios url
  const url = "https://comakedatabase.herokuapp.com/api/posts";

  //Making a function that goes to the axios and sets the wanted data to Comment
  const getPost = () => {
    axiosWithAuth()
      .get(url)
      .then((res) => {
        console.log(res.data)
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(post);
  //making that funciton only run once when the page is updated
  useEffect(() => {
    getPost();
  }, []);
  // Adding a comment to the url and setting your array of comments to that
  //url PLUS adding the new data its getting
  const postingPost = (event) => {
    axiosWithAuth()
      .post(url, event)
      .then((res) => {
        console.log(res);
        setPost([...post, res.data]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //submit handeler
  const Submiting = (event) => {
    event.preventDefault();

    const newPost = {
      user_id: "L76pkeUau",
      title: form.post_title,
      text: form.post_text,
      zip: form.post_zip,
      category_id: form.post_category,
    };
    //posting the comment to the api and rendering
    postingPost(newPost);
    //making it blank again
    setForm(initialForm);
  };
  return (
    <PostForm
      inputChange={Changing}
      Submiting={Submiting}
      values={form}
      post={post}
      errors={errors}
      disabled={formDisabled}
    />
  );
}

const mapStateToProps = state => {
  return {
      banana: state.id
  }
}

export default connect(mapStateToProps, {})(PostFile)
