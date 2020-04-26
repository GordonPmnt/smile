const http = require('http');
const socketIo = require('socket.io');
const app = require('./app')
const config = require('./config')

const server = http.createServer(app);
const io = socketIo(server)

io.on('connection', (socket) => {
    console.log('New client connected');
});

server.listen(config.PORT, () => {
    console.log(`Server Listening on port ${config.PORT}`)
});