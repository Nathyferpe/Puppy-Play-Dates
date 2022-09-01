import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProfileFriend = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const { email } = useParams();

  //for friends
  const [friends, setFriends] = useState([])


//   useEffect(() => {
//     fetch(`/api/users/${email}`)
//         .then((res) => res.json())
//         .then((info) => {
//             setCurrentUser(info.data);
//             console.log(info);
//         });
//     }, [email]);
    
// console.log('email', email);



  return (
    <Container>
        <Wrapper>
            <img src={currentUser.avatarUrl} alt="user's profile" />
            <p>{currentUser.name}</p>
            <div style={{display: "flex", justifyContent: "center"}}>
                <button style={{width: "200px"}}>Friend me</button>
            </div>
            
        </Wrapper>  
        <div>{currentUser.friends} current user Friends </div>
    </Container>
)
  };

const Container = styled.div`
border: 2px solid purple;
width: 600px;
height: 600px;
/* border-radius: 50%; */
`;

const Wrapper = styled.div`
top: 600px;
left: 600px;
display: flex;
align-items: center;

& img {
    width:  300px;
    height: 300px;
    object-fit: cover
}
`;



export default ProfileFriend;