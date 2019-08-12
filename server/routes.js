// Create router
const express = require('express'),
    router = express.Router(),
    mainController = require('./controllers/main.controller');

// Export router
module.exports = router;

// Define routes
router.get('/', mainController.showHome);