import React from 'react';

import './style.css';

import youtubeApi from './api/youtube';
import { VideoScreen } from './Pages/VideoScreen';
export default class App extends React.Component {
  state = {
    videosMetaInfo: [],
    selectedVideoId: 'EejNUPl5bz0',
  };
  onVideoSelected = (videoId) => {
    this.setState({
      selectedVideoId: videoId,
    });
  };

  onSearch = async (keyword) => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: keyword,
      },
    });
    this.setState({
      videosMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId,
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className='App'>
        <VideoScreen />
      </div>
    );
  }
}
