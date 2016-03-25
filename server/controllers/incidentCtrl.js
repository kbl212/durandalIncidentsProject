var Incident = require('../models/Incident');

module.exports = {
    
    createIncident: function(req,res,next) {
        var newIncident = new Incident(req.body);
        newIncident.save(function (err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        })
    },
    
    getIncidents: function(req,res,next) {
        
    }
}