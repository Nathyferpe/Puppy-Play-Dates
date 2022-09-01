import React, { useEffect, useState } from "react";  
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SubNav from "./SubNav";

const ProfilePage = () => {
    const [currentUser, setCurrentUser] = useState([]);
    const { email } = useParams();


    useEffect(() => {
        fetch(`/api/users/${email}`)
            .then((res) => res.json())
            .then((info) => {
                setCurrentUser(info.data);
                console.log(info);
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
                <p>{currentUser.description}</p>
            </Wrapper>  
            <div style= {{ background: "grey", color: "white"}}> This is a div Friends names or pic pupulating on a div </div>
        </Container>
    )
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

export default ProfilePage;