import React from "react";
import styled from "styled-components";
// import DogsGrid from "./GridHomePage/DogsGrid";
import doglineupbanner from "../assets/Global-images/doglineupbanner.jpeg"

const Homepage = () => {
    return (
        <div>
            <Banner>
            <h1 style={{textAlign: 'center'}}> This is the H1 title in the banner </h1>
            {/* <Collection></Collection> */}
            </Banner>
        </div>
    )
};

const Banner = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${doglineupbanner}); /* BANNER */
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 100vh;
`;

// const Collection = styled.div`
//   position: relative;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   width: 70vw;
//   margin-top: 20px;
// `;

export default Homepage;