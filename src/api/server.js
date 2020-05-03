const http = require('http');
const socketIo = require('socket.io');
const app = require('./app')
const config = require('./config')

const server = http.createServer(app);
const io = socketIo(server)
const gameroom = {}

io.on('connection', (socket) => {
    
    let player = socket.request._query.name;
    console.log(`${player}'s client connected`);
    gameroom[player] = socket.id;
    console.log(gameroom)

    io.emit('room-size', Object.keys(gameroom).length)
    io.emit('update-user-list', gameroom)
    
    let id = 0;
    socket.on('chat message', (msg) => {
        msg.socketId = socket.id
        msg.id = id;
        io.emit('chat message', msg);
        id +=1;
    });

    socket.on('player status', playerStatus => {
        io.emit('player status', playerStatus)
    });

    socket.on("call-user", data => {
        socket.to(data.to).emit("call-made", {
          offer: data.offer,
          socket: socket.id
        });
    });

    socket.on("make-answer", data => {
        socket.to(data.to).emit("answer-made", {
          socket: socket.id,
          answer: data.answer
        });
    });

    socket.on("disconnect", () => {
        console.log(`${player}'s client disconnected`);
        delete gameroom[player];
        console.log(gameroom)
        io.emit('update-user-list', gameroom)
    });
    
});

server.listen(config.PORT, () => {
    console.log(`Server Listening on port ${config.PORT}`)
});