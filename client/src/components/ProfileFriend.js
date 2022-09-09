import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ButtonFriendme from "./ButtonFriendMe";
import FriendProfileCard from "./FriendProfileCard";

const ProfileFriend = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const { id } = useParams();

  //for friends
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    console.log("hello");
    fetch(`/api/usersId/${id}`)
      .then((res) => res.json())
      .then((info) => {
        setCurrentUser(info.data);

        console.log("data", info.data);
        console.log("info", info);
      });
  }, []);

  console.log("id", id);
  console.log(currentUser.friends);
  console.log("currentUser", currentUser);

  return (
    <Container>
      <Wrapper>
        <img src={currentUser.avatarUrl} alt="possible friend profile" />
        <p
          style={{
            fontSize: "50px",
            margin: "20px 0px",
            color: "rgb(221, 33, 107)",
            fontweight: "900",
          }}
        >
          {currentUser.name}
        </p>
        {/* <div style={{ display: "flex", justifyContent: "center" }}>
          <button style={{ width: "200px" }}>Friend me</button>
        </div> */}
        <div>
          <ButtonFriendme />
        </div>
      </Wrapper>
      <div>
        <FriendsList>
          {/* <FriendProfile /> */}
          {currentUser?.friends?.length > 0 &&
            currentUser.friends.map((friendId) => {
              return <FriendProfileCard friendId={friendId} />;
            })}
        </FriendsList>
        <div>{currentUser.friendRequest}</div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: #e5e1ed;
  display: flex;
  flex-direction: column;
  /* border: 2px solid purple;
  width: 600px;
  height: 600px; */
  /* border-radius: 50%; */
`;

const Wrapper = styled.div`
  flex-direction: column;
  color: black;
  display: flex;
  align-items: center;
  /* top: 600px;
  left: 600px;
  display: flex;
  align-items: center; */
  margin-top: 50px;
  /* margin-right: auto; */

  & img {
    width: 500px;
    height: 500px;
    object-fit: cover;
    margin: auto;
    border-radius: 20px;
  }
`;

const FriendsList = styled.div`
  /* background-color: grey; */
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 60vw; */
  padding-bottom: 10px;
  border-bottom: 2px solid var(--primary-color);
  & p {
    font-family: var(--heading-font-family);
    color: var(--primary-color);
    font-size: 1.2rem;
  }
`;

export default ProfileFriend;
