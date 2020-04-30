import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import { connect } from "react-redux";
import {editAction} from "./actions/EditAction"


const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 75%;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin: 5% auto;
`;

export default function PostCard(props) {
  const [upVote, setupVote] = useState(props.upvotes);


  return (
    <div>
      <Wrapper>
        <Card.Img variant="top" src="holder.js/100px160" />
        <p>Upvotes:{props.upvotes} </p>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Zip: {props.zip} | Category: {props.category}{" "}
          </small>
          <Button onClick={() => props.add(props.id)}>Upvote Post</Button>
        </Card.Footer>
      </Wrapper>
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


//make a useeffect that has a GET request to specific post id. post/:id
//set those values to state
//

export default connect(null, {editAction})(PostCard)

