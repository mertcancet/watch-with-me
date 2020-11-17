import React from 'react';
import Chat from './Components/Chat';
import { VideoScreen } from './Components/VideoScreen';

export default class App extends React.Component {
  render() {
    return (
      <div className='bg-white-900'>
        <div className=' container mx-auto p-4 '>
          <div className='max-w-xxl  rounded overflow-hidden shadow-lg p-2 border-solid border-2 border-gray-600 bg-white-800'>
            <VideoScreen className='my-auto' />
            <Chat />
          </div>
        </div>
      </div>
    );
  }
}
