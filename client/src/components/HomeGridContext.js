import React from "react";
import { createContext, useState, useEffect } from "react";

export const HomeGridContext = createContext();

export const HomeGridPageProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [usersInfo, setUsersInfo] = useState([]);
  const [events, setEvents] = useState([]);
  // const [authUser, setAuthUser] = useState();

  //Ineed a state for the buttons to add friend remove friend and also to subscribe to events
  // const [friendMeButton, setFriendmeButton] = useState(false);
  // const [addEventButton, setEventButton] = useState(false);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      });
  }, []);

  return (
    <HomeGridContext.Provider
      value={{
        setEvents,
        events,
        users,
        setIsSignedIn,
        isSignedIn,
        setCurrentUser,
        currentUser,
        setUsersInfo,
        usersInfo,
        // authUser,
        // setAuthUser,
      }}
    >
      {children}
    </HomeGridContext.Provider>
  );
};

export default HomeGridPageProvider;
