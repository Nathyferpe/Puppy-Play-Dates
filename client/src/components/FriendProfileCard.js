import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const FriendProfile = ({ friendId }) => {
  const history = useHistory();
  const [friend, setFriend] = useState(null);

  console.log("friendId", friendId);

  useEffect(() => {
    fetch(`/api/usersId/${friendId}`)
      .then((res) => res.json())
      .then((json) => {
        setFriend(json.data);
      });
  }, []);

  // const handleClick = () => {
  //   history.push(`/usersId/${friendId}`);
  // };

  if (friend) {
    return (
      <>
        <UserFrame /*onClick={() => handleClick()}*/>
          {/* <div>hello</div> */}
          <UserImg src={friend.avatarUrl} />
          <NameDisplay>{friend.name}</NameDisplay>
        </UserFrame>
      </>
    );
  }

  return <div>Loading...</div>;
};

const NameDisplay = styled.span`
  font-family: sans-serif;
  font-size: 25px;
  display: flex;
  justify-content: center;
  width: 100%;
  opacity: 0.7;
  padding: 2px;
  color: #4834d4;
  font-weight: 900;
`;

const UserFrame = styled.span`
  margin: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 1px lightgray;
  transition: 0.6s;
  &:hover {
    box-shadow: 0px 0px 3px 3px #8c7ae6;
  }
`;

const UserImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: auto;
  border-radius: 20px;
`;

export default FriendProfile;
