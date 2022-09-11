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

// ----------------------------------------------GET user based on :email--------------------------------------------//

const getUserByEmailHandle = async (req, res) => {
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

//-----------------------------------------------------------get user by id ------------------------------------------------//

const getUserByIdHandle = async (req, res) => {
  const { id } = req.params;
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("puppyplaydates");
  const user = await db.collection("users").findOne({ id });
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

//-------------------------------------------------------User need to register /sign-in --------------------------------//

const addUserHandle = async (req, res) => {
  const { name, email, avatarUrl, age, description, password } = req.body;

  const userProfile = {
    id: uuidv4(),
    ...req.body,
    friends: [],
    pendingFriends: [],
    friendRequest: [],
    avatarUrl: `/images/profile-pics/${avatarUrl}`,
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

//----------------------------------------------------------Get all events----------------------------------------------------//

const getAllEvents = async (req, res) => {
  console.log("CAN I SEE THIS?");
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("puppyplaydates");
  const allEvents = await db.collection("events").find().toArray();
  console.log(events);
  client.close();

  try {
    if (allEvents.length > 0) {
      return res.status(200).json({ status: 200, data: allEvents });
    } else {
      return res.status(404).json({ status: 404, message: "no data" });
    }
  } catch (err) {
    console.log(err);
  }
};

//------------------------------------------------------------Authentication login ----------------------------------------------//

//FIX THE END POINT!!!

const userLoginHandle = async (req, res) => {
  const { email, password } = req.body;

  const foundUser = users.find(
    (user) => user.email === email || user.password === password
  );
  console.log("user exist");

  res.json({
    email,
    password,
    name,
  });

  const userProfileLogin = {
    id: uuidv4(),
    ...req.body,
  };

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

// -------------------------------------------------Get event by ID ----------------------------------------------------------------------//

const getEventDetails = async (req, res) => {
  const { id } = req.params;
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("puppyplaydates");
  const oneEvent = await db.collection("events").findOne({ id });
  console.log(oneEvent);
  client.close();

  try {
    if (oneEvent) {
      return res.status(200).json({ status: 200, data: oneEvent });
    } else {
      return res.status(404).json({ status: 404, message: "no data" });
    }
  } catch (err) {
    console.log(err);
  }
};

//--------------------------------------------------add Friends---------------------------------------------------------------//
/// PATCH ----
// Needs 2 PEOPLE TO BE FRIENDS
// PATCH. requires the ids of 2 people to make them friends . Accepts 2 properties: the body id of my friend (user1) and my body id of (user 2)
// ids should be sent along as an array called newFriends in the body (Maybe)

const handleRequestFriendship = async (req, res) => {
  const { userId, friendId } = req.params;
  // console.log("UserId", userId);
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("puppyplaydates");
  const currentUser = await db.collection("users").findOne({ id: userId });
  console.log(currentUser);
  currentUser.pendingFriends.push(friendId);

  const filter = { id: userId };
  const updateDoc = {
    $set: {
      pendingFriends: currentUser.pendingFriends,
    },
  };

  await db.collection("users").updateOne(filter, updateDoc);

  const futureFriend = await db.collection("users").findOne({ id: friendId });
  futureFriend.friendRequest.push(userId);

  const filterOfFriends = { id: friendId };
  const updateDocFriendRequest = {
    $set: {
      friendRequest: futureFriend.friendRequest,
    },
  };

  await db
    .collection("users")
    .updateOne(filterOfFriends, updateDocFriendRequest);

  client.close();

  if (currentUser && futureFriend) {
    return res
      .status(200)
      .json({ status: 200, data: { currentUser, futureFriend } });
  } else {
    return res.status(404).json({ status: 404, message: "no data" });
  }
};

//the friendId (future friend) have received and acepted my request i have to get it from the "pending friends"[] to "friends[]"

const gettingFriendRequestFriendshipAcepted = async (req, res) => {
  const { userId, friendId } = req.params;

  console.log("friendId", friendId);
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("puppyplaydates");
  const possibleFriend = await db.collection("users").findOne({ id: friendId });
  possibleFriend.friends.push(userId);
  console.log(" possible friend request", possibleFriend.friendsRequest);
  const newFriendRequestArray = possibleFriend.friendRequest.filter(
    (id) => id !== userId
  );

  console.log("new friend array", newFriendRequestArray);

  const filterOfFriends = { id: friendId };
  const updateDocFriendRequest = {
    $set: {
      friends: possibleFriend.friends,
      friendRequest: newFriendRequestArray,
    },
  };

  await db
    .collection("users")
    .updateOne(filterOfFriends, updateDocFriendRequest);
  const friendAcceptUserObject = await db
    .collection("users")
    .findOne(filterOfFriends);
  // user1 need to find the user2 id and push the user2id into the user1 friends array
  //remember the users2 id is in the "pending friends" Note: filter by id maybe??

  const acceptedFriend = await db.collection("users").findOne({ id: userId });
  acceptedFriend.friends.push(friendId);
  const newPendingFriendReadytoBeAcepted = acceptedFriend.pendingFriends.filter(
    (id) => id !== friendId
  );

  // update the the document for user number 1.

  const filterOfNewFriends = { id: userId };
  const updateDocacceptFriendRequest = {
    $set: {
      friends: acceptedFriend.friends,
      friendRequest: newPendingFriendReadytoBeAcepted,
    },
  };

  // send it to mongo

  await db
    .collection("users")
    .updateOne(filterOfNewFriends, updateDocacceptFriendRequest);

  client.close();
  const firendRequewstUserObject = await db
    .collection("users")
    .findOne(filterOfNewFriends);
  // add both users in the response object .

  if (possibleFriend && acceptedFriend) {
    return res.status(200).json({
      status: 200,
      data: { firendRequewstUserObject, friendAcceptUserObject },
      acceptedFriend,
    });
  } else {
    return res.status(404).json({ status: 404, message: "no data" });
  }
};

//---------------------------------- getting friends users from user's array ----------------------------------//

module.exports = {
  getAllEvents,
  getEventDetails,
  getAllUsersHandle,
  getUserByEmailHandle,
  getUserByIdHandle,
  addUserHandle,
  userLoginHandle,
  handleRequestFriendship,
  gettingFriendRequestFriendshipAcepted,
};
