const http = require('http');
const socketIo = require('socket.io');
const app = require('./app')
const config = require('./config')

const server = http.createServer(app);
const io = socketIo(server)

io.on('connection', (socket) => {
    let player = socket.request._query.name
    console.log(`${player}'s client connected`);
    socket.on("disconnect", () => {
        console.log(`${player}'s client disconnected`);
    });
});

server.listen(config.PORT, () => {
    console.log(`Server Listening on port ${config.PORT}`)
});