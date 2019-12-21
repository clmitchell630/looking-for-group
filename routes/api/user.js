const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/saveuser")
    .post(userController.createUser);

router.route("/:userid")
    .get(userController.existingUser);

router.route("/answers/:userid")
    .post(userController.create);

router.route("/")
    .get(userController.getTheMatches);

module.exports = router;
