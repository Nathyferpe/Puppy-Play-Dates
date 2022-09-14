"use strict";

const { MongoClient } = require("mongodb");
const { MONGO_URI } = process.env;

// require('dotenv').config()
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();
const mongodb = require("mongodb");
const cors = require("cors");
app.use(express.json());

// images rquire
const { uploadFile, getFileStream } = require("./uploads/s3");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const {
  getEventDetails,
  getAllUsersHandle,
  getUserByEmailHandle,
  getUserByIdHandle,
  addUserHandle,
  verifyUserHandle,
  getAllEvents,
  handleRequestFriendship,
  gettingFriendRequestFriendshipAcepted,
} = require("./handlers");

app.use(morgan("tiny"));
app.use(express.json());

// Any requests for static files will go into the public folder
app.use(express.static("public"));
app.use(cors());

//---------------------Get all the dogs data-----------------------//

app.get("/api/users", getAllUsersHandle);

//-----------------Get the profile of one dog-----------------------//

app.get("/api/users/:email", getUserByEmailHandle);

// ----------------------creating a profile--------------------------//

app.post("/api/users", addUserHandle);

//------------------- users profile data for login-----------//

app.get("/api/users/login/:email", verifyUserHandle);

//-----------------Get the profile of one friend-----------------------//

app.get("/api/usersId/:id", getUserByIdHandle);

//------------------------Handle rquest Friendship--------------------------------//

app.patch("/api/friends/:userId/:friendId", handleRequestFriendship);

//------------------------- display all the events -----------------------------//

app.get("/api/events", getAllEvents);

//--------------------------HANDLES request frienship Accepted------------------//

app.patch(
  "/api/friends/accept/:userId/:friendId",
  gettingFriendRequestFriendshipAcepted
);

//---------------------------get 1 event by id--------------------------------//

app.get("/api/events/:id", getEventDetails);

// -------------------------------------   Get friends --------------------------------//

// app.get("/api/users/friends "  , gettingFriendsArray)

//----------------------------post/upload img --------------------//

app.post("/users", upload.single("file"), async (req, res) => {
  const { file } = req;
  const { name, email } = req.body;

  const result = await uploadFile(file);
  await unlinkFile(file.path);
  console.log(result);

  // we work with json rquest so we need to use multer app
});

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
  });
});

app.listen(8888, () => console.log(`Listening on port 8888`));
