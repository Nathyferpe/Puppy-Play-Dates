import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import doglineupbanner from "../assets/Global-images/doglineupbanner.jpeg";
import { useParams } from "react-router-dom";
import DogsGrid from "./GridHomePage/DogsGrid";
import EventPageEventSectionSignup from "./EventPageEventSectionSignup";
// import ButtonGetEvent from "./ButtonGetEvent";

const Events = () => {
  const [events, setEvents] = useState([]);
  const { id } = useParams();

  console.log("events", events);

  return (
    <div>
      <EventPageEventSectionSignup id={id} />
      <DogsGrid></DogsGrid>
    </div>
  );
};

const Banner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${doglineupbanner}); /* BANNER */
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
`;

const WrapperEvents = styled.div`
  display: flex;
`;

export default Events;
