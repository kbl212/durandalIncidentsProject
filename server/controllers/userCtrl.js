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
        User.findOne({
            userName: req.query.userName,
            password: req.query.password
        })
        .populate('userIncidents')
        .exec(function(err, result) {
            if (err) {
                console.log("ERROR IN USER VERIFICATION");
                res.status(500).send(err);
            }
            /*else if (result.length === 0) {
                console.log("ALSO ERROR IN USER VERIFICATION");
                res.status(500).send(err);
            }*/
            else { 
                console.log('YEEEHAW');
                res.send(result);
            }
        });
    }
}