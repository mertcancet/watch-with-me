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

const dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.listen(5000, () => {
  console.log('listening on *:5000');
});
