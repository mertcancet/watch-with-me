import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import '../styles/_chat.css';

const socket = io.connect('localhost:5000/', {
  transports: ['websocket'],
});

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
    setMessage('');
  };
  return (
    <div className='chatbox'>
      <div className='chatbox__chat scroll'>
        {chat.map((message, index) => (
          <div key={index} className='chatbox__chat__index'>
            <>
              {'>'} {message}
            </>
          </div>
        ))}
      </div>
      <form onSubmit={chatHandler} className='chatbox__form '>
        <input
          className='chatbox__form__input bg-whit-700 border text-orange-500 py-2 px-2 leading-bold focus:outline-none w-4/6 mr-5'
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className='bg-white900  hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-2 ml-5 border border-black-700 hover:border-transparent rounded w-1/6'
          type='submit'
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default Chat;
