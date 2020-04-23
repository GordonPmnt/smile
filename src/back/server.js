const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 8080


app.get('/', (req, res) => {
 return res.send('Server is running');
});

app.listen(port, (err) => {
    if(err) {
        throw new Error("Server couldn't run...");
    }
});
console.log(`Server is listening on ${port}`);