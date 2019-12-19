const mongoose = require("mongoose");
const Schema = mongoose.Schema;

userSchema = new Schema({
    username: {
        type: String,
        unique: true

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
    answers:
    {
        type: Schema.Types.ObjectId,
        ref: "UserAnswers"
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
