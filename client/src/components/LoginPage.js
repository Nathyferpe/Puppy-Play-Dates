import React, { useContext } from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { HomeGridContext } from "./HomeGridContext";

//What do I need to do fo the login???

//When I create an account, your email and password get stored in a database.
//When I try to log in after that, I am  prompted to enter my username and my email - if they match what's in the database, I am good to go.

const LoginPage = () => {
  const data = useContext(HomeGridContext);
  ///form data dtored in Mongo
  // const formData = { email, password };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { users, setIsSignedIn, currentUser, setUsersInfo, setCurrentUser } =
    data;
  const history = useHistory();

  ///// get item by email also??

  const handleSubmit = (ev) => {
    ev.preventDefault();

    fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then
      // take user's data and update the context storesetCurrentUser(data));
      ();
  };

  const handleEmailInput = (ev) => {
    ev.preventDefault();
    setEmail(ev.target.value);
  };

  const handlePasswordInput = (ev) => {
    ev.preventDefault();
    setPassword(ev.target.value);
  };

  return (
    <DivWrapper>
      <Article>
        <Banner>
          <div className="customer-hero-content">
            <h2 style={{ color: "#8c7ae6" }}>Welcome</h2>
            <h3>Login Enjoy meeting new dogs in out organized events. </h3>
          </div>
        </Banner>
        <FormUser>
          <h2 style={{ color: "#8c7ae6", textAlign: "center" }}>
            Enter your credentials
          </h2>
          <h3 style={{ marginTop: "20px", lineHeight: "1.2" }}>
            Please enter your email and your dog name to enjoy making new
            friends.
          </h3>
          <form onSubmit={handleSubmit}>
            {/* <div ClassName="form-group">
              <label>Dog's name</label>
              <input
                // ref={name}
                type="text"
                placeholder="Enter your dog's name"
                //  onChange={handlerInput}
                onChange={(ev) => setName(ev.target.value)}
                required
              />
            </div> */}
            <div ClassName="form-group">
              <label>My Email</label>
              <input
                // ref={email}
                type="text"
                placeholder="Enter your email"
                onChange={handleEmailInput}
                onChange={(ev) => setEmail(ev.target.value)}
                required
              />
            </div>
            <div ClassName="form-group">
              <label>Password</label>
              <input
                // ref={password}
                type="text"
                placeholder="Enter your password"
                onChange={handlePasswordInput}
                onChange={(ev) => setPassword(ev.target.value)}
                required
              />
            </div>

            <button
              onSubmit={handleSubmit}
              type="submit"
              className="global-btn"
            >
              Login
            </button>
          </form>
        </FormUser>
      </Article>
    </DivWrapper>
  );
};

const DivWrapper = styled.div`
  height: 95vh;
  background: url(client/src/assets/dog-lineup-banner.jpeg) center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Article = styled.article`
  display: flex;
  justify-content: center;
`;

const FormUser = styled.div`
  border: 3px solid #ffffff;
  border-radius: 4px;
  padding: 30px;
  width: 400px;
  left: 15%;
  max-width: 25rem;
  /* position: absolute; */
  top: 3.125rem;
`;

const Banner = styled.div`
  left: 15%;
  max-width: 25rem;
  /* position: absolute; */
  top: 3.125rem;
  border: 3px solid #ffffff;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 80px;
  justify-content: center;
`;

export default LoginPage;
