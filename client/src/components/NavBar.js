import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PuppyPlayConnect from "../assets/Global-images/PuppyPlayConnect.png"
import { HomeGridContext } from "./HomeGridContext";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import Homepage from "./Homepage";

// import styled from "styled-components";

const NavBar = () => {
  const data = useContext(HomeGridContext);
  // const { isSignedIn, usersInfo, currentUser } = data;
  const { user, isAuthenticated } = useAuth0();
    return (
        <Wrapper>
            <Nav>
                <Link to="/">
                    <Logo></Logo>
                    </Link>
                    <Link to="/">
                        <h1 style={{textdecoration: 'none', width: 'max-content', color: 'white', margin: '0 0 0 100px'}}>Puppy Play Connect</h1>
                    </Link>
            </Nav>
            <>
            <LoginButton/>
            <LogoutButton/>
            { isAuthenticated && ( 
            <Homepage/>  
            )}
            </>
            </Wrapper>
    
    );
};

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    background: var(--color-purple);
    height: 95px;
    padding: var(--padding-page);
    justify-content: center;
    /* position: fixed;
    top: 0;
    width: 100%; */
`;

const Logo = styled.div`
  background-image: url(${PuppyPlayConnect});
  background-repeat: no-repeat;
  /* background-position: left center, right center; */
  background-size: contain;
  overflow: hidden;
  /* text-indent: -1000px; */
  /* margin: 0 100px 0 0 ; */
  height: 90px;
  width: 90px;
  margin: 0 100px 0 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
  margin: 0 0 0 160px;
  padding: 0 60px;
  width: 100%;
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

export default NavBar;


