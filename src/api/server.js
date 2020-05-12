const http = require('http');
const socketIo = require('socket.io');
const app = require('./app')
const config = require('./config')

const server = http.createServer(app);
const io = socketIo(server)

let gameroom = {}
let msgId = 0;
let shotId = 0;

io.on('connection', (socket) => {
    
    let player = socket.request._query.name;
    console.log(`${player}'s client connected`);
    gameroom[player] = { 
        socketId: socket.id,
        userIsActive: Object.keys(gameroom).length === 1 ? true : false
    };
    console.log(gameroom)

    io.emit('update-gameroom', gameroom)
    
    socket.on('chat message', (msg) => {
        msg.socketId = socket.id
        msg.id = msgId;
        io.emit('chat message', msg);
        msgId++
    });

    socket.on('update-gameroom', newRoom => {
        gameroom = newRoom //update the gameroom on server
        io.emit('update-gameroom', gameroom)
    });

    socket.on("request capture", screenshot => {
        screenshot.shotId = shotId
        shotId++
        io.emit("execute capture", screenshot)
    })

    socket.on("capture taken", screenshot => {
        io.emit("screenshot", screenshot)
    })

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
        io.emit('update-gameroom', gameroom)
    });
    
});

server.listen(config.PORT, () => {
    console.log(`Server Listening on port ${config.PORT}`)
});