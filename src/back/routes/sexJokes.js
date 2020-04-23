const express = require('express');
const router = express.Router();
const sex = require('../data/sexJokes');


router.get('/', (req, res) => {
    res.json(sex);
});

module.exports = router;