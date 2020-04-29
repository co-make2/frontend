import React from "react";
import PostCard from "./PostCard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

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

function PostForm({
  values,
  inputChange,
  Submiting,
  errors,
  comment,
  disabled,
}) {
  return (
    <Form onSubmit={Submiting}>
      <label>
        <Form.Label>Category: </Form.Label>
        <Select name="category" onChange={inputChange} value={values.category}>
          <Option> Select Category </Option>
          <Option value="dummyData1"> dummyData1 </Option>
          <Option value="dummyData2"> dummyData2 </Option>
          <Option value="dummyData3"> dummyData3 </Option>
          <Option value="dummyData4"> dummyData4 </Option>
        </Select>
        <p> {errors.category} </p>
      </label>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <InputTitle
          name="title"
          type="text"
          placeholder="Insert Title here!"
          onChange={inputChange}
          value={values.name}
        />
        <p> {errors.title} </p>
      </Form.Group>
      <Form.Group>
        <Form.Label>Concern</Form.Label>
        <InputTextArea
          name="text"
          placeholder="Enter your concern here!"
          onChange={inputChange}
          value={values.text}
        />
        <p> {errors.text} </p>
      </Form.Group>

      <Form.Group>
        <Form.Label>Zip Code</Form.Label>
        <InputZip
          name="zip"
          type="text"
          placeholder="Zip Code"
          onChange={inputChange}
          value={values.zip}
        />
        <p> {errors.zip} </p>
      </Form.Group>

      <label>
        <Button type="submit" disabled={disabled}>
          {" "}
          Submit Comment{" "}
        </Button>
      </label>
      <div>
        {" "}
        {comment.map((item) => {
          return (
            <PostCard
              title={item.title}
              zip={item.zip}
              category={item.category}
              text={item.text}
            />
          );
        })}
      </div>
    </Form>
  );
}

export default PostForm;
