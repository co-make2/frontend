import React from "react";

export default function PostCard(props) {
  return (
    <div>
      <div>
        <h1>{props.title} </h1>
      </div>
      <h3> Zip Code: {props.zip} </h3>
      <h3>Category: {props.category}</h3>
      <div> Issue : {props.text} </div>
    </div>
  );
}

{
  /* <div>
  <div>
    <h1>{props.title} </h1>
  </div>
  <h3> Zip Code: {props.zip} </h3>
  <h3>Category: {props.category}</h3>
  <div> Issue : {props.text} </div>
</div>; */
}
