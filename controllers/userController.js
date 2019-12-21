const db = require("../models");
const mongoose = require("mongoose");

module.exports = {

    create: function (req, res) {
        console.log("userController.js::create()");
        console.log(req.params.userid);
        db.UserAnswers
            .create(req.body)
            .then(dbModel => {
                // console.log("bleh");
                return db.User.findOneAndUpdate({
                    "sub": req.params.userid
                },
                    { $set: { useranswers: dbModel._id } },
                    { new: false })
                    .then(dbModel => res.json(dbModel));
            })
            .catch(err => res.status(422).json(err));
    },
    createUser: function (req, res) {
        console.log("userController.js::createUser()");
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    existingUser: function (req, res) {
        console.log("userController.js::existingUser()");
        db.User
            .findOne({ "sub": req.params.userid })
            .populate("useranswers")
            .then(function (data) {
                res.json(data)
            })
            .catch(err => res.status(422).json(err));
    },
    getTheMatches: function (req, res) {
        console.log("userController.js::getMatches()");
        // req.params.username will be user email
        db.User
            .find()
            .populate("useranswers")
            .then(function (data) {
                console.log("userController.js::getMatches().then()");
                console.log(data);

                res.json(data);
            })
            .catch(err => res.status(422).json(err));
    }

}
