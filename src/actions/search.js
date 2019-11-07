import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  searchYouTube({key: YOUTUBE_API_KEY, q: q}, (data) => {
    changeVideo(data[0]);
    changeVideoList(data);
  });
  return () => {};
  //TODO:  Write an asynchronous action to handle a video search!

};

export default handleVideoSearch;
