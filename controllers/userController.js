const db = require("../models");

module.exports = {

    create: function (req, res) {
        console.log("userController.js::create()");
        db.UserAnswers
            .create(req.body)
            .then(dbModel => {
                console.log("bleh");
                return db.User.findOneAndUpdate({}, { $set: { answers: dbModel._id } }, { new: false }).then(dbModel => res.json(dbModel));
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
        console.log(req.params.userid);
        db.User
            .findOne({ "sub": req.params.userid })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getProfile: function (req, res) {
        console.log("userController.js::getProfile()");
        db.User
            .findOne({ "sub": req.params.userprofile })
            .populate("UserAnswers")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getMatches: function (req, res) {
       console.log("userController.js::getMatch()");
       console.log(req.params.username);
        // req.params.username will be user email
        console.log(db.User.findOne({ "email": req.params.username }));
        // let player = db.User.findOne({ "email": req.params.username }).populate;
        // logic to lookup matches based on player profile
        // db.User
        //     .findOne({})
        //     .populate("UserAnswers")
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(422).json(err));
    }

}
