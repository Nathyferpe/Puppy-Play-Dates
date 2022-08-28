
"use strict";

const { MongoClient } = require("mongodb");

const { v4: uuidv4 } = require("uuid");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


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
            return res.status(404).json({status: 404, message: "no data"});;
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
    const user = await db.collection("users").findOne({ email })
    console.log(user);
    client.close();

    try {
        if (user) {
            return res.status(200).json({ status: 200, data: user });
        } else {
            return res.status(404).json({status: 404, message: "no data"});;
        }

    } catch (err) {
    console.log(err);
    }

};



//---------------------------User need to register login/sign-in --------------------------------//

const addUserHandle = async (req, res) => {
    const { name, email, avatarUrl, age, description, password } = req.body;

    const userProfile = {
        id: uuidv4(), ...req.body, friends:[]
    };

    console.log("userProfile ", userProfile );


    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("puppyplaydates");
    const user = await db.collection("users").insertOne( userProfile )
    console.log(user);
    client.close();

    try {
        if (user) {
            return res.status(200).json({ status: 200, data: userProfile });
        } else {
            return res.status(404).json({status: 404, message: "no data"});;
        }

    } catch (err) {
    console.log(err);
    }

};







//-------------Authentication login ------------------------//
//--------------get them by email??? -------------///

const userLoginHandle = async (req, res) => {
    const { email, password, name } = req.body;

    res.json({
        email,
        password,
        name
    })  

    const userProfileLogin = {
        id: uuidv4(), ...req.body
    };

    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("puppyplaydates");
    const user = await db.collection("users").findOne(userProfileLogin)
    console.log(user);
    client.close();

    try {
        if (user) {
            return res.status(200).json({ status: 200, data: userProfileLogin });
        } else {
            return res.status(404).json({status: 404, message: "no data"});;
        }

    } catch (err) {
    console.log(err);
    }

};


// -----------------------------------get an event-----------------------------------------------------------------------//
//--------------------------------------eneter user name into an array in the event object-------------------------------//

const getEventDetails = async (req, res) => {

    const { id, eventName, eventPlace, time } = req.params;

    res.json({
        id, 
        eventName, 
        eventPlace, 
        time,
    })  

    const eventDetails = {
        id: uuidv4(), ...req.body
    };

    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("puppyplaydates");
    const getEventInformation = await db.collection("events").findOne({ eventDetails })
    console.log(eventDetails);
    client.close();

    try {
        if (getEventInformation) {
            return res.status(200).json({ status: 200, data: getEventInformation });
        } else {
            return res.status(404).json({status: 404, message: "no data"});;
        }

    } catch (err) {
    console.log(err);
    }

};

//--------------------------------------------------add Friends-----------------------------------------------------//

// const handleFriends = async (req, res) => {
//  const [userId_1, userId_2] = req.body.friends;
// }




//------------------------Hanndle Friends--------------------------------------------------------------------------------//



//----------------------------add Friends----------------------------------------------//

// const handleAddFriends = (req, res) => {

// };

//------------------------------------------Inyect event(in data base?) which doc?--------------------------------//


module.exports = { getEventDetails, getAllUsersHandle, getUserByIdHandle, addUserHandle, userLoginHandle }
