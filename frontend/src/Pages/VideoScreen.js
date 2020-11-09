import React, { useState, useEffect, useLayoutEffect } from 'react';
import YouTube from 'react-youtube';
import { DurationBar, durationBar } from '../Components/DurationBar';
import '../styles/_videoScreen.css';

export const VideoScreen = () => {
  const [pause, setPause] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [player, setPlayer] = useState({});
  const [duration, setDuration] = useState();

  const opts = {
    height: '480',
    width: '720',
    playerVars: {
      controls: 1,
      disablekb: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      autoplay: 0,
    },
  };
  //-BUTTONS
  const pauseHandler = () => {
    player.pauseVideo();
  };
  const playHandler = () => {
    player.playVideo();
  };
  const selam = () => {
    console.log(player);
    player.seekTo(50);
  };
  const timeBarHandler = (e) => {
    player.pauseVideo();
    let time = e.target.value;
    let current = (time * duration) / 100;
    console.log({ current });
    player.seekTo(current);
    player.playVideo();
  };
  const videoOnReady = (event) => {
    // access to player in all event handlers via event.target
    const player = event.target;
    player.playVideoAt(50);
    setPlayer(player);
    setDuration(player.getDuration());
    setInterval(() => {
      setCurrentTime(player.getCurrentTime());
    }, 1000);
  };
  const videoOnPlay = (event) => {
    setCurrentTime(event.target.getCurrentTime());
    // console.log(event.target);
  };

  const videoOnStateChange = (event) => {
    // console.log('statechange', event.target);
    const player = event.target;
    setCurrentTime(event.target.getCurrentTime());
    if (pause === true) {
      event.target.pauseVideo();
    }
    player.playVideoAt(currentTime);
  };

  const videoOnPause = (event) => {
    // console.log('pause', event.target);
    setCurrentTime(event.target.getCurrentTime());
  };

  // console.log({ currentTime });
  // console.log({ duration });
  let timeBar = (currentTime / duration) * 100;
  let timeBarRounded = 0;
  timeBarRounded = Math.round(timeBar);
  return (
    <div>
      <YouTube
        videoId='5eYuUAV4YE4'
        opts={opts}
        onReady={videoOnReady}
        onPlay={videoOnPlay}
        onStateChange={videoOnStateChange}
        onPause={videoOnPause}
      />
      <button onClick={playHandler}>Play</button>
      <button onClick={pauseHandler}>Pause</button>
      <p>Progress component</p>

      <button onClick={selam}>Selam </button>
      <input
        className='timeBar'
        type='range'
        name='currentTime'
        min={1}
        max={100}
        value={timeBarRounded}
        onChange={timeBarHandler}
      />

      {<p>{timeBarRounded}</p>}
    </div>
  );
};
