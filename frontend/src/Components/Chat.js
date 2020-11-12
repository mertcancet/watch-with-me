import React, { useState, useEffect } from 'react';

import io from 'socket.io-client';

import '../styles/_chat.css';
const socket = io.connect('localhost:3000', { transports: ['websocket'] });

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  useEffect(() => {
    socket.on('chat message', (message) => {
      setChat([...chat, message]);
    });
  });
  const chatHandler = (e) => {
    e.preventDefault();
    console.log('tı');
    socket.emit('chat message', message);
  };
  console.log(chat);
  return (
    <div>
      <form onSubmit={chatHandler}>
        <input type='text' onChange={(e) => setMessage(e.target.value)} />
        <button type='submit'>Gönder</button>
      </form>

      {chat.map((message, index) => (
        <div key={index}>
          <h3>{message}</h3>
        </div>
      ))}
    </div>
  );
};

export default Chat;
