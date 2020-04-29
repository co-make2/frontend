import React from "react";
import Card from "react-bootstrap/Card";

export default function PostCard(props) {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            {props.zip} | {props.category}{" "}
          </small>
        </Card.Footer>
      </Card>
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
    </div> */
}

{
  /* <Card>
<Card.Img variant="top" src="holder.js/100px160" />
<Card.Body>
  <Card.Title>{props.title}</Card.Title>
  <Card.Text>{props.text}</Card.Text>
</Card.Body>
<Card.Footer>
  <small className="text-muted">
    {props.zip} | {props.category}{" "}
  </small>
</Card.Footer>
</Card> */
}
