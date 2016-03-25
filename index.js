////////////////
//DEPENDENCIES//
////////////////
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

///////////////
//CONTROLLERS//
///////////////
var userCtrl = require('./server/controllers/userCtrl');
var incidentCtrl = require('./server/controllers/incidentCtrl');


//////////////
//MIDDLEWARE//
//////////////
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

/////////////
//ENDPOINTS//
/////////////

app.post('/api/user', userCtrl.createUser);
app.get('/api/user', userCtrl.verifyAndGetUser);

app.post('/api/incident', incidentCtrl.createIncident);
app.get('/api/incident', incidentCtrl.getIncidents);



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