import React from "react";
import PostCard from "./PostCard";

function PostForm({
  values,
  inputChange,
  Submiting,
  errors,
  comment,
  disabled,
}) {
  return (
    <form onSubmit={Submiting}>
      <label>
        <input
          name="title"
          type="text"
          placeholder="Insert Title here!"
          onChange={inputChange}
          value={values.name}
        />
        <p> {errors.title} </p>
      </label>

      <label>
        <textarea
          name="text"
          placeholder="Enter your concern here!"
          onChange={inputChange}
          value={values.text}
        />
        <p> {errors.text} </p>
      </label>
      <label>
        <input
          name="zip"
          type="text"
          placeholder="Zip Code"
          onChange={inputChange}
          value={values.zip}
        />
        <p> {errors.zip} </p>
      </label>
      <label>
        <select name="category" onChange={inputChange} value={values.category}>
          <option value="dummyData1"> dummyData1 </option>
          <option value="dummyData2"> dummyData2 </option>
          <option value="dummyData3"> dummyData3 </option>
          <option value="dummyData4"> dummyData4 </option>
        </select>
        <p> {errors.category} </p>
      </label>
      <label>
        <button type="submit" disabled={disabled}>
          {" "}
          Submit Comment{" "}
        </button>
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
    </form>
  );
}

export default PostForm;
