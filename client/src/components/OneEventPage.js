import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const GetOneEvent = () => {
  const [event, setEvent] = useState([]);
  const history = useHistory();
  // const [addEventButton, setAddEventButton] = useState(false);
  // const [email, setEmail] = useState("");

  const { id } = useParams();

  // const HandleSubmit = (ev) => {
  //   ev.preventDefault();

  useEffect(() => {
    console.log("hello");
    fetch(`/api/events/${id}`)
      .then((res) => res.json())
      .then((json) => {
        //   return json.data;
        // })
        // .then((data) => {
        setEvent(json.data);
      });
    // .then(() => {});
  }, []);
  // };
  console.log("id", id);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button /*onSubmit={HandleSubmit}*/ style={{ width: "200px" }}>
        More details
      </button>
    </div>
  );
};

export default GetOneEvent;
