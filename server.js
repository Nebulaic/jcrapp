// Load environment variables
require ('dotenv').config();

// Dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Initialisation
const app = express();
const port = process.env.PORT || 3000; // set port
const db_uri = process.env.DB_URI

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));

// app.use() clauses
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'dist/jcrapp')));

/* Place further app.use clauses here e.g. 
app.use('/', express.static(path.join(__dirname, 'dist/index.html'))) */

// Direct browser to static site
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/jcrapp/index.html'));
});

// Connect to MongoDB server
mongoose.connect(db_uri, {useNewURLParser: true});

// API Routes
//require('./api/routes')(app); // configure routes
var routes = require('./api/routes');
app.use('/api', routes);

// Create server
app.listen(port, function() {
    console.log(`Listening on ${port}.`);
});

exports = module.exports = app;