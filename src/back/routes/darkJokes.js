const express = require('express');
const router = express.Router();
const dark = require('../data/darkJokes');


router.get('/', (req, res) => {
    res.json(dark);
});

module.exports = router;