const express = require('express');
const router = express.Router();
const chuck = require('../data/chuckJokes');


router.get('/', (req, res) => {
    res.json(chuck);
});

module.exports = router;