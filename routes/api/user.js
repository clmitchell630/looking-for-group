const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
    .post(userController.createUser);

router.route("/:userid")
    .get(userController.existingUser);

router.route("/answers")
    .post(userController.create);


router.route("/getmatches/:username")
    .get(userController.getMatches);

// router.route("/:userprofile")
//     .get(userController.getProfile);


// router
//     .route("/:id")
//     .get(userController.findById)
//     .put(userController.update)
//     .delete(userController.remove);

module.exports = router;
