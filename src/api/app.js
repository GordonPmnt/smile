const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const api = require('./routes');


app.use(cors())
app.use(bodyParser.json());

// Middleware
app.use((req, res, next) => { 
    console.log('ON: ', req.headers.host, req.url);
    next();
});

// Routing
app.use('/api', api);

module.exports = app