var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var incidentSchema = new Schema({
    refNumber: Number,
    summary: String,
    currentStatus: String,
    loggedTime: String,
    endUser: String,
    minsToBreach: Number
})

module.exports = mongoose.model('Incident', incidentSchema);