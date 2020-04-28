const http = require('http');
const socketIo = require('socket.io');
const app = require('./app')
const config = require('./config')

const server = http.createServer(app);
const io = socketIo(server)
const gameroom = {}

io.on('connection', (socket) => {
    
    let player = socket.request._query.name;
    gameroom[player] = true;
    console.log('GAMEROOM:', gameroom)
    
    io.emit('room', Object.keys(gameroom).length)
    
    let id = 0;
    socket.on('chat message', (msg) => {
        msg.id = id;
        console.log(msg.id + '//' + msg.sender + '//' + msg.message);
        io.emit('chat message', msg);
        id +=1;
    });

    socket.on('player status', playerStatus => {
        const { player, status } = playerStatus
        console.log(`${player} is active: ${status}`)
        io.emit('player status', playerStatus)
    });

    socket.on("disconnect", () => {
        console.log(`${player}'s client disconnected`);
        delete gameroom[player];
        console.log('GAMEROOM:', gameroom)
    });
    
});

server.listen(config.PORT, () => {
    console.log(`Server Listening on port ${config.PORT}`)
});