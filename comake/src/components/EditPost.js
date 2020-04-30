import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

 export const Edit = props => {
    const [post, setPost] = useState({
        post_id: '',
        post_category: '',
        post_title: '',
        post_text: '',
        post_zip: '',
    })
    const [newPost, setNewPost] = useState({
      category_id: '',
      title: '',
      text: '',
      zip: '',
  })
    const params = useParams();
    const { id } = useParams();

    useEffect(() => {
        axiosWithAuth().get(`https://comakedatabase.herokuapp.com/api/posts/${id}`)
        .then(response => {
            console.log(response.data)
            setPost(response.data)
        })
    }, [])

    const inputChange = (event) => {
      // event.preventDefault();
      console.log("Current Post:", post)
        setPost({
            ...post,
            [event.target.name]: event.target.value
            
        })
    }

    const newInputChange = (event) => {
      // event.preventDefault();
      console.log("New Post:", newPost)
        setNewPost({
            ...newPost,
            [event.target.name]: event.target.value
            
        })
    }

    const Option = styled.option`
  color: blue;
  background-color: rgb(232, 240, 254);
  border-color: lightblue;
  height: 100px;
`;
const Select = styled.select`
  color: Grey;
  background-color: rgb(232, 240, 254);
  border-color: lightblue;
  height: 40px;
`;

const InputTitle = styled.input`
  display: block;
  width: 50%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin: 0 auto;
`;

const InputTextArea = styled.textarea`
  display: block;
  width: 50%;
  height: 150px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin: 0 auto;
`;
const InputZip = styled.input`
  display: block;
  width: 15%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin: 0 auto;
`;

const updateForm = (post) => {

  const newObj = {
      category_id: post.post_category,
      title: post.post_title,
      text: post.post_title,
      zip: post.post_zip,
  }
  axiosWithAuth().put(`https://comakedatabase.herokuapp.com/api/posts/${id}`, newObj)
  .then(response => {
    console.log(response)
  })
}

const deletePost = () => {
  axiosWithAuth().delete(`https://comakedatabase.herokuapp.com/api/posts/${id}`)
  .then(response => {
    props.history.push("/posts");
  })
  
}

    return (
        <Form>
      <label>
        <Form.Label>Category: </Form.Label>
        <Select
          name="post_category"
          id="post_category"
          onChange={inputChange}
          value={post.post_category}
        >
          <Option> Select Category </Option>
          <Option value="1"> dummyData1 </Option>
          <Option value="2"> dummyData2 </Option>
          <Option value="3"> dummyData3 </Option>
          <Option value="4"> dummyData4 </Option>
        </Select>
      </label>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <input
          name="post_title"
          id="post_title"
          type="text"
          placeholder="Insert Title here!"
          onChange={inputChange}
          value={post.post_title}
        />
        <p> {post.post_title} </p>
      </Form.Group>
      <Form.Group>
        <Form.Label>Concern</Form.Label>
        <textarea
          name="post_text"
          placeholder="Enter your concern here!"
          onChange={inputChange}
          value={post.post_text}
        />
        
      </Form.Group>

      <Form.Group>
        <Form.Label>Zip Code</Form.Label>
        <InputZip
          name="post_zip"
          type="text"
          placeholder="Zip Code"
          onChange={inputChange}
          value={post.post_zip}
        />
        
      </Form.Group>

      <label>
        <Button onClick={(event) => {
          event.preventDefault();
          updateForm(post)}}>
          {" "}
          Submit Update{" "}
        </Button>
        <Button onClick={deletePost}>
          Delete Post
        </Button>
      </label>
      </Form>

    )

}