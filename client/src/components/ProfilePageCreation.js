import React from "react";
import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProfilePageCreation = () => {
  const { user } = useAuth0();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState(user.email);
  const [breed, setBreed] = useState("");
  const [password, setPassword] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const formData = {
    name,
    age,
    email,
    breed,
    description,
    avatarUrl,
    password,
  };

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
        console.log(json);
        localStorage.setItem("email", json.data.email);
        localStorage.setItem("id", json.data.id);
        history.push(`/profile/${json.data.email}`);
      });
  };

  return (
    <div>
      <DivWrapper>
        <Article>
          <Banner>
            <div className="customer-hero-content">
              <h2 style={{ color: "#8c7ae6" }}>Welcome</h2>
              <h3 style={{ lineHeight: "1.2" }}>
                Join the awesome group of Puppy Play Dates{" "}
              </h3>
            </div>
          </Banner>
          <FormUser>
            <h2 style={{ color: "#8c7ae6", textAlign: "center" }}>
              Create your dog profile
            </h2>
            <h3 style={{ marginTop: "20px", lineHeight: "1.2" }}>
              Please create the Profile of your dog! Click on the "Sign In"
              button and then you are ready to make new friends.
            </h3>
            <form onSubmit={handleSubmit}>
              <div ClassName="form-group">
                <label style={{ display: "flex" }}>Dog's name</label>
                <input
                  style={{ display: "flex" }}
                  type="text"
                  ClassName="form-control"
                  placeholder="Enter your dog's name"
                  onChange={(ev) => setName(ev.target.value)}
                  required
                />
              </div>
              {/* <div ClassName="form-group">
                <label style={{ display: "flex" }}>My Email</label>
                <input
                  style={{ display: "flex" }}
                  type="text"
                  ClassName="form-control"
                  placeholder="Enter your email"
                  onChange={(ev) => setEmail(ev.target.value)}
                  required
                />
              </div> */}
              <div ClassName="form-group">
                <label style={{ display: "flex" }}>Description</label>
                <input
                  style={{ display: "flex" }}
                  type="text"
                  ClassName="form-control"
                  placeholder="Enter a short description of your dog."
                  onChange={(ev) => setDescription(ev.target.value)}
                  required
                />
              </div>
              <div ClassName="form-group">
                <label style={{ display: "flex" }}>Dog's Age</label>
                <input
                  style={{ display: "flex" }}
                  type="text"
                  ClassName="form-control"
                  placeholder="Select the age of your dog."
                  onChange={(ev) => setAge(ev.target.value)}
                  required
                />
              </div>
              <div ClassName="form-group">
                <label style={{ display: "flex" }}>Dog's breed</label>
                <input
                  style={{ display: "flex" }}
                  type="text"
                  ClassName="form-control"
                  placeholder="Select the breed of your dog."
                  onChange={(ev) => setBreed(ev.target.value)}
                  required
                />
              </div>
              <div ClassName="form-group">
                <label style={{ display: "flex" }}>Dog's Pic</label>
                <input
                  style={{ border: "none", display: "flex" }}
                  type="file"
                  ClassName="form-control"
                  placeholder="Upload the Picture of your dog."
                  onChange={(ev) => {
                    console.log(ev.target.files[0].name);
                    setAvatarUrl(ev.target.files[0].name);
                  }}
                  // onChange={(ev) => setAvatarUrl(ev.target.value)}
                  required
                />
              </div>
              <div>
                <button type="submit" className="global-btn">
                  Create Profile
                </button>
                {/* <h3 style={{ marginBottom: "0px" }}>
                  If you have a profile click on "Continue" button to continue.
                </h3> */}
                {/* <button
                  to="/account/login"
                  type="submit"
                  className="global-btn"
                >
                  My Profile
                </button> */}
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
  margin-top: 120px;
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

export default ProfilePageCreation;
