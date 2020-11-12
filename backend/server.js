var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

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
    console.log('current time', currentTime);
    io.emit('current time', currentTime);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
