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
    }
}