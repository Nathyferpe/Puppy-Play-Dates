import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SubNav from "./SubNav";
import "./cssAuth0button.css";
import FriendProfileCard from "./FriendProfileCard";

const ProfilePage = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const [friends, setFriends] = useState([]);
  const { email } = useParams();

  useEffect(() => {
    fetch(`/api/users/${email}`)
      .then((res) => res.json())
      .then((info) => {
        setCurrentUser(info.data);
        console.log(info);

        console.log("data", info.data);
      });
  }, [email]);

  // const handleClick = () => {
  //   history.push(`/profile/${email}`);
  // };

  console.log("email", email);

  // console.log(currentUser.friendRquest);

  return (
    <>
      <Container>
        <SubNav />
        <Wrapper>
          <img src={currentUser.avatarUrl} alt="user's profile" />
          <p
            style={{
              fontSize: "50px",
              margin: "20px 0 20px 0",
              fontsize: "5px",
              color: "#dd216b",
              fontWeight: "900",
            }}
          >
            {currentUser.name}
          </p>
          <p className="description-user">{currentUser.description}</p>
          {/* <p>
            {currentUser.friendRequest.map((item) => {
              console.log("item", item);
            })}
          </p> */}
        </Wrapper>
      </Container>
      <FriendsList>
        <>
          {currentUser?.friends?.length > 0 &&
            currentUser.friends.map((friendId) => {
              return <FriendProfileCard friendId={friendId} />;
            })}
        </>
      </FriendsList>
      <FriendRequest>
        <div>{currentUser.friendRequest}</div>
      </FriendRequest>
    </>
  );
};

const Container = styled.div`
  background: #e5e1ed;
  display: flex;
  /* width: 600px; */
  /* height: 600px; */
  /* border-radius: 50%; */
`;

const Wrapper = styled.div`
  /* top: 600px; */
  /* margin-left: 40px; */
  /* left: 600px; */
  flex-direction: column;
  display: flex;
  align-items: center;
  /* margin-left: auto; */
  margin-top: 50px;
  margin-right: auto;

  & img {
    width: 500px;
    height: 500px;
    object-fit: cover;
    margin: auto;
    border-radius: 20px;
  }
`;

const FriendsList = styled.div`
  /* position: absolute; */
  top: 700px;
  left: 320px;
  display: flex;
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

const FriendsImgs = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
`;

const FriendRequest = styled.div`
  width: 100%;
  display: flex;
`;

export default ProfilePage;
