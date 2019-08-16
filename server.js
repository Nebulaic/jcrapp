// Load environment variables
require ('dotenv').config();

// Dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialisation
const app = express();
const port = process.env.PORT || 3000; // set port

// app.use() clauses
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'dist/jcrapp')));
/* Place app.use clauses here e.g. 
app.use('/', express.static(path.join(__dirname, 'dist/index.html'))) */

// Direct browser to static site
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/jcrapp/index.html'));
});

// Create server
app.listen(port, function() {
    console.log(`Listening on ${port}.`);
});