import React, { useState, useEffect } from "react";
import "./App.css";
import PostForm from "./PostForm";
import * as yup from "yup";
import axios from "axios";

const initialForm = {
  title: "",
  text: "",
  zip: "",
  category: "",
};

const initialErrorForm = {
  title: "",
  text: "",
  zip: "",
  category: "",
};
//form validation
const formSchema = yup.object().shape({
  title: yup.string().required("Must insert a title!"),
  text: yup.string().required("Must insert a comment!"),
  zip: yup
    .number()
    .typeError("zip must be a number")
    .positive("zip must be greater than zero")
    .required("zip is required")
    .max(5),
  category: yup.string().required("Please select a category"),
});

function App() {
  //setting state for form
  const [form, setForm] = useState(initialForm);
  //for comments that will be added
  const [comment, setComment] = useState([]);
  //for erros
  const [errors, setErrors] = useState(initialErrorForm);
  //for state of button
  // const [formDisabled, setFormDisabled] = useState(true);

  // //making form disabled untill all requirments are done
  // useEffect(() => {
  //   formSchema.isValid(form).then((valid) => {
  //     setFormDisabled(!valid);
  //   });
  // }, [form]);

  //onChange Handeler
  const Changing = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    yup
      .reach(formSchema, name)
      .validate((value) => {
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
  const url = "https://reqres.in/api/users";

  // axios.get(url).then((res) => {
  //   console.log(res);
  // });

  //Making a function that goes to the axios and sets the wanted data to Comment
  const getComment = () => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.data);
        setComment([...comment, res.data.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //making that funciton only run once when the page is updated
  useEffect(() => {
    getComment();
  }, []);
  // Adding a comment to the url and setting your array of comments to that
  //url PLUS adding the new data its getting
  const postComment = (e) => {
    axios
      .post(url, form)
      .then((res) => {
        setComment([...comment, res.data]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //submit handeler
  const Submiting = (event) => {
    event.preventDefault();

    const newComment = {
      title: form.title,
      text: form.text,
      zip: form.zip,
      category: form.category,
    };
    //posting the comment to the api and rendering
    postComment(newComment);
    //making it blank again
    setForm(initialForm);
  };

  return (
    <div className="App">
      <PostForm
        inputChange={Changing}
        Submiting={Submiting}
        values={form}
        comment={comment}
        errors={errors}
      />
    </div>
  );
}

export default App;
