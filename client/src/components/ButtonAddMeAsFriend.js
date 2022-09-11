import React, { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { useHistory } from "react-router-dom";

const AddMeAsFriend = () => {
  const [AddMeButton, setAddMeButton] = useState(false);
  const history = useHistory();

  return (
    <button
      style={{
        width: "200px",
        height: "45px",
        marginLeft: "20px",
        background: "green",
      }}
    >
      {" "}
      ✅ Accept Request{" "}
    </button>
  );
};

export default AddMeAsFriend;
