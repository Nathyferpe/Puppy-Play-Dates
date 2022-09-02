import React, { useEffect, useState } from "react";  
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SubNav from "./SubNav";
import "./cssAuth0button.css";


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

                info.data.friends.forEach((friend) => {
                    console.log("friends of the user" , info.data.friends);
                    // console.log("friends", friends);
                    fetch(`/api/users/${friends}`)
                        .then((res) => res.json())
                        .then((info) => {
                            setFriends((prevArray) => [...prevArray, info.data]);
                        });
                    });
            });
    }, [email]);
        
console.log('email', email);



    return (
        <>
        <Container>
            <SubNav/>
            <Wrapper>
                <img src={currentUser.avatarUrl} alt="user's profile" />
                <p style={{fontSize: '50px' , margin: '20px 0 20px 0', fontsize: '5px', color: '#dd216b', fontWeight: '900'}}>{currentUser.name}</p>
                <p className="description-user">{currentUser.description}</p>
            </Wrapper>
        </Container>
          <FriendsList>
          {currentUser?.friends?.length > 0 &&
              friends.map((item) => {
                  return <FriendsImgs src={item.avatarUrl} alt="Friends Picture" />;
              })}
          </FriendsList> 
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
        width:  500px;
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
   width:  500px;
        height: 500px;
        object-fit: cover;
`;

export default ProfilePage;