var path = require('path');
var express = require('express');
var http = require('http').createServer(express());
var io = require('socket.io')(http);
var dotenv = require('dotenv');
var cors = require('cors');

const app = express();
dotenv.config();

app.use(cors());
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('play', () => {
    io.emit('play');
  });
  socket.on('pause', () => {
    io.emit('pause');
  });

  socket.on('current time', (currentTime) => {
    io.emit('current time', currentTime);
  });
});

app.get('/', (req, res) => {
  res.send('server running');
});

http.listen(5000, () => {
  console.log('listening on *:5000');
});
