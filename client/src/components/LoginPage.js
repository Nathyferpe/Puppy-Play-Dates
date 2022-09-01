import React, { useContext } from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { HomeGridContext } from "./HomeGridContext";

//What do I need to do fo the login???

//When you create an account, your email and password get stored in a database.
//When you try to log in after that, you're prompted to enter your username and password - if they match what's in the database, you're good to go.

const LoginPage = () => {
  const data = useContext(HomeGridContext);
   ///form data dtored in Mongo
  const formData = { email, password };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { users, setIsSignedIn, currentUser, setUsersInfo } = data;
  const history = useHistory();

 ///// get item by email also??

    // fetch("/api/users/", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // })


    // useEffect(() => {
    //       fetch(`/api/users`)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log("user longged in");
    //     //get item by email & password?
    //     localStorage.getItem("email", email);
    //     history.push("/profile");

    //   });

    

    // const handlerInput = (ev) => {
    //   setInputValue(ev.target.value);
    // };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        
    




    }


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
              Create your dog profile
            </h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sit amet dolor sit amet nisl pulvinar condimentum. Pellentesque
              pellentesque volutpat.
            </h3>
            <form
              onSubmit={handleSubmit}
            >
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
                  // onChange={handlerInput}
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
                  // onChange={handlerInput}
                  onChange={(ev) => setPassword(ev.target.value)}
                  required
                />
              </div>
              
              <button onSubmit={handleSubmit} type="submit" className="global-btn">
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
  border: 3px solid #ebdceb;
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
  border: 3px solid #ebdceb;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 80px;
  justify-content: center;
`;


export default LoginPage;
