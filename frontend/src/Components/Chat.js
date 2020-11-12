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
    socket.emit('chat message', message);
  };
  return (
    <div className="">
      <form onSubmit={chatHandler} className=" relative">
        <input
          className='bg-whit-700 border text-orange-500 mr-3 py-1 px-2 leading-bold focus:outline-none width'
          type='text'
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className='m-2 bg-white hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-black-700 hover:border-transparent rounded inset-y-0 right-0' 
          type='submit'
        >
          Gönder
        </button>
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
