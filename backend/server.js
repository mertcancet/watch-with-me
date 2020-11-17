var express = require('express');
var http = require('http').createServer(express());
var io = require('socket.io')(http);

const app = express();
app.use(express.json());

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
  socket.on('play', () => {
    console.log('play');
    io.emit('play');
  });
  socket.on('pause', () => {
    console.log('pause');
    io.emit('pause');
  });
  socket.on('current time', (currentTime) => {
    io.emit('current time', currentTime);
  });
});

http.listen(5000, () => {
  console.log('listening on *:5000');
});
