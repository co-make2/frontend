import React from "react";

function CommentForm({
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
      </label>

      <label>
        <textarea
          name="text"
          placeholder="Enter your concern here!"
          onChange={inputChange}
          value={values.text}
        />
      </label>
      <label>
        <input
          name="zip"
          type="number"
          placeholder="Zip Code"
          onChange={inputChange}
          value={values.zip}
        />
      </label>
      <label>
        <select name="category" onChange={inputChange} value={values.category}>
          <option value="dummyData1"> dummyData1 </option>
          <option value="dummyData2"> dummyData2 </option>
          <option value="dummyData3"> dummyData3 </option>
          <option value="dummyData4"> dummyData4 </option>
        </select>
      </label>
      <label>
        <button type="submit"> Submit Comment </button>
      </label>
      <div>
        {" "}
        {comment.map((item) => {
          return (
            <div>
              <h2>{item.first_name} </h2>
              <h2>{item.title} </h2>
              <h3>{item.zip}</h3>
              <h3>{item.category}</h3>
              <h3>{item.text}</h3>
            </div>
          );
        })}
      </div>
    </form>
  );
}

export default CommentForm;
