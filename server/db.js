const { MongoClient } = require("mongodb");
require('dotenv').config()
// Connection URI
require("dotenv").config();
const { MONGO_URI } = process.env;
const users = require("./users.json");

// const uri = process.env.MONGO_URL;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const dbFunction = async (dbName) => {
    // creates a new client
    const client = new MongoClient(MONGO_URI, options);
  
    // connect to the client
    await client.connect();
  
    // connect to the database (db name is provided as an argument to the function)
    const db = client.db(dbName);
    console.log("connected!");

    await db.collection("users").insertMany(users);
  
    // close the connection to the database server
    client.close();
    console.log("disconnected!");
  };

  dbFunction("puppyplaydates");

// // Create a new MongoClient
//     async function connectToCluster() {
//         try {
//             const dbName = 'puppyplaydates';
//             const mongoClient = new MongoClient(uri , options);
//             console.log('Connecting to MongoDB Atlas cluster...');
//             await mongoClient.connect();
//             const db = await client.db(dbName);
//             console.log('Successfully connected to MongoDB Atlas!');
    
//             return db;
//         } catch (error) {
//             console.error('Connection to MongoDB Atlas failed!', error);
//             process.exit();
//         }
//     }



    // module.exports = {
    //     connectToCluster
    // }


