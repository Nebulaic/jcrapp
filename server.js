require ('dotenv').config(); // Load environment variables

// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Initialise app
const app = express();

// API routes
const api = require('./server/routes');

// Point static path to dist
app.use(express.static(path.join(__dirname, '/dist/jcrapp')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/jcrapp/index.html'));
});


 // Get port from environment and store in Express
const port = process.env.PORT || '3000';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);

// Connect to database
mongoose.connect(process.env.DB_URI);

// Broadcast & run
server.listen(port, () => console.log(`API running on localhost:${port}`));