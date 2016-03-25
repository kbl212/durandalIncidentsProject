var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Incident = require('./Incident');

var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Incidents: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Incident',
        default: [],
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);