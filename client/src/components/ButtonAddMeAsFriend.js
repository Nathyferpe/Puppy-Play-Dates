import React, { useState, useContext } from "react";
import GlobalStyles from "./GlobalStyles";
import { useHistory, useParams } from "react-router-dom";
import { HomeGridContext } from "./HomeGridContext";
import { useAuth0 } from "@auth0/auth0-react";

const AddMeAsFriend = ({ userId }) => {
  const { user, isAuthenticated } = useAuth0();
  const data = useContext(HomeGridContext);
  const [AddMeAsFriendButton, setAddMeAsFriendButton] = useState(false);
  const history = useHistory();
  const [friendRequest, setFriendRequest] = useState("");
  const [pendingFriends, setPendingFriends] = useState("");
  const [friends, setFriends] = useState("");
  const [email, setEmail] = useState("");
  // const [id, setId] = useState("");
  // const friendId = id;

  const { id } = useParams();
  console.log("user Id", userId);
  // const userId = localStorage.getItem("email");

  const formData = {
    friendRequest,
    pendingFriends,
    friends,
    email,
    id,
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    console.log("I accept the new friend");

    // fetch(`/api/friends/accept/${userId}/${friendId}`, {
    //   method: "PATCH",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((info) => {
    //     setAddMeAsFriendButton(info.data);
    //     history.push(`/profile/${email}`);

    //     console.log("data", info.data);
    //     console.log(formData);
    //   });
  };

  return (
    <button
      onClick={handleClick}
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
