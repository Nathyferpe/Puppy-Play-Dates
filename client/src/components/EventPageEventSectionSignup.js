import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HomeGridContext } from "./HomeGridContext";
import eventBannerHomepage from "../assets/Global-images/eventBannerHomepage.jpg";
import PPCEvents from "../assets/Global-images/PPCEvents.png";
import ButtonMoreDetailsEvent from "./ButtonMoreDetailsEvent";
// import eventAttendanceButton from "./ButtonMoreDetailsEvent";

const EventPageEventSectionSignup = ({ id }) => {
  const data = useContext(HomeGridContext);
  const [events, setEvents] = useState([]);

  // console.log("event id", id);

  // const { events, setEvents } = data;

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((json) => {
        setEvents(json.data);
      });
  }, []);

  return (
    <div>
      <Banner>
        <TextWrapper>
          <div
            style={{
              display: "flex",
              //   justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                color: "white",
                padding: "0 0 30px 0",
                display: "flex",
                textAlign: "left",
              }}
            >
              Puppy Play Connect Events
            </h1>
            <div
              style={{
                display: "flex",
                // width: "30vw",
                flexDirection: "column",
              }}
            >
              <h2
                style={{
                  color: "#8c7ae6",
                  marginBottom: "40px",
                }}
              >
                To participate please sign up be part of this amazing community.
              </h2>

              {events.map((element) => {
                console.log(element);
                console.log(element.eventName);

                return (
                  <>
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
                      <h3 style={{ color: "#ffffff", margin: "0 20px 0 10px" }}>
                        {" "}
                        {element.description}
                      </h3>
                      <h3
                        style={{
                          color: "#fdbb01",
                          margin: "0 20px 0 10px",
                          fontSize: "30px",
                        }}
                      >
                        {element.eventPlace}
                      </h3>
                      <h3
                        style={{
                          color: "#ffffff",
                          margin: "0 20px 0 10px",
                        }}
                      >
                        {" "}
                        {element.eventDate}
                      </h3>
                      {<ButtonMoreDetailsEvent /*id={id}*/ />}
                    </div>
                  </>
                );
              })}
            </div>
            <div></div>
          </div>
        </TextWrapper>
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

export default EventPageEventSectionSignup;
