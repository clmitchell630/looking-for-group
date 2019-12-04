const path = require('path');
const router = require('express').Router();
const test = require('./test');

router.use('/test', test);

router.use((req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

module.exports = router;
