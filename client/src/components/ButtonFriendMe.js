import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { HomeGridContext } from "./HomeGridContext";
import { useAuth0 } from "@auth0/auth0-react";

const ButtonFriendme = ({ userId, friendId }) => {
  const [friendMeButton, setFriendMeButton] = useState(false);
  // const [currentUser, setCurrentUser] = useState([]);
  const history = useHistory();
  const data = useContext(HomeGridContext);
  const { user, isAuthenticated } = useAuth0();

  console.log("test button", { userId, friendId });
  const { id } = useParams();
  console.log("friendId", id);
  console.log("user Id", userId);
  const { authUser } = data;
  console.log("test authUser", authUser);
  // const friendId = id;
  // console.log("friendId", friendId);

  const [friendRequest, setFriendRequest] = useState("");
  const [pendingFriends, setPendingFriends] = useState("");
  const [friends, setFriends] = useState("");
  const [email, setEmail] = useState("");
  // const [id, setId] = useState("");

  const formData = {
    friendRequest,
    pendingFriends,
    friends,
    email,
    id,
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    console.log("It's Britney b....");

    // history.push(`/profile/${email}`);

    /// userId & friendId????

    // fetch(`/api/friends/${userId}/${friendId}`, {
    //   method: "PATCH",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((info) => {
    //     setFriendMeButton(info.data);
    //     // history.push(`/profile/${email}`);

    //     console.log("data", info.data);
    //     console.log(formData);
    //   });
  };

  // console.log(json.data);

  return (
    <div
      onSubmit={handleClick}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <button onClick={handleClick} style={{ width: "200px" }}>
        Friend me
      </button>
    </div>
  );
};

export default ButtonFriendme;
