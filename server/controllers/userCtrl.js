var User = require('../models/User');

module.exports = {
    
    createUser: function(req,res,next) {
        var newUser = new User(req.body);
        newUser.save(function (err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        });
    },
    
    verifyAndGetUser: function(req,res,next) {
        
    }
}