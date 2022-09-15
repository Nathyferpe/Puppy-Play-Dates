import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import ButtonFriendme from "./ButtonFriendMe";
import FriendProfileCard from "./FriendProfileCard";
import { HomeGridContext } from "./HomeGridContext";
import MyProfileCta from "./MyProfileCta";
import { useAuth0 } from "@auth0/auth0-react";

const ProfileFriend = () => {
  const { user, isAuthenticated } = useAuth0();
  const [currentUser, setCurrentUser] = useState([]);
  const { id } = useParams();

  //move context
  const friendId = id;
  const userId = localStorage.getItem("id");

  // const { currentUser: userId } = useContext(HomeGridContext);

  console.log({ friendId });
  console.log({ userId });
  console.log("test profile", { userId, friendId });

  //this is for the profile button:
  // const history = useHistory();
  // const { email } = useParams();

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
        console.log("data id", info.data.id);
      });
  }, []);

  console.log("friendId", id);
  console.log(currentUser.friends);
  console.log("currentUser", currentUser);

  return (
    <Container>
      <MyProfileCta userId={currentUser.id} />
      <Wrapper>
        <img src={currentUser.avatarUrl} alt="possible friend profile" />
        <p
          style={{
            fontSize: "60px",
            margin: "20px 0px",
            color: "rgb(221, 33, 107)",
            fontWeight: "900",
          }}
        >
          {currentUser.name}
        </p>
        <h3
          style={{
            color: "rgb(221, 33, 107)",
            fontSize: "20px",
          }}
        >
          {currentUser.description}
        </h3>
        <h3
          style={{
            color: "rgb(221, 33, 107)",
            fontSize: "20px",
          }}
        >
          {currentUser.name} is {currentUser.age}
        </h3>
        <h3
          style={{
            color: "rgb(221, 33, 107)",
            fontSize: "20px",
          }}
        >
          {currentUser.breed}
        </h3>
        {/* <div style={{ display: "flex", justifyContent: "center" }}>
          <button style={{ width: "200px" }}>Friend me</button>
        </div> */}
        <div>
          <ButtonFriendme friendId={friendId} userId={userId} />
        </div>
      </Wrapper>
      <div>
        <FriendsList>
          {currentUser?.friends?.length > 0 &&
            currentUser.friends.map((friendId) => {
              return <FriendProfileCard friendId={friendId} />;
            })}
        </FriendsList>
        {/* <div>{currentUser.friendRequest}</div> */}
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: #e5e1ed;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  flex-direction: column;
  color: black;
  display: flex;
  align-items: center;

  margin-top: 50px;

  & img {
    width: 500px;
    height: 500px;
    object-fit: cover;
    margin: auto;
    border-radius: 20px;
  }
`;

const FriendsList = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 10px;
  border-bottom: 2px solid var(--primary-color);
  & p {
    font-family: var(--heading-font-family);
    color: var(--primary-color);
    font-size: 1.2rem;
  }
`;

export default ProfileFriend;
