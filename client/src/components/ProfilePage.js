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
          <p className="description-user">{currentUser.age}</p>
        </Wrapper>
      </Container>
      <div style={{}}>
        <h2 style={{ color: "#8c7ae6", display: "flex", marginTop: "60px" }}>
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
        <h2 style={{ color: "#8c7ae6", marginTop: "40px", display: "flex" }}>
          New Friend Request
        </h2>
        <NewFriendRequest>
          <>
            {currentUser?.friendRequest?.length > 0 && (
              <>
                {currentUser.friendRequest.map((friendId) => {
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
            )}
          </>
        </NewFriendRequest>
        <h2 style={{ color: "#8c7ae6", display: "flex", marginTop: "40px" }}>
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
  /* background: #e5e1ed; */
  display: flex;
  /* margin-bottom: 40px; */
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
    box-shadow: 0px 0px 10px 1px lightgray;
    transition: 0.6s;
    &:hover {
      box-shadow: 0px 0px 3px 3px #8c7ae6;
    }
  }
`;

const FriendsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  /* border: 2px solid white; */
`;

const FriendsImgs = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
`;

const NewFriendRequest = styled.div`
  width: 100%;
  display: flex;
  height: 250px;
  /* border: 2px solid white; */
  justify-content: center;
`;

const PendingFriends = styled.div`
  width: 100%;
  display: flex;
  height: 250px;
  /* border: 2px solid white; */
  justify-content: center;
`;

export default ProfilePage;
