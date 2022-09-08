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

  // console.log(id);
  // return <div>{id}</div>;

  // const handleClick = () => {
  //   history.push(`/profile/${id}`);
  // };

  if (friend) {
    return (
      <>
        <UserFrame /*onClick={() => handleClick()}*/>
          <div>hello</div>
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
  font-size: 15px;
  margin-top: -18px;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #ffffff;
  opacity: 0.7;
`;

const UserFrame = styled.span`
  margin: 10px;
  height: 120px;
  width: 120px;
  /* box-shadow: 0px 0px 10px 1px lightgray; */
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 2px 2px var(--primary-color);
  }
`;

const UserImg = styled.img`
  height: 100%;
  width: auto;
`;

export default FriendProfile;
