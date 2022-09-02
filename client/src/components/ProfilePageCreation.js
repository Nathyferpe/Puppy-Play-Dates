import React from "react";
import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const ProfilePageCreation = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [breed, setBreed] = useState("");
  const [password, setPassword] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  
  const formData = { name, age, email, breed, description, avatarUrl, password };

  const history = useHistory();

  const handleSubmit = (ev) => {
    ev.preventDefault();
 

    fetch("/api/users/", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log("user longged in");
        localStorage.setItem("email", email);
        history.push(`/profile/${email}`);

      });

  };

  return (
    // <h1 style={{textAlign: 'center'}}> Events - Puppy Play Dates</h1>
    <div>
      <DivWrapper>
        <Article>
          <Banner>
            <div className="customer-hero-content">
              <h2 style={{ color: "#8c7ae6" }}>Welcome</h2>
              <h3>Join the awesome group of Puppy Play Dates </h3>
            </div>
          </Banner>
          <FormUser>
            <h2 style={{ color: "#8c7ae6", textAlign: "center" }}>
              Create your dog profile
            </h2>
            <h3>
              Please create the Profile of your dog. We are waiting to connect with you. You have to sign up or login to be able to create your dog's profile. Click on the "Sign In" button and then you are ready to make new friends.
            </h3>
            <form
              onSubmit={handleSubmit}
            >
              <div ClassName="form-group">
                <label>Dog's name</label>
                <input
                  type="text"
                  ClassName="form-control"
                  placeholder="Enter your dog's name"
                  onChange={(ev) => setName(ev.target.value)}
                  required
                />
              </div>
              <div ClassName="form-group">
                <label>My Email</label>
                <input
                  type="text"
                  ClassName="form-control"
                  placeholder="Enter your email"
                  onChange={(ev) => setEmail(ev.target.value)}
                  required
                />
              </div>
              {/* <div ClassName="form-group">
                <label>Password</label>
                <input
                  type="text"
                  ClassName="form-control"
                  placeholder="Enter your password"
                  onChange={(ev) => setPassword(ev.target.value)}
                  required
                />
              </div> */}


              <div ClassName="form-group">
                <label>Description</label>
                <input
                  type="text"
                  ClassName="form-control"
                  placeholder="Enter a short description of your dog."
                  onChange={(ev) => setDescription(ev.target.value)}
                  required
                />
              </div>
              <div ClassName="form-group">
                <label>Dog's Age</label>
                <input
                  type="text"
                  ClassName="form-control"
                  placeholder="Select the age of your dog."
                  onChange={(ev) => setAge(ev.target.value)}
                  required
                />
              </div>
              <div ClassName="form-group">
                <label>Dog's breed</label>
                <input
                  type="text"
                  ClassName="form-control"
                  placeholder="Select the breed of your dog."
                  onChange={(ev) => setBreed(ev.target.value)}
                  required
                />
              </div>
              <div ClassName="form-group">
                <label>Dog's Pic</label>
                <input
                  type="file"
                  ClassName="form-control"
                  placeholder="Upload the Picture of your dog."
                  onChange={(ev) => setAvatarUrl(ev.target.value)}
                  required
                />
              </div>
              <div>
              <button type="submit" className="global-btn">
                Create Profile
              </button>
              <p>Already registered {""} login?</p>
              </div>

              {/* {flag && (
                            <h1> fill out every field</h1>
                        )} */}
            </form>
          </FormUser>
        </Article>
      </DivWrapper>
    </div>
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

export default ProfilePageCreation;
