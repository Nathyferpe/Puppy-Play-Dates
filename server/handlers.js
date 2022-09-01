"use strict";

const { MongoClient } = require("mongodb");

const { v4: uuidv4 } = require("uuid");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// use this data. Changes will persist until the server (backend) restarts.
const { users } = require("./users.json");
const { events } = require("./events.json");

// -------------------------------------------GET all users-----------------------------------------------------//
// ---------------------I need to get all the users to populate on the collection/ home page --------------------//

const getAllUsersHandle = async (req, res) => {
  console.log("hello");
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("puppyplaydates");
  const users = await db.collection("users").find().toArray();
  console.log(users);
  client.close();

  try {
    if (users.length > 0) {
      return res.status(200).json({ status: 200, data: users });
    } else {
      return res.status(404).json({ status: 404, message: "no data" });
    }
  } catch (err) {
    console.log(err);
  }
};

// GET user based on :email

const getUserByIdHandle = async (req, res) => {
  const { email } = req.params;
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("puppyplaydates");
  const user = await db.collection("users").findOne({ email });
  console.log(user);
  client.close();

  try {
    if (user) {
      return res.status(200).json({ status: 200, data: user });
    } else {
      return res.status(404).json({ status: 404, message: "no data" });
    }
  } catch (err) {
    console.log(err);
  }
};

//---------------------------User need to register /sign-in --------------------------------//

const addUserHandle = async (req, res) => {
  const { name, email, avatarUrl, age, description, password } = req.body;

  const userProfile = {
    id: uuidv4(),
    ...req.body,
    friends: [],
    pendingFriends: [],
    friendRequest: [],
  };

  console.log("userProfile ", userProfile);

  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("puppyplaydates");
  const user = await db.collection("users").insertOne(userProfile);
  console.log(user);
  client.close();

  try {
    if (user) {
      return res.status(200).json({ status: 200, data: userProfile });
    } else {
      return res.status(404).json({ status: 404, message: "no data" });
    }
  } catch (err) {
    console.log(err);
  }
};

//-------------Authentication login ------------------------//
//--------------get them by email??? ---------------------------///

//FIX THE END POINT!!!

const userLoginHandle = async (req, res) => {
  const { email, password } = req.body;

  const foundUser = users.find(
    (user) => user.email === email || user.password === password
  );
  console.log("user exist");

  // res.json({
  //     email,
  //     password,
  //     name
  // })

  // const userProfileLogin = {
  //     id: uuidv4(), ...req.body
  // };

  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("puppyplaydates");
  const user = await db
    .collection("users")
    .findOne({ email: email }, { password: password });

  if (user) {
    console.log("user found");
  }

  console.log(user);
  client.close();

  try {
    if (user === user.password && password === user.password) {
      return res.status(200).json({ status: 200, data: userProfileLogin });
    } else {
      return res.status(404).json({ status: 404, message: "no data" });
    }
  } catch (err) {
    console.log(err);
  }
};

// -----------------------------------get an event-----------------------------------------------------------------------//
//--------------------------------------eneter user name into an array in the event object-------------------------------//
////Maybe is better to post my info in the event ...invyecting my id in and array (PATCH) attendance by id

const getEventDetails = async (req, res) => {
  const { id, eventName, eventPlace, time } = req.params;

  res.json({
    id,
    eventName,
    eventPlace,
    time,
  });

  const eventDetails = {
    id: uuidv4(),
    ...req.body,
  };

  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("puppyplaydates");
  const getEventInformation = await db
    .collection("events")
    .findOne({ eventDetails });
  console.log(eventDetails);
  client.close();

  try {
    if (getEventInformation) {
      return res.status(200).json({ status: 200, data: getEventInformation });
    } else {
      return res.status(404).json({ status: 404, message: "no data" });
    }
  } catch (err) {
    console.log(err);
  }
};

//--------------------------------------------------add Friends-----------------------------------------------------//
/// PATCH ----
// Needs 2 PEOPLE TO BE FRIENDS
// PATCH. requires the ids of 2 people to make them friends . Accepts 2 properties: the body id of my friend (user1) and my body id of (user 2)
// ids should be sent along as an array called newFriends in the body

const handleRequestFriendship = async (req, res) => {
  const { userId, friendId } = req.params;
  console.log("UserId", userId);
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("puppyplaydates");
  const currentUser = await db.collection("users").findOne({ id: userId });
  console.log(currentUser);
  currentUser.pendingFriends.push(friendId);



  const filter = { id: userId }
  const updateDoc = {
      $set: {
      pendingFriends: currentUser.pendingFriends
      },
  };



  await db.collection("users").updateOne( filter, updateDoc );

  client.close();

  if (currentUser) {
    return res.status(200).json({ status: 200, data: currentUser });
  } else {
    return res.status(404).json({ status: 404, message: "no data" });
  }

    client.close();
  //Use my friend id to find the object
  // const user1 = findUser(user, userId1);
  // const user2 = findUser(user, userId2);

  //and add my new friend into my array of friends:

  // // if either of the userIds don't exist, stop and return error
  // if (!user1 || !user2)
  // return sendResponse(
  //     res,
  //     404,
  //     req.body,
  //     "One or both of the users not found."
  // );

  // const userIdx_1 = findUserIndex(user, userId1);
  // const userIdx_2 = findUserIndex(user, userId2);
};

//-----------------------------------------------Add my name to the event ------------------------------------------------------//
// post///
// find one event
//inyect my id into the event page ( listofatendance by id) Populating on my event page

//------------------------------------------Inyect event(in data base?) which doc?--------------------------------//

module.exports = {
  getEventDetails,
  getAllUsersHandle,
  getUserByIdHandle,
  addUserHandle,
  userLoginHandle,
  handleRequestFriendship,
};
