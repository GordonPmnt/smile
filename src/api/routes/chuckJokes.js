const express = require('express');
const router = express.Router();
const chuck = require('../data/chuckJokes');


router.get('/random', (req, res) => {
    const joke = chuck[Math.floor(Math.random() * chuck.length)];
    res.json(joke);
});

module.exports = router;