const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answersSchema = new Schema({
    game: { type: String , required: true },
    playLevel: { type: String, required: true},
    troll: { type: String, required: true },
    skillLevel: { type: String, required: true},
    date: { type: Date, default: Date.now }
});

const UserAnswers = mongoose.model("UserAnswers", answersSchema);

module.exports = UserAnswers;
