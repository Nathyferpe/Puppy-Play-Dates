import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
// import DogsGrid from "./GridHomePage/DogsGrid";
import { Link } from "react-router-dom";
import { HomeGridContext } from "./HomeGridContext";
import eventBannerHomepage from "../assets/Global-images/eventBannerHomepage.jpg";
import PPCEvents from "../assets/Global-images/PPCEvents.png";

const HomePageEventSection = () => {
  const data = useContext(HomeGridContext);
  const [events, setEvents] = useState([]);

  // const { events, setEvents } = data;

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((json) => {
        setEvents(json.data);
      });
  }, []);

  // console.log("events", events);

  // let eventsArr = Object.entries(events);
  // console.log(eventsArr);

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
                color: "white",
                padding: "0 0 40px 0",
                display: "flex",
              }}
            >
              Puppy Play Connect Events
            </h1>
            <div
              style={{
                display: "flex",
                width: "30vw",
                flexDirection: "column",
              }}
            >
              <h2 style={{ color: "#8c7ae6" }}>
                3 Events in the upcoming days...
              </h2>

              <h2 style={{ color: "#8c7ae6", marginTop: "40px" }}>
                {/* To participate please Sign In be part of this amazing community. */}
              </h2>

              {events.map((element) => {
                console.log(element);
                console.log(element.eventName);

                return (
                  <>
                    {/* <div style={{ display: "flex", justifyContent: "row" }}> */}
                    <div
                      style={{
                        display: "flex",
                        marginTop: "40px",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <img
                        style={{ width: "100px", margin: "0 20px 10px 0" }}
                        src={PPCEvents}
                        alt="LogoEvents"
                      />
                      <h3
                        style={{
                          color: "#8c7ae6",
                          margin: "0 20px 0 10px",
                          fontSize: "40px",
                        }}
                      >
                        {element.eventName}
                      </h3>
                      <h3 style={{ color: "#fdbb01", margin: "0 20px 0 10px" }}>
                        {element.eventPlace}
                      </h3>
                      <h3 style={{ color: "#ffffff", margin: "0 20px 0 10px" }}>
                        {" "}
                        {element.eventDate}
                      </h3>
                    </div>
                    {/* </div> */}
                  </>
                );
              })}
            </div>
            <div>
              {/* <StyledNavLink to="/account"> Create Profile </StyledNavLink> */}
            </div>
          </div>
        </TextWrapper>
        {/* <Collection></Collection> */}
      </Banner>
    </div>
  );
};

const Banner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${eventBannerHomepage}); /* BANNER */
  height: 100vh;
  background-size: cover;
  background-position: center;
  /* background-attachment: fixed; */
  height: 100vh;
`;

const TextWrapper = styled.div`
  padding-top: 135px;
  padding-left: 100px;
  display: flex;
  justify-content: left;
  width: 70vw;
`;

const StyledNavLink = styled(Link)`
  background: var(--color-selective-yellow);
  border: 1px solid transparent;
  border-radius: 4px;
  font-weight: 900;
  color: #4834d4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-heading);
  font-size: 18px;
  height: 42px;
  margin: 40px 0 40px 0;
  padding: 0 60px;
  width: 300px;
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

export default HomePageEventSection;
