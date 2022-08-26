const { MongoClient } = require("mongodb");
require('dotenv').config()
// Connection URI
require("dotenv").config();
const { MONGO_URI } = process.env;
const events = require("./events.json");


// const uri = process.env.MONGO_URL;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const dbFunctionEvents = async (puppyplaydates) => {
    // creates a new client
    const client = new MongoClient(MONGO_URI, options);

    // connect to the client
    await client.connect();

    // connect to the database (db name is provided as an argument to the function)
    const db = client.db(puppyplaydates);
    console.log("connected!");

    await db.collection("events").insertMany(events);

    // close the connection to the database server
    client.close();
    console.log("disconnected!");
    };

// dbFunctionEvents("puppyplaydates");



