var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

///////////////
//CONNECTIONS//
///////////////
var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("listening on port ", port);
})

var mongoUri = "mongodb://localhost:27017/durandalIncidents";
mongoose.connect(mongoUri, function(err) {
    if (err) throw err;
});

mongoose.connection.once('open', function () {
    console.log('connected to mongoDB at: ', mongoUri);
});