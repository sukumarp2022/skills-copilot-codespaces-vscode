// Create web server
// Create a route that will return all comments in the database
// Create a route that will add a new comment to the database
// Create a route that will update a comment in the database
// Create a route that will delete a comment in the database

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const comments = [
  {
    id: 1,
  }
]