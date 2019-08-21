var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define schema for user
var UserSchema = new Schema({
    name: {type: String, default: ''},
    password: {type: String, default: ''}
});

module.exports = mongoose.model('User', UserSchema); // Export model