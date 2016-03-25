var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var incidentSchema = new Schema({
    refNumber: Number,
    Summary: String,
    currentStatus: String,
    loggedTime: Date,
    minsToBreach: Number
})

module.exports = mongoose.model('Incident', incidentSchema);