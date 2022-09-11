import React, { useState, useEffect } from "react";
import GlobalStyles from "./GlobalStyles";
import { Link, useHistory } from "react-router-dom";

const SubNav = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");

  //check this in line 17... link not working...:
  // --- `/profile/${email}`--------

  return (
    <div style={{ margin: "auto" }}>
      {/* <Link
        to={`/profile/${email}`}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button style={{ width: "200px" }}>My Profile</button>
      </Link> */}
      <Link to="/events" style={{ display: "flex", justifyContent: "center" }}>
        <button to="/events" style={{ width: "200px" }}>
          Events
        </button>
      </Link>
      <Link
        to="/homegrid"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button style={{ width: "200px" }}>Add Friends</button>
      </Link>
    </div>
  );
};

export default SubNav;
