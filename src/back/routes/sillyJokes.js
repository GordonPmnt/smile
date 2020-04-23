const express = require('express');
const router = express.Router();
const silly = require('../data/sillyJokes');


router.get('/', (req, res) => {
    res.json(silly);
});

module.exports = router;