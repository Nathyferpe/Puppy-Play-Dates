import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SubNav from "./SubNav";
import "./cssAuth0button.css";
import FriendProfileCard from "./FriendProfileCard";
import ButtonAddMeAsFriend from "./ButtonAddMeAsFriend";
import ButtonReject from "./ButtonReject";

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
      <div style={{ background: "#e5e1ed" }}>
        <h2 style={{ margin: "0 0 0 20px", color: "#8c7ae6" }}>
          My Furry Friends
        </h2>
        <FriendsList>
          <>
            {currentUser?.friends?.length > 0 &&
              currentUser.friends.map((friendId) => {
                return <FriendProfileCard friendId={friendId} />;
              })}
          </>
        </FriendsList>
        <h2 style={{ margin: "0 0 0 20px", color: "#8c7ae6" }}>
          New Friend Request
        </h2>
        <NewFriendRequest>
          <>
            {currentUser?.friendRequest?.length > 0 &&
              currentUser.friendRequest.map((friendId) => {
                return <FriendProfileCard friendId={friendId} />;
              })}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <ButtonAddMeAsFriend></ButtonAddMeAsFriend>
              <ButtonReject></ButtonReject>
            </div>
          </>
        </NewFriendRequest>
        <h2 style={{ margin: "0 0 0 20px", color: "#8c7ae6" }}>
          Requests Sent to
        </h2>
        <PendingFriends>
          <>
            {currentUser?.pendingFriends?.length > 0 &&
              currentUser.pendingFriends.map((friendId) => {
                return <FriendProfileCard friendId={friendId} />;
              })}
          </>
        </PendingFriends>
      </div>
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
  flex-direction: column;
  display: flex;
  align-items: center;
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
  display: flex;
  align-items: center;
`;

const FriendsImgs = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
`;

const NewFriendRequest = styled.div`
  width: 100%;
  display: flex;
`;

const PendingFriends = styled.div`
  width: 100%;
  display: flex;
`;

export default ProfilePage;
