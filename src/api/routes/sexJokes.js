const express = require('express');
const router = express.Router();
const sex = require('../data/sexJokes');


router.get('/random', (req, res) => {
    const joke = sex[Math.floor(Math.random() * sex.length)];
    res.json(joke);
});

module.exports = router;