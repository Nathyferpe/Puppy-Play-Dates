import React, { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { Link, useHistory, useParams } from "react-router-dom";

const MyProfileCta = () => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState([]);
  const { email } = useParams();

  // const [email, setEmail] = useState("");

  //check this in line 17... link not working...:
  // --- `/profile/${email}`--------

  return (
    <div style={{ margin: "auto", display: "flex" }}>
      <Link
        to={`/profile/${email}`}
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <button style={{ width: "200px", background: "#8c7ae6" }}>
          My Profile
        </button>
      </Link>
      <Link
        to="/events"
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <button to="/events" style={{ width: "200px", background: "#8c7ae6" }}>
          Events
        </button>
      </Link>
      <Link
        to="/homegrid"
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <button style={{ width: "200px", background: "#8c7ae6" }}>
          Add Friends
        </button>
      </Link>
    </div>
  );
};

export default MyProfileCta;
