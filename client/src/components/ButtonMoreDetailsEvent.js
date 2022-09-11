import React, { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";

const ButtonMoreDetailsEvent = () => {
  const history = useHistory();
  const [addEventButton, setAddEventButton] = useState(false);

  const { id } = useParams();

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
