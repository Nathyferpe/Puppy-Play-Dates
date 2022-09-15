import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { HomeGridContext } from "./HomeGridContext";

const ButtonMoreDetailsEvent = () => {
  const data = useContext(HomeGridContext);
  const history = useHistory();
  const [events, setEvents] = useState([]);
  // const [addEventButton, setAddEventButton] = useState(false);

  const { id } = useParams();
  console.log("id", id);

  console.log("events", events);

  return (
    <Link
      to={`/events/${id}`}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <button style={{ width: "100px", height: "100px", borderRadius: "50%" }}>
        Attendace
      </button>
    </Link>
  );
};

export default ButtonMoreDetailsEvent;
