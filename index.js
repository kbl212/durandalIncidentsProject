var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("listening on port ", port);
})