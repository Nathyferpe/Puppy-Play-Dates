import React from "react";
import GlobalStyles from "./GlobalStyles";

const ButtonReject = () => {
  return (
    <button
      style={{
        width: "200px",
        height: "45px",
        marginLeft: "20px",
        background: "red",
      }}
    >
      {" "}
      🚫 Reject Request{" "}
    </button>
  );
};

export default ButtonReject;
