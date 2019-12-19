const db = require("../models");

module.exports = {
    findMatch: function(req,res) {
        console.log("userController.js::findMatch()");
        db.UserAnswers
        .find(req.query)
        .sort({date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req,res) {
        console.log("userController.js::create()");
        db.UserAnswers
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createUser: function (req,res) {
        console.log("userController.js::createUser()");
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    existingUser: function(req, res) {
            console.log("this is user mother fucking id");
            console.log(req.params.userid);
       db.User
            .findOne({ "sub": req.params.userid })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
}
