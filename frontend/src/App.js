import React from 'react';
import Chat from './Components/Chat';
import { VideoScreen } from './Components/VideoScreen';

export default class App extends React.Component {
  render() {
    return (
      <div className=' container mx-auto p-4'>
        <VideoScreen />
        <Chat />
      </div>
    );
  }
}
