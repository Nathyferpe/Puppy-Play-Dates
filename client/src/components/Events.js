import React from "react";
import styled from "styled-components";
import doglineupbanner from "../assets/Global-images/doglineupbanner.jpeg"

const Events = () => {
    return (
        <div>
            
        <Banner>
        <h1 style={{textAlign: 'center',  color: "white", padding: "80px 0 100px 0"}}> Events</h1>
        <h2 style={{textAlign: 'left',  color: "white", padding: "40px 0 40px 40px"}}>Upcoming events...</h2>
            <WrapperEvents>
            <img></img>
            </WrapperEvents>
        </Banner>
            
        </div>
    )
};

const Banner = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${doglineupbanner}); /* BANNER */
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