const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")
const Schema = mongoose.Schema;
userSchema = new Schema({
    username: { 
        type: String,
        trim: true,
        unique: true,
        required: "Username is Required"
    },
    email: { 
        type: String, 
        required: "Email is Required",
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        uniqueCaseInsensitive: true
    },
    password: { 
        type: String,
        trim: true, 
        required: "Password is Required"
    }
});
userSchema.plugin(uniqueValidator);
const User = mongoose.model("User", userSchema);

module.exports = User;