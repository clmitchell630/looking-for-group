const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    sub: {
        type: String,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    useranswers: {
        type: Schema.Types.ObjectId,
        ref: "UserAnswers"
    }

});

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
