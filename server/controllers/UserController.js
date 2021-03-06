var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// var VerifyToken = require(__root + '/VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));
var User = require('../models/User');


// RETURNS ALL THE USERS IN THE DATABASE
/* router.get('/', function (req, res) {
  User.find({}, function (err, users) {
    if (err) return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(users);
  });
}); */

// GETS A SINGLE USER FROM THE DATABASE
/* router.get('/:id', function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send(user);
  });
}); */

// GETS A SINGLE USER FROM THE DATABASE BY USERNAME
router.get('/username/:username', function (req, res) {
  User.findOne({username: req.params.username}, function (err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(200).send(false);
    res.status(200).send(user);
  });
});

// GETS A SINGLE USER FROM THE DATABASE BY EMAIL
router.get('/email/:email', function (req, res) {
  User.findOne({email: req.params.email}, function (err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(200).send(false);
    res.status(200).send(user);
  });
});

// DELETES A USER FROM THE DATABASE
/* router.delete('/:id', function (req, res) {
  User.findByIdAndRemove(req.params.id, function (err, user) {
    if (err) return res.status(500).send("There was a problem deleting the user.");
    res.status(200).send("User: "+ user.username +" was deleted.");
  });
}); */

// UPDATES A SINGLE USER IN THE DATABASE
// Added VerifyToken middleware to make sure only an authenticated user can put to this route
/* router.put('/:id', VerifyToken, function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
}); */


module.exports = router;