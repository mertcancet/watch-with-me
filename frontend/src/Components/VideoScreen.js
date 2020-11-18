import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import io from 'socket.io-client';
import '../styles/_videoScreen.css';

const socket = io.connect('localhost:5000', { transports: ['websocket'] });

export const VideoScreen = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [player, setPlayer] = useState({});
  const [duration, setDuration] = useState();

  useEffect(() => {});
  const opts = {
    height: '480',
    width: '720',
    playerVars: {
      controls: 0,
      disablekb: 0,
      modestbranding: 1,
      rel: 0,
      autoplay: 0,
    },
  };
  //BUTTONS
  const pauseHandler = () => {
    socket.emit('pause');
    player.pauseVideo();
  };
  const playHandler = () => {
    socket.emit('play');
    player.playVideo();
  };

  //react-youtube functions

  const timeBarHandler = (e) => {
    player.pauseVideo();
    let time = e.target.value;
    let current = (time * duration) / 10000;
    player.seekTo(current);
    player.playVideo();
    socket.emit('current time', current);
  };
  const videoOnReady = (event) => {
    // access to player in all event handlers via event.target
    const player = event.target;
    player.playVideo();
    setPlayer(player);
    setDuration(player.getDuration());
    setInterval(() => {
      setCurrentTime(player.getCurrentTime());
      socket.on('current time', (currentTime) => {
        player.seekTo(currentTime);
        player.playVideo();
        console.log('selam');
      });
      socket.on('play', () => {
        player.playVideo();
      });
      socket.on('pause', () => {
        player.pauseVideo();
      });
    }, 1000);
  };
  const videoOnPlay = (event) => {
    setCurrentTime(event.target.getCurrentTime());
  };

  const videoOnStateChange = (event) => {
    const player = event.target;
    setCurrentTime(event.target.getCurrentTime());

    player.playVideoAt(currentTime);
  };

  const videoOnPause = (event) => {
   setCurrentTime(event.target.getCurrentTime());
  };


  let timeBar = (currentTime / duration) * 10000;
  let timeBarRounded = 0;
  timeBarRounded = Math.round(timeBar);

  return (
    <div>
      <div>
        <YouTube
          className='rounded'
          videoId='3m07zMRXXP0'
          opts={opts}
          onReady={videoOnReady}
          onPlay={videoOnPlay}
          onStateChange={videoOnStateChange}
          onPause={videoOnPause}
        />
      </div>

      <input
        className='mt-2'
        type='range'
        name='currentTime'
        min={1}
        max={10000}
        value={timeBarRounded}
        onChange={timeBarHandler}
      />
      <br />
      <button
        className='m-2 bg-white hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-black-700 hover:border-transparent rounded'
        onClick={playHandler}
      >
        Play
      </button>
      <button
        className='m-2 bg-white hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-black-700 hover:border-transparent rounded'
        onClick={pauseHandler}
      >
        Pause
      </button>
    </div>
  );
};
