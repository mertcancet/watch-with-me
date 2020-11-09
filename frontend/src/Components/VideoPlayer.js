import React from 'react';
import '../styles/_video.css';
const Videoplayer = ({ videoId }) => {
  if (!videoId) {
    return (
      <p style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}>
        Search for a video
      </p>
    );
  }
  return (
    <div className='video-player'>
      <iframe
        title={videoId}
        className='video-iframe'
        src={`https://www.youtube.com/embed/${videoId}`}
        style={{
          height: '480px',
          width: '720px',
          margin: '5px',
        }}
        controls='0'
        disablekb='1'
      />
    </div>
  );
};

export default Videoplayer;
