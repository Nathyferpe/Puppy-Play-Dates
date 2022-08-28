import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Events from "./components/Events";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import ProfilePageCreation from "./components/ProfilePageCreation";
import GlobalStyles from "./components/GlobalStyles";
import LoginPage from "./components/LoginPage";
import ProfileFriend from "./components/ProfileFriend";
import ProfilePage from "./components/ProfilePage"
import Homegrid from "./components/Homegrid";

const App = () => {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState('')

  // test //

  localStorage.setItem("userId", "123");
  const userId = localStorage.getItem("userId");
  console.log("user id", userId);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <>
        <NavBar 
        />
        <Switch>
          <Route exact path="/">
            <Homepage user={user} users={users} setUsers={setUsers}/>
          </Route>
          <Route exact path="/account/login">
            <LoginPage user={user} users={users} setUsers={setUsers}/>
          </Route>
          <Route exact path="/account">
            <ProfilePageCreation />
          </Route>
          <Route exact path="/homegrid">
          <Homegrid/>
          </Route>
          <Route exact path="/profile/:email">
            <ProfilePage />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/users/:id">
            <ProfileFriend />
          </Route>
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default App;
