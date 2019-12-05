const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    game: { type: String , required: true },
    playLevel: { type: String, required: true},
    troll: { type: Boolean, required: true },
    skillLevel: { type: String, required: true}
});

const User = mongoose.model("User", userSchema);

module.exports = User;