// Dependencies
const express = require('express'),
    app = express(),
    port = process.env.PORT || 8080;

// Serve static page
app.use(express.static(__dirname + '/dist/jcrapp'))

// Start
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});