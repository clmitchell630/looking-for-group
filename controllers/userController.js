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
                return db.User.findOneAndUpdate({"sub" : req.params.userid}, { $set: { useranswers: dbModel._id } }, { new: false }).then(dbModel => res.json(dbModel));
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

    // getProfile: function (req, res) {
    //     console.log("userController.js::getProfile()");
    //     db.User
    //         .findOne({ "sub": req.params.userprofile })
    //         .populate("UserAnswers")
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    getMatches: function (req, res) {
        console.log("userController.js::getMatch()");
        console.log(req.params.username);
        // req.params.username will be user email
        db.User
            .findOne({ "sub": req.params.username })
            .populate("useranswers")
            .then(function (data) {
                console.log("userController.js::getMatch().then()");
                console.log(data);



                // db.User.find({"useranswers.game" : data.useranswers.game, "useranswers.playLevel" : data.useranswers.playLevel, "useranswers.troll" : data.useranswers.troll})
                //     .populate("useranswers")
                //     .then(function(matchdata){
                //         console.log("matchdata");
                //         console.log(matchdata);
                // let minDif;
                // let myFriend;

                // for (let f in friends) {

                //     let difference = 0;

                //     for (var i = 0; i < friends[f].scores.length; i++) {
                //         difference += Math.abs(friends[f].scores[i] - newFriend.scores[i]);
                //     }

                //     if(minDif === undefined || difference < minDif) {
                //         minDif = difference;
                //         myFriend = friends[f];
                //     }

                // }
                // })
                res.json(data);
            })
            // .then(function(userdata) {
            //     console.log("userController.js::getMatch().then().then()")
            //     console.log(userdata);

            //     res.json(userdata);

            // })
            .catch(err => res.status(422).json(err));
        // let player = db.User.findOne({ "email": req.params.username }).populate;
        // logic to lookup matches based on player profile
        // db.User
        //     .findOne({})
        //     .populate("UserAnswers")
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(422).json(err));
    }

}
