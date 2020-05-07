const express = require('express');
const router = express.Router();
const dark = require('../data/darkJokes');


router.get('/random', (req, res) => {
    const joke = dark[Math.floor(Math.random() * dark.length)];
    res.json(joke);
});

module.exports = router;