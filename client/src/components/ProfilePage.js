import React, { useEffect, useState } from "react";  
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SubNav from "./SubNav";

const ProfilePage = () => {
    const [currentUser, setCurrentUser] = useState([]);
    const [friends, setFriends] = useState([]);
    const { email } = useParams();


    useEffect(() => {
        fetch(`/api/users/${email}`)
            .then((res) => res.json())
            .then((info) => {
                setCurrentUser(info.data);

                console.log("data", info.data)

                // info.data.friends.forEach((friend) => {
                //     fetch(`/api/users/${friend}`)
                //       .then((res) => res.json())
                //       .then((info) => {
                //         setFriends((prevArray) => [...prevArray, info.data]);
                //       });
                //   });
        });
    }, [email]);
        
console.log('email', email);



    return (
        <Container>
            <SubNav/>
            <Wrapper>
                <img src={currentUser.avatarUrl} alt="user's profile" />
                <p>{currentUser.name}</p>
                <p>{currentUser.description}</p>
            </Wrapper>
            <FriendsList>
            {currentUser?.friends?.length > 0 &&
                friends.map((item) => {
                    return <FriendsImgs src={item.avatarUrl} alt="Friends Profile" />;
                })}
            </FriendsList>  
        </Container>
    );
};

const Container = styled.div`
background: grey;
width: 600px;
height: 600px;
/* border-radius: 50%; */

`;

const Wrapper = styled.div`
    top: 600px;
    left: 600px;
    display: flex;
    align-items: center
`;

const FriendsList = styled.div`
position: absolute;
  top: 700px;
  left: 320px;
  display: flex;
  align-items: center;
  width: 60vw;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--primary-color);
  & p {
    font-family: var(--heading-font-family);
    color: var(--primary-color);
    font-size: 1.2rem;
  }
`;

const FriendsImgs = styled.img`
  width: var(--user-img-width);
`;

export default ProfilePage;