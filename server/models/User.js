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
    password: {
        type: String,
        required: true
    },
    userIncidents: [{
        type: Schema.Types.ObjectId,
        ref: 'Incident',
    }]
});

module.exports = mongoose.model('User', userSchema);