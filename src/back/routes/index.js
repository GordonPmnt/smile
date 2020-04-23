const express = require('express');
const sex = require('./sexJokes');
const silly = require('./sillyJokes');
const chuck = require('./chuckJokes');

const router = express.Router();

router.use('/sex', sex);
router.use('/silly', silly);
router.use('/chuck', chuck);

module.exports = router;