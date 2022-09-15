import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

const GetOneEvent = ({ id }) => {
  const [event, setEvent] = useState([]);
  const history = useHistory();
  // const [addEventButton, setAddEventButton] = useState(false);
  // const [email, setEmail] = useState("");

  // const { id } = useParams();

  // const HandleSubmit = (ev) => {
  //   ev.preventDefault();

  useEffect(() => {
    console.log("hello");
    fetch(`/api/events/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setEvent(json.data);
      });
  }, []);
  console.log("id", id);
  console.log("event", event);
  console.log("event name", event.eventName);

  // if (event) {
  return (
    <>
      <UserFrame src={event.eventName}>hello</UserFrame>
    </>
  );
  // }
};

const UserFrame = styled.div`
  color: pink;
  background-color: black;
  font-size: 20px;
  margin: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 1px lightgray;
  transition: 0.6s;
  &:hover {
    box-shadow: 0px 0px 3px 3px #8c7ae6;
  }
`;

// const UserImg = styled.img`
//   width: 200px;
//   height: 200px;
//   object-fit: cover;
//   margin: auto;
//   border-radius: 20px;
// `;

export default GetOneEvent;
