import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { HomeGridContext } from "./HomeGridContext";
import { Link } from "react-router-dom";
// import SubNav from "./SubNav";


const Homegrid = () => {
  const data = useContext(HomeGridContext);
  
  // i need the users data (Coming form HomeGridContext):
  const { users } = data;
// const [users, setUsers] = useState([])

//Friends 
// const [friendIds, setFriendIds] = useState([])

// I Passed the hook to Homegrid context to have access to it:
  // useEffect(() => {
  //   fetch(`/api/users/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //         setUsers(data.data)
  //       console.log(data);
  //     });
  // }, []);


  console.log("users", users)
  return (
  <Wrapper>
      <h1>Add me to connect!</h1>
    {/* <SubNav/> */}
      <AllImages>
        {users.map((listOfUsers, idx) => (
          <li key={idx}>
            <Link to={`/users/${listOfUsers.id}`}>
              <img src={listOfUsers.avatarUrl} alt="usersProfileImages" />
              <h2>{listOfUsers.name}</h2>
              <h3>{listOfUsers.age}</h3>
            </Link>
            {/* <div style={{display: "flex", justifyContent: "center"}}>
                <button style={{width: "200px"}}>Friend me</button>
            </div> */}
          </li>
        ))}
      </AllImages>
    </Wrapper>
  )
};

const Wrapper = styled.div`
width: var(--max-content-width);
`;

const AllImages = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & li {
    padding: 2px;
  }
  & img {
    width:  300px;
    height: 300px;
    object-fit: cover;
    /* width: 400px;
    height: auto; */
    border: 1px solid var(--primary-color);
    &:hover {
      border: 4px solid var(--primary-color);
      transition: all 0.1s ease;
    }
  }
  `;


export default Homegrid;
