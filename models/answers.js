const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answers = new Schema({
    questionOne:{ type: String, required: true },
    questionTwo:{ type: String, required: true},
});

const UserAnswers = mongoose.model("UserAnswers", answers);

module.exports = UserAnswers;
