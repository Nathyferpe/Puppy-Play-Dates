import React, {useEffect, useState, useContext } from "react";
import styled from "styled-components";
// import DogsGrid from "./GridHomePage/DogsGrid";
import { Link } from "react-router-dom";
import { HomeGridContext } from "./HomeGridContext";
import eventBannerHomepage from "../assets/Global-images/eventBannerHomepage.jpg"

const HomePageEventSection = () => {
    const data = useContext(HomeGridContext);
    // const [events, setEvents] = useState([])

    const { events, setEvents } = data;

    useEffect(() => {
        fetch("/api/events")
            .then((res) => res.json())
            .then((json) => {
                setEvents(json.data);
            });
        }, []);

        console.log("events", events)

    return (
        <div>
            <Banner>
                <TextWrapper>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <h1 style={{color: "white", padding: "0 0 40px 0"}}> Puppy Play Connect Events </h1>
                    <div style={{display: 'flex', width: "40vw", flexDirection: 'column'}}>
                        <h2 style={{color: '#8c7ae6'}}>We are have organized 3 Events in the upcoming days. </h2>
                        <h3 style={{color: '#8c7ae6', marginTop: '40px'}}>To participate please Sign In be part of this amazing community.</h3>
                        <div style={{display: "flex", marginTop: '40px'}}>
                            <h3 style={{color: '#8c7ae6'}}>{events}</h3>
                            <h3 style={{color: '#8c7ae6'}}>Event 2</h3>
                            <h3 style={{color: '#8c7ae6'}}>Event 3</h3>
                        </div>
                    </div>
                    <div>
                    <StyledNavLink to="/account"> Sign In </StyledNavLink>
                    </div>
                </div>
                </TextWrapper>
            {/* <Collection></Collection> */}
            </Banner>
        </div>
    )
};

const Banner = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${eventBannerHomepage}); /* BANNER */
    height: 100vh;
    background-size: cover;
    background-position: center;
    /* background-attachment: fixed; */
    height: 100vh;
`;

const TextWrapper = styled.div`
/* border: solid #8c7ae6 5px; */
padding-top: 250px;
/* padding-bottom: 250px; */
padding-left: 100px;
display: flex;
  /* flex-wrap: wrap; */
justify-content: left;
width: 70vw;
border: white 2px solid;
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
    padding: 0 60px;
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

export default HomePageEventSection;