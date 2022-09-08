import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const ButtonFriendme = () => {
  const [friendMeButton, setFriendmeButton] = useState(false);
  const history = useHistory();
  const { friendId, userId } = useParams();

  /// userId & FriendId????

  useEffect(() => {
    fetch(`/api/friends/${userId}/${friendId}`)
      .then((res) => res.json())
      .then((json) => {
        return json.data;
      })
      .then((data) => {
        setFriendmeButton(data);
      })
      .then(() => {});
  }, []);

  // const handleClick = () => {
  //   history.push(`/profile/${id}`);
  // };

  console.log("friendId", friendId);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button style={{ width: "200px" }}>Friend me</button>
    </div>
  );
};

export default ButtonFriendme;
