var express = require('express');
var router = express.Router();
// var request = require('request');
// var config = require('config.json');
var User = require('../app/models/user.model');


router.get('/', function (req, res) {
    res.render('register');
});

router.post('/', function (req, res) {
    //req.body holds username. see regiser.ejs for specific form-id
    //var query = User.findOne({'username' : req.body.username});
    User.findOne({'username' : req.body.username}, function (err, user) {
            console.log('here?');

        if(err) {
            res.render('register', { error: 'really bad error'});
        }
        if(user) {
            console.log("Username" + user.username + " is already taken");
            res.render('register', { error: 'username already taken'});

        }
        else { /* create the user */

            //http://mongoosejs.com/docs/models.html

            var newUser = new User({
                name : req.body.firstName + " " + req.body.lastName, 
                username : req.body.username, 
                password : req.body.password});

            newUser.save(function (err) {
                if(err) return handleError(err);
                // saved!
                res.redirect('./login');
            });

        }
    });

     
});

module.exports = router;
