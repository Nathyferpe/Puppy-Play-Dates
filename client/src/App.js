import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Events from "./components/Events";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import ProfilePageCreation from "./components/ProfilePageCreation";
import GlobalStyles from "./components/GlobalStyles";
import LoginPage from "./components/LoginPage";
import ProfileFriend from "./components/ProfileFriend";
import ProfilePage from "./components/ProfilePage";
import Homegrid from "./components/Homegrid";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import GetOneEvent from "./components/OneEventPage";

const App = () => {
  const { isloading, error } = useAuth0;

  // bring it from the auth hook
  const { user, isAuthenticated } = useAuth0();

  const [users, setUsers] = useState([]);

  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState([]);
  // const [email, setEmail] = useState("");

  // const [friendId, setFriendId] = useState("");

  // localStorage.setItem("userId", "123");
  // const userId = localStorage.getItem("userId");
  // const userId = localStorage.getItem("email", email);

  // console.log("user id", userId);

  return (
    <>
      {error && <p>Authenticationn Failed</p>}
      {!error && isloading && <p>Loading...</p>}
      {!error && !isloading && (
        <>
          {/* <LoginButton/>
    <LogoutButton/> */}
        </>
      )}

      <BrowserRouter>
        <GlobalStyles />
        <>
          <NavBar />

          {/* isAuthenticated && ( */}

          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/account/login">
              <LoginPage /*user={user} users={users} setUsers={setUsers}*/ />
            </Route>
            <Route exact path="/account">
              <ProfilePageCreation />
            </Route>
            <Route exact path="/homegrid">
              <Homegrid />
            </Route>
            <Route exact path="/profile/:email">
              <ProfilePage />
            </Route>
            <Route exact path="/events">
              <Events evets={events} setEvents={setEvents} />
            </Route>
            <Route exact path="/events/:id">
              <GetOneEvent evets={event} setEvents={setEvent} />
            </Route>
            <Route exact path="/usersId/:id">
              <ProfileFriend />
            </Route>
          </Switch>
        </>
      </BrowserRouter>
    </>

    // )
  );
};

export default App;
