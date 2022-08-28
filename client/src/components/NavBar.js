import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PuppyPlayDateicon from "../assets/Global-images/PuppyPlayDateicon.jpg"
import { HomeGridContext } from "./HomeGridContext";

// import styled from "styled-components";

const NavBar = () => {
  const data = useContext(HomeGridContext);
  const { isSignedIn, usersInfo, currentUser } = data;
    return (
        <Wrapper>
            <Nav>
                <Link to="/">
                    <Logo></Logo>
                    </Link>
                    <Link to="/">
                        <h1 style={{textdecoration: 'none', width: 'max-content', color: 'white', margin: '0 0 0 100px'}}>Puppy Play Dates</h1>
                    </Link>
                {/* <ul className="nav-links">
                    <li>Events</li>
                    <li>About us</li>
                </ul> */}
            </Nav>
            <Nav>
            {isSignedIn ? (
        // <p>Howdy {firstName}</p>
        <StyledNavLink to={`/users/${usersInfo.name}`}>
          Welcome {currentUser.name}
        </StyledNavLink>
      ) : (
            <StyledNavLink to="/account"> Sign In </StyledNavLink>
      )}
            </Nav>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    background: var(--color-purple);
    height: 110px;
    padding: var(--padding-page);
    justify-content: center;
`;

const Logo = styled.div`
  background-image: url(${PuppyPlayDateicon});
  background-repeat: no-repeat;
  /* background-position: left center, right center; */
  background-size: contain;
  overflow: hidden;
  /* text-indent: -1000px; */
  /* margin: 0 100px 0 0 ; */
  height: 60px;
  width: 60px;
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
  color: var(--color-blueberry-soda);
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


