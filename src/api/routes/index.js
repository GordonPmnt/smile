const express = require('express');
const sex = require('./sexJokes');
const dark = require('./darkJokes');
const chuck = require('./chuckJokes');

const router = express.Router();

router.use('/sex', sex);
router.use('/dark', dark);
router.use('/chuck', chuck);

module.exports = router;