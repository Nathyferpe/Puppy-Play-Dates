import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const ButtonFriendme = () => {
  const [friendMeButton, setFriendMeButton] = useState(false);
  const history = useHistory();
  const { friendId, userId } = useParams();
  // const { userId } = req.params.id;
  // const { friendId } = req.params.id;
  const [friendRequest, setFriendRequest] = useState("");
  const [pendingFriends, setPendingFriends] = useState("");
  const [friends, setFriends] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const formData = {
    friendRequest,
    pendingFriends,
    friends,
    email,
    id,
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    /// userId & FriendId????

    fetch(`/api/friends/${userId}/${friendId}`, {
      method: "PATCH",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((info) => {
        setFriendMeButton(info.data);
        history.push(`/profile/${email}`);

        console.log("data", info.data);
        console.log(formData);
      });
  };

  // console.log(json.data);

  // const handleClick = () => {
  //   history.push(`/profile/${id}`);
  // };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <button style={{ width: "200px" }}>Friend me</button>
    </form>
  );
};

export default ButtonFriendme;
