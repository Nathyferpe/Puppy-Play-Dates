import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
// import DogsGrid from "./GridHomePage/DogsGrid";
import doglineupbanner from "../assets/Global-images/doglineupbanner.jpeg";
import { Link } from "react-router-dom";
import HomePageEventSection from "./HomePageEventSection";
import { useAuth0 } from "@auth0/auth0-react";
import { HomeGridContext } from "./HomeGridContext";

const Homepage = () => {
  const { user, isAuthenticated } = useAuth0();
  const [isfistTimeUser, setIsfirsttimeuser] = useState();
  const { authUser, setAuthUser } = useContext(HomeGridContext);

  // console.log({ user });

  useEffect(() => {
    if (isAuthenticated) {
      fetch(`/api/users/login/${user.email}`)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          if (json.data.email) {
            console.log("hello");
            localStorage.setItem("email", json.data.email);
            localStorage.setItem("id", json.data.id);
            setAuthUser(json.data);
            setIsfirsttimeuser(false);
          } else {
            setIsfirsttimeuser(true);
          }
          console.log(json.user);
        });
    }
  }, [isAuthenticated]);

  console.log("isfirsttimeuser", isfistTimeUser);

  // if isAuthenticated is true then make a fetch to the backend and check if this user exist in the database using their email

  // 1. the user exist -> show the go to my profile button
  // 2. the user does not exist -> show create profile button

  return (
    <div>
      <Banner>
        <TextWrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                color: "white",
                padding: "0 0 40px 0",
                fontSize: "50px",
              }}
            >
              Welcome to Puppy Play Connect
            </h1>
            <div style={{ display: "flex", width: "40vw" }}>
              <h2 style={{ color: "#8c7ae6" }}>
                We are a website were dogs looking to connect and have fun in
                organized events.
              </h2>
            </div>
            <div>
              {isAuthenticated && isfistTimeUser && (
                <>
                  <StyledNavLink to="/account">Create a Profile</StyledNavLink>
                </>
              )}
              {isAuthenticated && !isfistTimeUser && (
                <StyledNavLink to={`/profile/${user.email}`}>
                  My Profile
                </StyledNavLink>
              )}
            </div>
          </div>
        </TextWrapper>
        <HomePageEventSection />
      </Banner>
    </div>

    // )
  );
};

const Banner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${doglineupbanner}); /* BANNER */
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
`;

const TextWrapper = styled.div`
  /* border: solid #8c7ae6 5px; */
  padding-top: 250px;
  padding-bottom: 250px;
  padding-left: 100px;
  display: flex;
  justify-content: left;
  width: 70vw;
`;

const StyledNavLink = styled(Link)`
  background: var(--color-selective-yellow);
  border: 1px solid transparent;
  border-radius: 4px;
  color: #4834d4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-heading);
  font-size: 18px;
  height: 42px;
  margin: 40px 0 40px 0;
  /* padding: 0 60px; */
  width: 190px;
  text-decoration: none;
  transition: all ease 400ms;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:hover {
    background: var(--color-alabama-crimson);
    color: var(--color-selective-yellow);
    border-color: var(--color-selective-yellow);
  }
`;

export default Homepage;
