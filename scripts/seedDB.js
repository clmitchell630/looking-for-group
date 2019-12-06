const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/usersearch"
);

const userSeed = [
    {
        game: "Halo Reach",
        playLevel: "Casual",
        troll: "No",
        skillLevel: "1",
        date: new Date(Date.now())
    }
];

db.User
.remove({})
.then(() => db.User.collection.insertMany(UserSeed))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
})