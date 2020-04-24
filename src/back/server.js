const express = require('express');
const api = require('./routes');

const app = express();
const port = process.env.PORT || 8080;


app.listen(port, (err) => {
    if(err) {
        throw new Error("Server couldn't run...");
    }
    console.log(`Server is listening on ${port}`);
});

app.use('/api', api);