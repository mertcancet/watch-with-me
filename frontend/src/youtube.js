import axios from 'axios';

const API_KEY = 'AIzaSyC7CRFK9VK_s_4ethJu2vEIWj6TyR1aAeM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: 'snippet',
  type: 'video',
  maxResults: 5,
  key: API_KEY,
});
