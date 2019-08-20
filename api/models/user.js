var mongoose = require('mongoose');

// Define model

module.exports = mongoose.model('User', {
    user_id: {type: String, default: ''},
    password: {type: String, default: ''}
});