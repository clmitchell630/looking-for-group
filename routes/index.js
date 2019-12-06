const path = require('path');
const router = require('express').Router();
const test = require('./test');
const apiRoutes = require("./api");

router.use('/test', test);

router.use("/api", apiRoutes);

router.use((req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

module.exports = router;
